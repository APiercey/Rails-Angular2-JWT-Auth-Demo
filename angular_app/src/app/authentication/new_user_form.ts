import { Component } from 'angular2/core';
import { AuthenticationService } from './authentication_service';

@Component({
    selector: 'new-user-form',
    template: `
        <form>
            <label>
                Email
                <input type="text" [(ngModel)]="newUser.email"/>
            </label>

            <br>

            <label>
                Password
                <input type="text" [(ngModel)]="newUser.password"/>
            </label>

            <br>

            <label>
                Retype Password
                <input type="text" [(ngModel)]="newUser.retype_password"/>
            </label>

            <br>

            <button (click)="createUser()">Create User</button>

            <br />

            {{ result }}
        </form>
    `,
    providers: [AuthenticationService]
})

export class NewUserForm {
    private newUser = { email: "", password: "", retype_password: "" };

    result = null;

    constructor(public authServ: AuthenticationService) {}

    createUser() {
        this.authServ.createNewUser(this.newUser)
        .subscribe(
            data => {
                console.log(data);
                this.result = "Success!";
            },
            err => {
                this.result = "Error: See console log for details (probably bad user creds)";
                console.log(err);
            }
        );
    }

}
