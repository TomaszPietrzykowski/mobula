import { ErrorHandler, Injectable } from '@angular/core';

// temporary env
const environment = { production: true };

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error: unknown): void {
    if (error instanceof Error) {
      if (environment.production) {
        this.handleProductionError(error);
      } else {
        this.handleDevelopmentError(error);
      }
    }
  }

  handleProductionError(error: Error) {
    console.log('Global [in production]:', error);
  }
  handleDevelopmentError(error: Error) {
    console.log('Global [in development]:', error);
  }
}
