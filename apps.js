(function() {
    
    var uId = 0;

    angular.module('studentApp', [])
    .controller('StudentController', ['$scope', StudentController]);

    function StudentController($scope) {
        $scope.newStudent = null;
        $scope.students = [];

        $scope.saveStudent = function() {
            if ($scope.newStudent.id == null) {
                uId = uId + 1;
                $scope.newStudent.id = uId;
                $scope.students.push($scope.newStudent);
            } else {
                for (var i in $scope.students) {
                    if ($scope.students[i].id == $scope.newStudent.id) {
                        $scope.students[i] = $scope.newStudent;
                    }
                }
            }
            $scope.newStudent = null;
        }

        $scope.edit = function(id) {
            for (var i in $scope.students) {
                if ($scope.students[i].id == id) {
                    $scope.newStudent = angular.copy($scope.students[i])
                }
            }            
        }

        $scope.delete = function(id) {
            for (var i in $scope.students) {
                if ($scope.students[i].id == id) {
                    $scope.students.splice(i,1);
                    $scope.newStudent = {}
                }
            }
        }
    }
})();