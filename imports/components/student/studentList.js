import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Student } from '../../api/tasks.js';
import { Session } from 'meteor/session';
import template from './studentList.html';

class StudentCtrl{

  constructor($scope){
    $scope.viewModel(this);
    this.helpers({
      tasks() {
        //console.log(Student);
        return Student.find({});
      }
    })
  }

  setID(task)
  {
   Session.set("studentID", task._id);
   Session.set("facultyID", task.faculty);
  }

  deleteStudent(task)
  {
      Student.remove(task._id);
  }
}

export default angular.module('studentList',[
  angularMeteor
]).component('student', {
    templateUrl: 'imports/components/student/studentList.html',
    controller: ['$scope', StudentCtrl]
  });
