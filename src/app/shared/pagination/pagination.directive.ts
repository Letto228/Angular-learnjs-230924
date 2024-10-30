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

interface PaginationDirectiveContext<T> {
    $implicit: T[];
    index: number;
    pageIndexes: number[];
    appPaginationOf: T[];
    next: () => void;
    back: () => void;
    selectIndex: (index: number) => void;
}

@Directive({
    selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnChanges {
    private readonly viewContainerRef = inject(ViewContainerRef);
    private readonly templateRef = inject<TemplateRef<PaginationDirectiveContext<T>>>(TemplateRef);

    private readonly currentIndex$ = new BehaviorSubject<number>(0);

    @Input() appPaginationOf: T[] | null | undefined;
    @Input() appPaginationChunkSize: number | undefined;

    constructor() {
        this.listenCurrentIndex();
    }

    private get getPageIndexes(): number[] {
        const appPaginationChunkSize = this.appPaginationChunkSize
            ? this.appPaginationChunkSize
            : 1;

        return Array.from(
            new Array(
                this.appPaginationOf
                    ? Math.ceil(this.appPaginationOf.length / appPaginationChunkSize)
                    : 0,
            ).keys(),
        );
    }

    private get shouldShowView(): boolean {
        return !!this.appPaginationOf?.length;
    }

    ngOnChanges({appPaginationOf}: SimpleChanges): void {
        if (appPaginationOf) {
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

    private getCurrentContext(currentIndex: number): PaginationDirectiveContext<T> {
        const appPaginationOf = this.appPaginationOf as T[];
        const appPaginationChunkSize = this.appPaginationChunkSize
            ? this.appPaginationChunkSize
            : 1;

        const pageContent = appPaginationOf.slice(
            currentIndex * appPaginationChunkSize,
            currentIndex * appPaginationChunkSize + appPaginationChunkSize,
        );

        return {
            appPaginationOf,
            index: currentIndex,
            $implicit: pageContent,
            pageIndexes: this.getPageIndexes,
            selectIndex: index => {
                this.selectIndex(index);
            },
            next: () => {
                this.next();
            },
            back: () => {
                this.back();
            },
        };
    }

    private next() {
        const nextIndex = this.currentIndex$.value + 1;
        const newIndex = nextIndex < this.getPageIndexes!.length ? nextIndex : 0;

        this.currentIndex$.next(newIndex);
    }

    private back() {
        const previousIndex = this.currentIndex$.value - 1;
        const lastIndex = this.getPageIndexes!.length - 1;
        const newIndex = previousIndex < 0 ? lastIndex : previousIndex;

        this.currentIndex$.next(newIndex);
    }

    private selectIndex(index: number) {
        this.currentIndex$.next(index);
    }
}
