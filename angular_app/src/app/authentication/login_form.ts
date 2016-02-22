import { Component } from 'angular2/core';
import { AuthenticationService } from './authentication_service';

@Component({
    selector: 'login-form',
    template: `
        <p>Please Login</p>
        <form>
            <label>
                Email
                <input type="text" [(ngModel)]="user.email"/>
            </label>

            <label>
                Password
                <input type="password" [(ngModel)]="user.password"/>
            </label>

            <button (click)="authenticateUser()">Login</button>

            <br />

            <span>JWT Token: {{ token }}</span>

            <br />

            <span>Result: {{ result }}</span>
        </form>
    `,
    providers: [AuthenticationService]
})
export class LoginForm {
    user = { email: "", password: "" };

    token = null;

    result = null;

    constructor(public authServ: AuthenticationService) {}

    authenticateUser() {
        this.authServ.authenticateUser(this.user)
        .subscribe(
            data => {
                console.log(data);
                this.result = "succesful login";
                this.token = data.token;
            },
            err => {
                this.result = "WRONG CREDS";
                console.log(err);
            }
        );
    }
}