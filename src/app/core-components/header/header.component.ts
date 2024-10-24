import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ApplicationConfig} from '../../shared/application-config/application-config.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    @Input() applicationConfig: ApplicationConfig | undefined;
    @Input() newStr: string | undefined;

    @Output() menuClick = new EventEmitter<void>();

    onClick() {
        this.menuClick.emit();
    }
}
