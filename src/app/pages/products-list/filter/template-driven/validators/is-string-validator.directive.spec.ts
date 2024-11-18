import {FormControl, FormsModule, NgModel} from '@angular/forms';
import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IsStringValidatorDirective} from './is-string-validator.directive';
import {ValidatorsModule} from './validators.module';

describe('IsStringValidatorDirective', () => {
    let directive: IsStringValidatorDirective;

    beforeEach(() => {
        directive = new IsStringValidatorDirective();
    });

    it('Без числа', () => {
        const error = directive.validate(new FormControl('String'));

        expect(error).toBeNull();
    });

    it('С числом', () => {
        const error = directive.validate(new FormControl('123'));

        expect(error).toEqual({isString: 'Is string error'});
    });
});

@Component({
    selector: 'app-test',
    template: `
        <input #input appIsStringValidator [ngModel]="search" />
    `,
})
class TestComponent {
    @ViewChild('input', {static: true, read: NgModel})
    model: NgModel | undefined;

    search = '123';
}

describe('IsStringValidatorDirective TestBed', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [ValidatorsModule, FormsModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
    });

    // it('С числом', fakeAsync(() => {
    //     fixture.detectChanges();

    //     // tick(100);
    //     flush();

    //     const error = component.model?.errors;

    //     expect(error).toEqual({isString: 'Is string error'});
    // }));

    it('С числом', async () => {
        fixture.detectChanges();

        await fixture.whenStable();

        const error = component.model?.errors;

        expect(error).toEqual({isString: 'Is string error'});
    });
});
