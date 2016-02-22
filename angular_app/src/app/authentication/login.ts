import { Component } from 'angular2/core';
import { LoginForm } from './login_form';

@Component({
    selector: 'login',
    template: `
        <login-form></login-form>
    `,
    directives: [LoginForm]
})
export class LoginComponent {

}