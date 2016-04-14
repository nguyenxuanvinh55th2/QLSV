import angular from 'angular';
import angularMeteor from 'angular-meteor';
import main_content from '../imports/components/main_content/main_content';
import menu from '../imports/components/menu/menu';

//Module hiển thị d
angular.module('information-load', [
    angularMeteor,
    main_content.name,
    menu.name
  ]
);
