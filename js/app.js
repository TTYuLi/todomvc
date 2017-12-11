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

  // 单条删除任务
  $scope.delTask = function (index){
    $scope.taskList.splice(index)
  }

  //清空已完成
  $scope.clearCompl = function (item) {
    // 正向遍历减一
    // for (let i = 0; i < $scope.taskList.length; i++) {
    //   if ($scope.taskList[i].isCompleted) {
    //     $scope.taskList.splice(i,1)
    //     i--
    //   }
    // }
    // 倒着遍历  
    for (var i = $scope.taskList.length-1; i >= 0; i--) {
      if ($scope.taskList[i].isCompleted) {
        $scope.taskList.splice(i,1)
       
      }
    }
  }

  //设置编辑状态为false
  $scope.taskList.push({
    isEditing:false
  })
  //编辑
  $scope.edit = function (item){
      item.isEditing = true
  }
  //保存
  $scope.saveTask = function (item) {
    item.isEditing = false
  }

}])