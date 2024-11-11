import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
    TemplateRef,
} from '@angular/core';
import {ApplicationConfig} from '../../shared/application-config/application-config.interface';
import {PopupService} from '../../shared/popup/popup.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    private readonly popupService = inject(PopupService);

    @Input() applicationConfig: ApplicationConfig | undefined;

    @Output() menuClick = new EventEmitter<void>();

    onClick() {
        this.menuClick.emit();
    }

    openPopup(template: TemplateRef<{$implicit: string}>) {
        this.popupService.openPopup({
            template,
            context: {$implicit: this.applicationConfig?.title},
        });
    }

    closePopup() {
        this.popupService.closePopup();
    }
}
