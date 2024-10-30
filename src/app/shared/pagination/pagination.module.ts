import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {PaginationDirective} from './pagination.directive';

@NgModule({
    declarations: [PaginationDirective],
    imports: [CommonModule, MatButtonModule],
    exports: [PaginationDirective],
})
export class PaginationModule {}
