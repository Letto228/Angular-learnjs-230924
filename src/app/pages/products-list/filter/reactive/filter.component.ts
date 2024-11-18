import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {
    AbstractControl,
    AsyncValidatorFn,
    FormArray,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import {map, Observable, timer} from 'rxjs';
import {isString} from '../is-string';

// const isStringValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>
//     isString(control.value) ? null : {isString: 'Is string error'};

const isStringAsyncValidator: AsyncValidatorFn = (
    control: AbstractControl,
): Observable<ValidationErrors | null> => {
    // eslint-disable-next-line no-console
    console.log('isStringAsyncValidator');

    return timer(3000).pipe(
        map(() => (isString(control.value) ? null : {isString: 'Is string error'})),
    );
};

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnChanges {
    @Input() brands: string[] | null = null;

    // readonly searchControl = new FormControl('');
    readonly form = new FormGroup({
        search: new FormControl('', {
            validators: [Validators.minLength(3), Validators.required],
            asyncValidators: [isStringAsyncValidator],
        }),
        brands: new FormArray<FormControl<boolean>>([]),
        priceRange: new FormGroup({
            min: new FormControl(0),
            max: new FormControl(999999),
        }),
    });

    readonly searchControlErrors$ = this.form
        .get('search')
        ?.statusChanges.pipe(map(() => this.form.get('search')?.errors));

    constructor() {
        // setTimeout(() => {
        //     this.searchControl.setValue('Egor');
        // }, 3000);
        // this.searchControl.valueChanges.subscribe(console.log);
        // this.form.get('priceRange')?.valueChanges.subscribe(console.log);
        // eslint-disable-next-line no-console
        this.form.valueChanges.subscribe(console.log);
    }

    ngOnChanges({brands}: SimpleChanges): void {
        if (brands) {
            this.updateBrandsContols();
        }
    }

    private updateBrandsContols() {
        const brandsFrom = this.brands?.length ? this.brands.map(() => new FormControl(false)) : [];

        const newFormArray = new FormArray(brandsFrom as Array<FormControl<boolean>>);

        this.form.setControl('brands', newFormArray);
    }
}
