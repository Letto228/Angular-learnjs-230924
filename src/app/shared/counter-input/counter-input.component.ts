import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-counter-input',
    templateUrl: './counter-input.component.html',
    styleUrls: ['./counter-input.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            // eslint-disable-next-line no-use-before-define
            useExisting: CounterInputComponent,
            multi: true,
        },
    ],
})
export class CounterInputComponent implements ControlValueAccessor {
    private readonly changeDetectorRef = inject(ChangeDetectorRef);
    @Input() step = 1;

    counter = 0;
    isDisabled = false;

    onChange: (newInputValue: number) => void = () => {
        throw new Error('onChange функция не установлена');
    };

    onTouched: () => void = () => {
        throw new Error('onTouched функция не установлена');
    };

    writeValue(newInputValue: number): void {
        this.counter = newInputValue;

        this.changeDetectorRef.markForCheck();
    }

    registerOnChange(emitValueCb: (newInputValue: number) => void): void {
        this.onChange = emitValueCb;
    }

    registerOnTouched(touchCb: () => void): void {
        this.onTouched = touchCb;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;

        this.changeDetectorRef.markForCheck();
    }

    back() {
        this.counter -= this.step;

        this.onChange(this.counter);
        this.onTouched();
    }

    next() {
        this.counter += this.step;

        this.onChange(this.counter);
        this.onTouched();
    }
}
