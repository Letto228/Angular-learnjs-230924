import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    private isNeedToLoad = false;

    @Output() readonly loadNextData = new EventEmitter<void>();
    @Input() offset = 100;

    @HostListener('scroll', ['$event.target'])
    onScroll({scrollHeight, clientHeight, scrollTop}: HTMLElement) {
        const isNeedToLoadPrev = this.isNeedToLoad;

        this.isNeedToLoad = scrollHeight - clientHeight - scrollTop < this.offset;

        if (this.isNeedToLoad && !isNeedToLoadPrev) {
            this.loadNextData.emit();
        }
    }
}
