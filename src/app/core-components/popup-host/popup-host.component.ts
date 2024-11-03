import {
    ChangeDetectionStrategy,
    Component,
    ViewChild,
    TemplateRef,
    ViewContainerRef,
    Input,
} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
    @ViewChild('popupContent', {read: ViewContainerRef, static: true})
    private readonly popupContainer: ViewContainerRef | undefined;

    @Input() set template(template: TemplateRef<unknown> | null) {
        this.updatePopupContent(template);
    }

    get popupEmpty(): boolean {
        return !this.popupContainer?.length;
    }

    private updatePopupContent(template: TemplateRef<unknown> | null) {
        this.popupContainer?.clear();

        if (template) {
            this.popupContainer?.createEmbeddedView(template);
        }
    }
}
