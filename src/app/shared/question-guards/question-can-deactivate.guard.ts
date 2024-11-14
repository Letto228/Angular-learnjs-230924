import {CanDeactivateFn} from '@angular/router';

export const questionCanDeactivateGuard: CanDeactivateFn<unknown> = (
    _component,
    _currentRoute,
    _currentState,
    _nextState,
) => {
    return window.confirm('Можно уйти с данного конфига?');
};
