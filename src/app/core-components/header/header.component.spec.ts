import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {By} from '@angular/platform-browser';
import {HeaderComponent} from './header.component';
import {HeaderModule} from './header.module';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HeaderModule, RouterTestingModule],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });

    it('Клик по кнопке мену sync', () => {
        const trigerEvent = new Event('click');
        const debugElement = fixture.debugElement;
        const menuClickEmitSpy = spyOn(component.menuClick, 'emit');

        debugElement
            .query(By.css('[integration-id="header-menu-button"]'))
            .triggerEventHandler('click', trigerEvent);

        expect(menuClickEmitSpy).toHaveBeenCalled();
        // expect(menuClickEmitSpy).toHaveBeenCalledWith(params);
    });

    it('Клик по кнопке мену async', done => {
        const trigerEvent = new Event('click');
        const debugElement = fixture.debugElement;

        component.menuClick.subscribe(event => {
            expect(event).toEqual(undefined);

            done();
        });

        debugElement
            .query(By.css('[integration-id="header-menu-button"]'))
            .triggerEventHandler('click', trigerEvent);
    });
});
