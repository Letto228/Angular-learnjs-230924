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
    @ViewChild('popupContainer', {read: ViewContainerRef, static: true})
    private readonly popupContainerRef: ViewContainerRef | undefined;

    @Input()
    set template(template: TemplateRef<unknown> | null) {
        this.insertTemplate(template);
    }

    get isEmptyTemplate(): boolean {
        return !this.popupContainerRef?.length;
    }

    private insertTemplate(template: TemplateRef<unknown> | null) {
        this.popupContainerRef?.clear();

        if (template) {
            this.popupContainerRef?.createEmbeddedView(template);
        }
    }
}
