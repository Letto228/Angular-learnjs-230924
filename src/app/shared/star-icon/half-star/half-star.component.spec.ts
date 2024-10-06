import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HalfStarComponent} from './half-star.component';

describe('HalfStarComponent', () => {
    let component: HalfStarComponent;
    let fixture: ComponentFixture<HalfStarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HalfStarComponent],
        });
        fixture = TestBed.createComponent(HalfStarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
