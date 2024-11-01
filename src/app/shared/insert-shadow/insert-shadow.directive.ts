import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appInsertShadow]',
})
export class InsertShadowDirective {
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
