import {
    HttpHandlerFn,
    HttpInterceptorFn,
    HttpRequest,
} from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
) => {
    const token = localStorage.getItem('token') ?? '';
    req = req.clone({
        setHeaders: {
            Authorization: token ? `Bearer ${token}` : '',
        },
    });

    return next(req);
};
