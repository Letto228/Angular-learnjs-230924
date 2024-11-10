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
    isFirst: boolean;
    isLast: boolean;
    index: number;
    pageIndexes: number[];
    appPaginationOf: T[];
    next: () => void;
    back: () => void;
    selectIndex: (pageIndex: number) => void;
}

@Directive({
    selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnChanges {
    private readonly viewContainerRef = inject(ViewContainerRef);
    private readonly templateRef = inject<TemplateRef<PaginationDirectiveContext<T>>>(TemplateRef);

    private readonly currentIndex$ = new BehaviorSubject<number>(0);

    private pages: number[] = [];

    @Input() appPaginationOf: T[] | null | undefined;

    @Input() appPaginationChunkSize = 1;

    constructor() {
        this.listenCurrentIndex();
    }

    ngOnChanges({appPaginationOf, appPaginationChunkSize}: SimpleChanges): void {
        if (appPaginationOf || appPaginationChunkSize) {
            this.updateView();
        }
    }

    private get shouldShowView(): boolean {
        return !!this.appPaginationOf?.length;
    }

    private getPages(): number[] {
        if (this.appPaginationOf?.length && this.appPaginationChunkSize) {
            const pagesCount = Math.ceil(this.appPaginationOf.length / this.appPaginationChunkSize);

            return [...new Array(pagesCount).keys()];
        }

        return [];
    }

    private updateView() {
        if (this.shouldShowView) {
            this.pages = this.getPages();
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
        const appPaginationOf = Array.isArray(this.appPaginationOf) ? this.appPaginationOf : [];

        const currentItems = appPaginationOf.slice(
            currentIndex * this.appPaginationChunkSize,
            currentIndex * this.appPaginationChunkSize + this.appPaginationChunkSize,
        );

        return {
            appPaginationOf,
            index: currentIndex,
            $implicit: currentItems,
            isFirst: currentIndex === 0,
            isLast: currentIndex === this.pages.length - 1,
            next: this.next.bind(this),
            pageIndexes: this.pages,
            back: this.back.bind(this),
            selectIndex: this.selectIndex.bind(this),
        };
    }

    private next() {
        this.currentIndex$.next(this.currentIndex$.value + 1);
    }

    private back() {
        this.currentIndex$.next(this.currentIndex$.value - 1);
    }

    private selectIndex(pageIndex: number) {
        this.currentIndex$.next(pageIndex);
    }
}
