import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-half-star',
    templateUrl: './half-star.component.html',
    styleUrls: ['./half-star.component.css'],
})
export class HalfStarComponent {
    @Input() color = 'orange';
    @Input() size = 16;
}
