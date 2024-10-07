import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
    @ViewChild(MatDrawer)
    private readonly drawerComponent: MatDrawer | undefined;

    toggleSidenavOpened() {
        this.drawerComponent?.toggle();
    }
}
