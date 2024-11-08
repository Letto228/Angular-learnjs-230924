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
import {PopupHostService} from '../popup-host/popup-host.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    private readonly popupService = inject(PopupHostService);
    @Input() applicationConfig: ApplicationConfig | undefined;
    @Input() newStr: string | undefined;

    @Output() menuClick = new EventEmitter<void>();

    onClick() {
        this.menuClick.emit();
    }

    openPopup(template: TemplateRef<{$implicit: string}>) {
        this.popupService.openPopup({
            template,
            context: {
                $implicit: '1337',
            },
        });
    }

    closePopup() {
        this.popupService.closePopup();
    }
}
