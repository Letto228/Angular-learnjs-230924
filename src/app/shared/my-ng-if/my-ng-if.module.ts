import {NgModule} from '@angular/core';
import {MyNgIfDirective} from './my-ng-if.directive';

@NgModule({
    declarations: [MyNgIfDirective],
    exports: [MyNgIfDirective],
})
export class MyNgIfModule {}
