import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {tap} from 'rxjs';
import {PopupHostStoreService} from './popup-host-store.service';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    private readonly popupHostStoreService = inject(PopupHostStoreService);
    private readonly cdr = inject(ChangeDetectorRef);
    readonly popup$ = this.popupHostStoreService.popup$.pipe(
        tap(popup => {
            this.isPoputContentClear = !popup?.template;
            this.cdr.markForCheck();
        }),
    );

    isPoputContentClear = false;

    onClose() {
        this.popupHostStoreService.closePopup();
    }
}
