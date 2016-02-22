import { Injectable } from 'angular2/core';
import { Http, Headers } from 'angular2/http';

@Injectable()
export class AuthenticationService {
    jwt_token = null;

    constructor(public http: Http) {}

    authenticateUser(user) {

        return this.http.post( 
            'http://localhost:3000/users/sign_in.json', 
            JSON.stringify({ 'user': user }), 
            { }
        )
        .map(res => res.json());
    }

    createNewUser(user) {
        return this.http.post(
            'http://localhost:3000/users.json',
            JSON.stringify({ 'user': user }),
            {}
        )
        .map(res => res.json());
    }

}