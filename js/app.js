(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.inject=['$scope'];
function LunchCheckController($scope){
  $scope.message="";

  $scope.checkData=function(){

    $scope.userTxt=($scope.userData!=undefined && $scope.userData!="")?$scope.userData.split(","):"";

    console.log($scope.userTxt.length);

    if($scope.userTxt.length==0){
      $scope.message="Please enter data first";
    }
    else{
    for(var i=0;i<$scope.userTxt.length;i++){
      debugger;
      var txt=$scope.userTxt[i].trim();
      if(txt==null || txt==undefined || txt=="" || txt.length==0){
        $scope.countMsg="Not considering item "+(i+1)+" as it is empty";
        $scope.userTxt.splice(i,1);
      }
    }

  }
  console.log($scope.userTxt);
    if($scope.userTxt.length<=3 && $scope.userTxt.length!=0){
      $scope.message="Enjoy!";
      
    }
    if($scope.userTxt.length>3){
      $scope.message="Too much!";
    }



  }
}


})();
