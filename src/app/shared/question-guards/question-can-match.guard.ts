import {CanMatchFn} from '@angular/router';

export const questionCanMatchGuard: CanMatchFn = (_route, _segments) => {
    return window.confirm('Это нужный(искомый) конфиг?');
};
