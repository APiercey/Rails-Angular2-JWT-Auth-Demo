declare var require: any;

import { Component } from 'angular2/core';
import { NgIf } from 'angular2/common';
import { Login } from './authentication/login'

@Component({
  directives: [Login],
  template: require('./home.html'),
  styles: [require('./home.css')]
})

export class Home {
  constructor() {}
}
