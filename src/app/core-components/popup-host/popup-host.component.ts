import {Component, HostBinding, HostListener, inject} from '@angular/core';
import {tap} from 'rxjs';
import {PopupHostService} from './popup-host.service';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    private readonly popupService = inject(PopupHostService);

    @HostBinding('class.empty')
    isEmpty = true;

    readonly data$ = this.popupService.template$.pipe(
        tap(templateData => {
            this.isEmpty = !templateData?.template;
        }),
    );

    @HostListener('document:keydown.escape')
    closePopup() {
        this.popupService.closePopup();
    }
}
