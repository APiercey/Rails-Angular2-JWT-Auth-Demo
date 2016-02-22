import { Injectable } from 'angular2/core';
import { Http, Headers } from 'angular2/http';

@Injectable()
export class ApiService {
    baseUrl: string;

    constructor(public http: Http, baseUrl) {

    }

    get(){

    }

    post(){

    }

    update(){

    }

    delete(){

    }



    authenticateUser(user) {

        this.http.post(
            'http://localhost:3000/users/sign_in.json',
            JSON.stringify({ 'user': user }),
            {}
        )
            .map(res => res.json())
            .subscribe(
            data => {
                console.log(data);
            },
            err => {
                console.log(err);
            }
            );
    }
}