import {Injectable, TemplateRef} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {PopupTemplateOutlet} from './popup-host.model';

@Injectable({
    providedIn: 'root',
})
export class PopupHostStoreService {
    private readonly popupStore$ = new BehaviorSubject<PopupTemplateOutlet<{
        $implicit: string;
    }> | null>(null);

    readonly popup$ = this.popupStore$.asObservable();

    openPopup(template: TemplateRef<{$implicit: string}> | null, context: {$implicit: string}) {
        const popupTemplate: PopupTemplateOutlet<{$implicit: string}> = {
            template,
            context,
        };

        this.popupStore$.next(popupTemplate);
    }

    closePopup() {
        this.popupStore$.next(null);
    }
}
