import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';
import {ApplicationConfig} from '../../shared/application-config/application-config.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnChanges {
    @Input() applicationConfig: ApplicationConfig | undefined;
    @Input() newStr: string | undefined;

    @Output() menuClick = new EventEmitter<void>();

    ngOnChanges({applicationConfig, newStr}: SimpleChanges): void {
        if (applicationConfig) {
            // eslint-disable-next-line no-console
            console.log(
                applicationConfig.previousValue,
                applicationConfig.currentValue,
                this.applicationConfig,
                this.applicationConfig === applicationConfig.currentValue,
                // applicationConfig.firstChange,
            );
        }

        if (newStr) {
            // eslint-disable-next-line no-console
            console.log(newStr);
        }
    }

    onClick() {
        this.menuClick.emit();
    }
}
