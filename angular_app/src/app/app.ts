import 'rxjs/Rx';

import { Component, provide } from 'angular2/core';
import { HTTP_PROVIDERS, Http, RequestOptions } from 'angular2/http';
import { CustomRequestOptions } from './application_settings/custom_request_options';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';
import { SignupComponent } from './authentication/signup';
import { LoginComponent } from './authentication/login'

@Component({
  selector: 'app',
  directives: [RouterOutlet, RouterLink],
  template: require('./app.html'),
  providers: [
    HTTP_PROVIDERS,
    provide(RequestOptions, { useClass: CustomRequestOptions })
  ]
})
@RouteConfig([
    { path: '/signup', name: 'Signup', component: SignupComponent, useAsDefault: true },
    { path: '/login', name: 'Login', component: LoginComponent }
])
export class App {

}
