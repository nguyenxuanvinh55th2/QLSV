import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Student } from '../../api/tasks.js';
import { Faculty } from '../../api/tasks.js'
import { studentID } from './studentList.js'
import template from './informationList.html';

class InformationCtrl{

  constructor($scope){
    $scope.viewModel(this);
    this.helpers({
      tasks() {
        if(Session.get("studentID") != null)
          return Student.findOne({"_id": Session.get("studentID")})
      },
      facl() {
        if(Session.get("facultyID") != null)
          //console.log(Session.get("facultyID"));
          return Faculty.findOne({"_id": Session.get("facultyID")})
      }
    })
  }

  updateStudent(tasks, info){
      console.log("gia tri" + tasks._id);

      if(info.faculty != null)
        Student.update(tasks._id, {
          $set: {
            faculty: info.faculty
          },
        });

      if(info.name != null)
        Student.update(tasks._id, {
          $set: {
            name: info.name
          },
        });

      if(info.sex == "nam")
        Student.update(tasks._id, {
          $set: {
          sex: true
          },
        });
      else
        Student.update(tasks._id, {
          $set: {
          sex: false
          },
        });

      if(info.adress != null)
        Student.update(tasks._id, {
          $set: {
            adress: info.adress
          },
        });

      if(info.phone != null)
        Student.update(tasks._id, {
          $set: {
            phone: info.phone
          },
        });
  }
}

export default angular.module('informationList',[
  angularMeteor
]).component('information', {
    templateUrl: 'imports/components/student/informationList.html',
    controller: ['$scope', InformationCtrl]
  });
