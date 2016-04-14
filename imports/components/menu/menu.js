import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './menu.html';

class MenuCtrl {
  constructor() {

  }
}

export default angular.module('menu', [
  angularMeteor
])
.component('menu', {
    templateUrl: 'imports/components/menu/menu.html',
    controller: MenuCtrl
  });
