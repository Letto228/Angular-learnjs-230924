import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StarComponent} from './star/star.component';
import {HalfStarComponent} from './half-star/half-star.component';

@NgModule({
    declarations: [StarComponent, HalfStarComponent],
    imports: [CommonModule],
    exports: [StarComponent, HalfStarComponent],
})
export class StarIconModule {}
