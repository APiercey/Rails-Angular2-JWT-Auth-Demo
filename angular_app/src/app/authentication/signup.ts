import { Component } from 'angular2/core';
import { NewUserForm } from './new_user_form';

@Component({
    selector: 'signup',
    template: `
        <new-user-form></new-user-form>
    `,
    directives: [NewUserForm]
})
export class SignupComponent {
    
}