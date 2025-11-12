import { Injectable } from "@angular/core";
import { LoggedInUser, CreditCheckResult } from "./mock.interface";
import { Observable, of, throwError, defer } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class MockService {

    private creditCheckAttempt = 0;

    private maxAttemptsForLogggedInUser = 2;
    private currentAttempt = 0;

    getLoggedInUser(): Observable<LoggedInUser> {
        return defer(() => {
            console.log('Attempt to get logged in user:', this.currentAttempt + 1);
            if (this.currentAttempt < this.maxAttemptsForLogggedInUser) {
                this.currentAttempt++;
                return throwError(() => ({
                    message: 'Service Unavailable',
                    status: 503
                }));
            } else {
                return of({
                    userName: 'John Doe',
                    userEmail: 'john.doe@example.com'
                });
            }
        });
    }

    doCreditCheck(): Observable<CreditCheckResult> {
        return defer(() => {
            this.creditCheckAttempt++;
            console.log('Credit check attempt:', this.creditCheckAttempt);
            const completed = this.creditCheckAttempt > 5;
            return of({ completed });
        });
    }

}