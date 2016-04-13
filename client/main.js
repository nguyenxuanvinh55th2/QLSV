import angular from 'angular';
import angularMeteor from 'angular-meteor';
import studentList from '../imports/components/student/studentList';
import informationList from '../imports/components/student/informationList';

//Module hiển thị d
angular.module('information-load', [
    angularMeteor,
    studentList.name,
    informationList.name
  ]
);

/*angular.module('student-load', [
    angularMeteor,
    studentList.name
  ]
);*/
