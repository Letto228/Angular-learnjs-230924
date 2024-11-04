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

    protected isVisible = false;

    @Input() set template(content: TemplateRef<unknown> | null) {
        this.insertPopupContent(content);
    }

    private insertPopupContent(content: TemplateRef<unknown> | null) {
        this.viewport?.clear();

        if (content) {
            this.isVisible = true;
            this.viewport?.createEmbeddedView(content);
        } else {
            this.isVisible = false;
        }
    }
}
