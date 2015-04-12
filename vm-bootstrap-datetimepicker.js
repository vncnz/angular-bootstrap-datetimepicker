
angular.module('vm-bootstrap-datetimepicker', []).directive('vmBootstrapDatetimeInput', function() {
  return {
    restrict: 'AE',
    require: '^ngModel',
    scope: {
      ngModel: '=',
      label: '@labelPicker'
    },
    templateUrl: 'vmBootstrapDatePicker-template.html',
    link: function(scope, iElement, iAttrs, ctrl) {
      
    },
    controller: ['$scope', function($scope) {


      var invalidIndexes = ['years', 'months', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'];


      $scope.moment = moment($scope.ngModel || new Date());
      $scope.bdate = $scope.moment.format("DD-MM-YYYY [at] HH:mm");
      $scope.validityClasses = {
        'ng-valid' : false,
        'ng-invalid': true
      };

      $scope.update = function(newValue) {
        //console.log("value changed");
        var neu = moment(newValue, 
          ["DD-MM-YYYY [at] HH:mm", 
           "DD-M-YYYY [at] HH:mm", 
           "D-MM-YYYY [at] HH:mm",
           "D-M-YYYY [at] HH:mm",
           "DD-MM-YYYY [at] H:mm", 
           "DD-M-YYYY [at] H:mm", 
           "D-MM-YYYY [at] H:mm",
           "D-M-YYYY [at] H:mm"], 
          true);
        if(neu.isValid()) {
          //console.log("valid");
          $scope.error = null;
          $scope.validityClasses['ng-valid'] = true;
          $scope.validityClasses['ng-invalid'] = !$scope.validityClasses['ng-valid'];
          $scope.moment = neu;
          $scope.ngModel = $scope.moment.toDate();
        } else {
          //console.log("invalid");
          $scope.error = invalidIndexes[neu.invalidAt()];
          //alert(invalidIndexes[neu.invalidAt()]);
          $scope.validityClasses['ng-valid'] = false;
          $scope.validityClasses['ng-invalid'] = !$scope.validityClasses['ng-valid'];
        }
      };

      $scope.$watch('bdate', function(newValue, oldValue) {
        //console.log("$watch started");
        if(oldValue!=newValue) {
            $scope.update(newValue);
        }
      }, false);

      $scope.update($scope.bdate);

    }]
  }
});