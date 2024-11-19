import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
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
export class PopupHostComponent implements OnInit {
    @ViewChild('popupHostContainer', {read: ViewContainerRef, static: true})
    private readonly popupHostContainer: ViewContainerRef | undefined;

    @Input() template: TemplateRef<unknown> | null = null;

    insertTemplate(template: TemplateRef<unknown> | null): void {
        this.popupHostContainer?.clear();

        if (template) {
            this.popupHostContainer?.createEmbeddedView(template);
        }
    }

    ngOnInit(): void {
        this.insertTemplate(this.template);
    }
}
