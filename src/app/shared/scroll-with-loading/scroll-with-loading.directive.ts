import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {isScrollReachedBottomOffcet} from './utils/is-scroll-reached-bottom-offcet';

// Without uniq event
// ------------------
@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    private prevScrollTop = -1;

    @Output() readonly loadNextData = new EventEmitter<void>();

    @HostListener('scroll', ['$event.target'])
    onScroll({scrollTop, clientHeight, scrollHeight}: HTMLElement) {
        const prevScrollTop = this.prevScrollTop;

        this.prevScrollTop = scrollTop;

        const lowerScrollPosition = scrollHeight - clientHeight;
        const shouldLoadMessagesDown = isScrollReachedBottomOffcet(
            scrollTop,
            lowerScrollPosition,
            prevScrollTop,
        );

        if (shouldLoadMessagesDown) {
            this.loadNextData.emit();
        }
    }
}

// With uniq event
// ---------------
// @Directive({
//     selector: '[appScrollWithLoading]',
// })
// export class ScrollWithLoadingDirective {
//     private prevScrollTop = -1;
//     private shouldLoadMessagesDown = false;

//     @Output() readonly loadNextData = new EventEmitter<void>();

//     @HostListener('scroll', ['$event.target'])
//     onScroll({scrollTop, clientHeight, scrollHeight}: HTMLElement) {
//         const previousShouldLoadMessagesDown = this.shouldLoadMessagesDown;

//         this.updateLocationArea(scrollTop, clientHeight, scrollHeight);

//         const insertInBottomOffset = this.shouldLoadMessagesDown && !previousShouldLoadMessagesDown;

//         if (insertInBottomOffset) {
//             this.loadNextData.emit();
//         }
//     }

//     private updateLocationArea(scrollTop: number, clientHeight: number, scrollHeight: number) {
//         const prevScrollTop = this.prevScrollTop;

//         this.prevScrollTop = scrollTop;

//         const lowerScrollPosition = scrollHeight - clientHeight;
//         const shouldLoadMessagesDown = isScrollReachedBottomOffcet(
//             scrollTop,
//             lowerScrollPosition,
//             prevScrollTop,
//         );

//         this.shouldLoadMessagesDown = shouldLoadMessagesDown;
//     }
// }
