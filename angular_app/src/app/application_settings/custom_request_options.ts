import { BaseRequestOptions } from 'angular2/http';

export class CustomRequestOptions extends BaseRequestOptions {
    constructor() {
        super();
        this.headers.append('Content-Type', 'application/json');
    }
}