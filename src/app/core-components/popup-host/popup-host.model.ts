import {TemplateRef} from '@angular/core';

export interface PopupTemplateOutlet<T> {
    context: T;
    template: TemplateRef<T> | null;
}
