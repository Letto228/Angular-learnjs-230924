import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {applicationConfigMock} from './shared/application-config/application-config.mock';
import {State} from './store/reducer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    readonly applicationConfig = applicationConfigMock;

    constructor() {
        // eslint-disable-next-line no-console
        inject<Store<State>>(Store).subscribe(console.log);
    }
}
