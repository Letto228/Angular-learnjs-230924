import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
    @Input() brands: string[] | null = null;

    searchValue = 'Egor';

    sendData(data: unknown) {
        // eslint-disable-next-line no-console
        console.log(data);
    }
}
