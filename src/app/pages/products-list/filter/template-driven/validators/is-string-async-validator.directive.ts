import {ChangeDetectorRef, Directive, inject} from '@angular/core';
import {
    AbstractControl,
    AsyncValidator,
    NG_ASYNC_VALIDATORS,
    ValidationErrors,
} from '@angular/forms';
import {map, Observable, tap, timer} from 'rxjs';
import {isString} from '../../is-string';

@Directive({
    selector: '[appIsStringAsyncValidator]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            multi: true,
            // eslint-disable-next-line no-use-before-define
            useExisting: IsStringAsyncValidatorDirective,
        },
    ],
})
export class IsStringAsyncValidatorDirective implements AsyncValidator {
    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        // eslint-disable-next-line no-console
        console.log('isStringAsyncValidator');

        return timer(3000).pipe(
            map(() => (isString(control.value) ? null : {isString: 'Is string error'})),
            tap(() => {
                this.changeDetectorRef.markForCheck();
            }),
        );
    }
}
