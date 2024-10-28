import {
    Directive,
    inject,
    Input,
    OnChanges,
    SimpleChanges,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import {BehaviorSubject, filter, map} from 'rxjs';

interface CarouselDirectiveContext<T> {
    $implicit: T;
    index: number;
    appCarouselOf: T[];
    next: () => void;
    back: () => void;
}

@Directive({
    selector: '[appCarousel]',
})
export class CarouselDirective<T> implements OnChanges {
    private readonly viewContainerRef = inject(ViewContainerRef);
    private readonly templateRef = inject<TemplateRef<CarouselDirectiveContext<T>>>(TemplateRef);

    private readonly currentIndex$ = new BehaviorSubject<number>(0);

    @Input() appCarouselOf: T[] | null | undefined;

    constructor() {
        this.listenCurrentIndex();
    }

    private get shouldShowView(): boolean {
        return !!this.appCarouselOf?.length;
    }

    ngOnChanges({appCarouselOf}: SimpleChanges): void {
        if (appCarouselOf) {
            this.updateView();
        }
    }

    private updateView() {
        if (this.shouldShowView) {
            this.currentIndex$.next(0);

            return;
        }

        this.viewContainerRef.clear();
    }

    private listenCurrentIndex() {
        this.currentIndex$
            .pipe(
                filter(() => this.shouldShowView),
                map(currentIndex => this.getCurrentContext(currentIndex)),
            )
            .subscribe(context => {
                this.viewContainerRef.clear();
                this.viewContainerRef.createEmbeddedView(this.templateRef, context);
            });
    }

    private getCurrentContext(currentIndex: number): CarouselDirectiveContext<T> {
        const appCarouselOf = this.appCarouselOf as T[];

        return {
            appCarouselOf,
            index: currentIndex,
            $implicit: appCarouselOf[currentIndex],
            next: this.next.bind(this),
            back: () => {
                this.back();
            },
        };
    }

    private next() {
        const nextIndex = this.currentIndex$.value + 1;
        const newIndex = nextIndex < this.appCarouselOf!.length ? nextIndex : 0;

        this.currentIndex$.next(newIndex);
    }

    private back() {
        const previousIndex = this.currentIndex$.value - 1;
        const lastIndex = this.appCarouselOf!.length - 1;
        const newIndex = previousIndex < 0 ? lastIndex : previousIndex;

        this.currentIndex$.next(newIndex);
    }
}
