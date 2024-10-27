import {
    ChangeDetectionStrategy,
    Component,
    Input,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewport: ViewContainerRef | undefined;

    @Input()
    set template(template: TemplateRef<unknown> | null) {
        this.viewContent(template);
    }

    private viewContent(popupContentTemplate: TemplateRef<unknown> | null): void {
        this.viewport?.clear();

        if (popupContentTemplate) {
            this.viewport?.createEmbeddedView(popupContentTemplate);
        }
    }

    get isNoContent(): boolean {
        return !this.viewport?.length;
    }
}
