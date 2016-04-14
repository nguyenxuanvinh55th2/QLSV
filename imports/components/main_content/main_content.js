import angular from 'angular';
import angularMeteor from 'angular-meteor';
import studentList from '../student/studentList';
import informationList from '../student/informationList';
import template from './main_content.html';

class main_contentCtrl{
  constructor(){

  }
}

//Module chứa nội dung chính bao gồm danh sách sinh viên và thông tin sinh viên
export default angular.module('main_content-load', [
    angularMeteor,
    studentList.name,
    informationList.name,
  ]
)
.component('mainContent', {
    templateUrl: 'imports/components/main_content/main_content.html',
    controller: main_contentCtrl
  });
