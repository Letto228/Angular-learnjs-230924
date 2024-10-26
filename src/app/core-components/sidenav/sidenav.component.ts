import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    inject,
    OnInit,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
    @ViewChild(MatDrawer, {static: true})
    private readonly drawerComponent: MatDrawer | undefined;

    @ViewChild('viewport', {read: ViewContainerRef, static: true})
    private readonly viewport: ViewContainerRef | undefined;

    @ContentChild('navigationList', {read: TemplateRef, static: true})
    private readonly navigationListTemplate:
        | TemplateRef<{name: string; $implicit: string; contry: string; array: unknown[]}>
        | undefined;

    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    ngOnInit() {
        this.insertNavigation(this.navigationListTemplate);
    }

    // Triger on input change with set property
    // @Input()
    // set navigationListTemplate(
    //     template:
    //         | TemplateRef<{name: string; $implicit: string; contry: string; array: unknown[]}>
    //         | undefined,
    // ) {
    //     this.insertNavigation(template);
    // }

    // Triger on input change with OnChanges
    // @Input() navigationListTemplate: TemplateRef<unknown> | undefined;

    // ngOnChanges({navigationListTemplate}: SimpleChanges): void {
    //     if (navigationListTemplate) {
    //         this.insertNavigation(this.navigationListTemplate);
    //     }

    //     // if (navigationListTemplate && this.navigationListTemplate) {
    //     //     this.insertNavigation(this.navigationListTemplate);
    //     // }

    //     // if (navigationListTemplate && !this.navigationListTemplate) {
    //     //     this.viewport?.clear();
    //     // }
    // }

    toggleSidenavOpened() {
        this.drawerComponent?.toggle();
        this.changeDetectorRef.markForCheck();
    }

    private insertNavigation(
        navigationListTemplate:
            | TemplateRef<{name: string; $implicit: string; contry: string; array: unknown[]}>
            | undefined,
    ): void {
        this.viewport?.clear();

        if (navigationListTemplate) {
            this.viewport?.createEmbeddedView(navigationListTemplate, {
                $implicit: 'Egor',
                name: 'This Egor',
                contry: 'Moscow',
                array: [],
            });
            // this.viewport?.createEmbeddedView(navigationListTemplate, [1, 2, 3, 'test']); // Dont work
        }
    }
    // private insertNavigation(navigationListTemplate: TemplateRef<unknown>): void {
    //     this.viewport?.clear();
    //     this.viewport?.createEmbeddedView(navigationListTemplate);
    // }
}
