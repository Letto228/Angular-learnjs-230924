import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {CardItemComponent} from './card-item.component';

@NgModule({
    declarations: [CardItemComponent],
    imports: [CommonModule, MatCardModule, MatButtonModule, NgOptimizedImage],
    exports: [CardItemComponent],
})
export class CardItemModule {}