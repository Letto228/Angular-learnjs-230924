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
}
