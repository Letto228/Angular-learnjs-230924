import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    ElementRef,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild,
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {interval} from 'rxjs';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent
    implements
        OnChanges,
        OnInit,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy
{
    // private readonly changeDetectorRef = inject(ChangeDetectorRef);

    @ViewChild(MatDrawer)
    private readonly drawerComponent: MatDrawer | undefined;

    @ViewChild(MatDrawer, {read: ElementRef, static: false})
    private readonly drawerElement: ElementRef | undefined;

    intervalCount = 0;

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
        // this.changeDetectorRef.detach();

        // setTimeout(() => {
        //     this.changeDetectorRef.detectChanges();
        // }, 0);

        // setTimeout(() => {
        //     // this.changeDetectorRef.detectChanges();
        //     this.changeDetectorRef.reattach();
        // }, 4000);

        interval(1000).subscribe(value => {
            this.intervalCount = value;

            // this.changeDetectorRef.detectChanges();
            // this.changeDetectorRef.markForCheck();
        });

        // interval(1000).subscribe(value => {
        // });
        // interval(1000).subscribe(value => {
        // });
        // interval(1000).subscribe(value => {
        // });
    }

    ngOnChanges(_simpleChanges: SimpleChanges): void {
        // eslint-disable-next-line no-console
        console.log('ngOnChanges.');
    }

    ngOnInit(): void {
        // eslint-disable-next-line no-console
        console.log('ngOnInit.', this.drawerElement);
    }

    ngDoCheck(): void {
        // eslint-disable-next-line no-console
        console.log('ngDoCheck.');
    }

    ngAfterContentInit(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterContentInit.');
    }

    ngAfterContentChecked(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterContentChecked.');
    }

    ngAfterViewInit(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterViewInit.', this.drawerElement);
    }

    ngAfterViewChecked(): void {
        // eslint-disable-next-line no-console
        console.log('ngAfterViewChecked.');
    }

    ngOnDestroy(): void {
        // eslint-disable-next-line no-console
        console.log('ngOnDestroy.');
    }

    toggleSidenavOpened() {
        // eslint-disable-next-line no-console
        console.log(this.drawerElement);

        this.drawerComponent?.toggle();
    }
}
