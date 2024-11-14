import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    ViewChild,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {CategoriesStoreService} from '../../shared/categories/categories-store.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
    @ViewChild(MatDrawer, {static: true})
    private readonly drawerComponent: MatDrawer | undefined;

    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    private readonly categoriesStoreService = inject(CategoriesStoreService);
    readonly categories$ = this.categoriesStoreService.categories$;

    constructor() {
        this.categoriesStoreService.loadCategories();
    }

    toggleSidenavOpened() {
        this.drawerComponent?.toggle();
        this.changeDetectorRef.markForCheck();
    }
}
