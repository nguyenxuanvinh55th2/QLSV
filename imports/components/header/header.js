import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './header.html';
import menu from '../menu/menu';

class HeaderCtrl {
  constructor() {

  }
}

//Module trả về menu chính
export default angular.module('newHeader', [
  angularMeteor,
  menu.name
])
.component('newHeader', {
    templateUrl: 'imports/components/header/header.html',
    controller: HeaderCtrl
  });
