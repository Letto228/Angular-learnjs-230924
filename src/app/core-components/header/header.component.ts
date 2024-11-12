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
import {PopupHostStoreService} from '../popup-host/popup-host-store.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    private readonly popupHostStoreService = inject(PopupHostStoreService);

    @Input() applicationConfig: ApplicationConfig | undefined;
    @Input() newStr: string | undefined;

    @Output() menuClick = new EventEmitter<void>();

    onClick() {
        this.menuClick.emit();
    }

    openPopup(_template: TemplateRef<{$implicit: string}>) {
        const context = {$implicit: 'test'};

        this.popupHostStoreService.openPopup(_template, context);
    }

    closePopup() {
        this.popupHostStoreService.closePopup();
    }
}
