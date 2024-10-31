import {Directive, inject, Input, TemplateRef, ViewContainerRef} from '@angular/core';

interface MyNgIfDirectiveContext<T> {
    $implicit: T;
    appMyNgIf: T;
}

@Directive({
    selector: '[appMyNgIf]',
})
export class MyNgIfDirective<T> {
    private readonly viewContainerRef = inject(ViewContainerRef);
    private readonly templateRef = inject<TemplateRef<MyNgIfDirectiveContext<T>>>(TemplateRef);

    @Input() set appMyNgIf(value: T | null | undefined) {
        this.viewContainerRef.clear();

        if (value) {
            this.viewContainerRef.createEmbeddedView(this.templateRef, {
                $implicit: value,
                appMyNgIf: value,
            });
        }
    }

    static ngTemplateContextGuards<T>(
        _directive: MyNgIfDirective<T>,
        _context: unknown,
    ): _context is MyNgIfDirectiveContext<T> {
        return true;
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    static ngTemplateGuard_appMyNgIf<T>(
        _directive: MyNgIfDirective<T>,
        _inputValue: T | null | undefined,
    ): _inputValue is T {
        return true;
    }
}
