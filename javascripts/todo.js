angular.module('ToDoApp', [])
    .controller('ToDoController', function($scope) {
   //initialize an empty to do List
    $scope.todos = [];

    //add a new item to the list using the variable name "taskInput".
    $scope.add = function() {
        //add the new todo to the list.
        $scope.todos.push($scope.taskInput);
        console.log($scope.taskInput);

        //clear textbox
        $scope.taskInput = "";
    };

        //Delete function
        $scope.delete = function() {
            //Checking to see if the user really wants to delete the task.
            if (window.confirm("Are you sure you want to delete this task?")) {
                $scope.todos.splice(this.$index, 1);
            };

        };
});