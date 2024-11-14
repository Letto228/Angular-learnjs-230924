import {CanActivateChildFn} from '@angular/router';

export const questionCanActivateChildGuard: CanActivateChildFn = (_childRoute, _state) => {
    return window.confirm('Можно перейти по дочернему конфигу?');
};
