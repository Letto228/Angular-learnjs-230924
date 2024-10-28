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
        this.insertTemplate(template);
    }

    isContainerVisible = false;

    private insertTemplate(template: TemplateRef<unknown> | null): void {
        this.viewport?.clear();

        if (template) {
            this.viewport?.createEmbeddedView(template);
        }

        this.isContainerVisible = !!template;
    }
}
