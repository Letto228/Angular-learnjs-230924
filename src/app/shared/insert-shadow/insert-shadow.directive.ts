import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appInsertShadow]',
})
export class InsertShadowDirective {
    // private readonly element = inject(ElementRef).nativeElement;
    // private readonly render2 = inject(Renderer2);

    // <host-element (click)="InsertShadowDirective.onClick($event.target)"></host-element>
    // @HostListener('click', ['$event.target'])
    // onClick(target: Event['target']) {
    //     console.log('Host clicked', target);
    // }

    // <host-element (click)="InsertShadowDirective.onClick($event.clientX, $event.clientY)"></host-element>
    // @HostListener('click', ['$event.clientX', '$event.clientY'])
    // onClick(x: number, y: number) {
    //     console.log('Host clicked', x, y, this.element);
    // }

    // <host-element [style.boxShadow]="InsertShadowDirective.boxShadow"></host-element>
    // @HostBinding('style.boxShadow')
    // boxShadow = '';

    // @HostListener('click')
    // toggleShadow() {
    //     this.boxShadow = !this.boxShadow ? 'inset 0 0 10px #000' : '';
    // }

    // -----------------------------------------------------------------

    private isBoxShadowActive = false;

    @HostBinding('style.boxShadow')
    get boxShadow(): string {
        return this.isBoxShadowActive ? 'inset 0 0 10px #000' : '';
    }

    @HostListener('click')
    toggleShadow() {
        this.isBoxShadowActive = !this.isBoxShadowActive;
    }
}
