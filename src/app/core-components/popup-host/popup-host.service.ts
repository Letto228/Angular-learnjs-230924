import {Injectable, TemplateRef} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface PopupData {
    template: TemplateRef<object>;
    context: object;
}

@Injectable({
    providedIn: 'root',
})
export class PopupHostService {
    private readonly templateStore$ = new BehaviorSubject<PopupData | null>(null);

    readonly template$ = this.templateStore$.asObservable();

    openPopup(data: PopupData) {
        this.templateStore$.next(data);
    }

    closePopup() {
        this.templateStore$.next(null);
    }
}
