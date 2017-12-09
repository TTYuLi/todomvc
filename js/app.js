angular.module('app',[])
.controller('demoCtrl',['$scope',function($scope){
  //添加任务
  $scope.taskList = [];
  $scope.addTask = function (e) {
    // enter键触发添加事件
      if(e.keyCode == 13){
        if($scope.task){
          $scope.taskList.push({
            name:$scope.task,
            isComplate: false
          });
          //清空输入框
          $scope.task= ""
        }
      }
  }

  // 设置任务是否完成
  $scope.unCompletedTaskNums = function () {
    var nums = 0
    for (var i = 0; i<$scope.taskList.length; i++){
        if(!$scope.taskList[i].isCompleted){
          nums++
        }
    }

    return nums
  }

}])