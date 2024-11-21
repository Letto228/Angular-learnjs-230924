import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {PopupHostComponent} from './popup-host.component';

@NgModule({
    imports: [CommonModule, MatButtonModule, MatIconModule],
    declarations: [PopupHostComponent],
    exports: [PopupHostComponent],
})
export class PopupHostModule {}
