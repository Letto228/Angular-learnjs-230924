import {Injectable, TemplateRef} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface PopupData<T> {
    template: TemplateRef<T>;
    context: T;
}

@Injectable({
    providedIn: 'root',
})
export class PopupHostService {
    private readonly templateStore$ = new BehaviorSubject<PopupData<{$implicit: string}> | null>(
        null,
    );

    readonly template$ = this.templateStore$.asObservable();

    openPopup(data: PopupData<{$implicit: string}>) {
        this.templateStore$.next(data);
    }

    closePopup() {
        this.templateStore$.next(null);
    }
}
