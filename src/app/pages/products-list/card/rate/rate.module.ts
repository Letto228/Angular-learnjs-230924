import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StarIconModule} from 'src/app/shared/star-icon/star-icon.module';
import {RateComponent} from './rate.component';

@NgModule({
    declarations: [RateComponent],
    imports: [CommonModule, StarIconModule],
    exports: [RateComponent],
})
export class RateModule {}
