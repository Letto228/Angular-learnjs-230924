import {CanActivateFn} from '@angular/router';

export const questionCanActivateGuard: CanActivateFn = (_route, _state) => {
    return window.confirm('Можно перейти по данному конфигу?');
};
