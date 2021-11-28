import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            // setHeaders: {
            //     "x-rapidapi-key": "a65a3788cedd4b469d646b8b93dd204b",
            //     "x-rapidapi-host": "https://api.rawg.io/api"
            // },
            setParams: {
                key: "a65a3788cedd4b469d646b8b93dd204b"
            }
        });
        return next.handle(req);
    }
}