import angular from 'angular';
import angularMeteor from 'angular-meteor';
import main_content from '../imports/components/main_content/main_content';
import newHeader from '../imports/components/header/header'

//Module hiển thị nội dung web
angular.module('information-load', [
    angularMeteor,
    main_content.name,
    newHeader.name
  ]
);
