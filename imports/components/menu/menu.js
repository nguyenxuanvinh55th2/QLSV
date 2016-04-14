import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './menu.html';

class MenuCtrl {
  constructor() {

  }
}

//Module trả về menu chính
export default angular.module('menu', [
  angularMeteor
])
.component('menu', {
    templateUrl: 'imports/components/menu/menu.html',
    controller: MenuCtrl
  });
