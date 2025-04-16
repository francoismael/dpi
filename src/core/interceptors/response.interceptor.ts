import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          meta: {
            timestamp: new Date().toISOString(),
          },
          error: null,
        };
      }),
      catchError((err) => {
        const response = context.switchToHttp().getResponse();
        const status = err.status || 500;
        const errorResponse = {
          data: null,
          meta: {
            timestamp: new Date().toISOString(),
          },
          error: {
            code: err.code || 'UNKNOWN_ERROR',
            message: err.message || 'Une erreur est survenue',
            details: err.details || [],
          },
        };
        response.status(status).json(errorResponse);
        return throwError(() => err);
      }),
    );
  }
}
