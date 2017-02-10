	angular.module('app.controllers', [])


	.controller('cameraCtrl', ['$scope', '$stateParams', 'DataService', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, DataService) {
	
 

}])
      
	.controller('homeCtrl', ['$scope', '$stateParams', 'DataService', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,  DataService, $state) {

  $scope.posts = DataService;
	var hasLiked = false;
	 $scope.class = "button button-light  icon ion-ios-heart-outline";
	 $scope.likeClick = function() {
	 	if (!hasLiked) {
	 		hasLiked = true;
			
	 		$scope.likeCount += 1;
	 		$scope.class = "button button-light icon ion-ios-heart";
	 	} else {
	 		hasLiked = false;
			
	 		$scope.likeCount -= 1;
	 		$scope.class = "button button-light  icon ion-ios-heart-outline";
	 	}
	 }//end function

	 $scope.clickThis=function(q) {			//This means when you click on the comment, it will change to the comment page of the post.
	var array = $scope.posts;
	for(var i = 0; i < array.length; i++){
		console.log(array[i].id + " i: " + i);
		if(array[i].id == q)
		{
			       $state.go("tabsController.comments", { id:array[i].id });
		}	
	}											
    }			

															  //

}])
   
.controller('commentsCtrl', ['$scope', '$stateParams', 'DataService', '$state', function ($scope, $stateParams, DataService, $routeParams, $state) {
var i = $stateParams.id;
console.log("stateparam.id " + i);console.log(DataService);
$scope.posts = DataService[i];
$scope.saveChanges = function(mycomment) {

	var form = 
            {
				id: $stateParams.id-1,
                user:{
                    id: 2,
                    name: "Boe Nguyen",
                    avatar: "img/img4.jpg"
                },
                content: mycomment
			}
          $scope.posts.comment.push(form);
		  
        };

$scope.$on('$ionicView.beforeEnter', function (event, viewData) { //
    viewData.enableBack = true;									  // Use it to display the "back" button
});																  //

}])

.controller('searchCtrl', ['$scope', '$stateParams', '$state', 'allPerson', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, allPerson) {
  $scope.userList = allPerson;


$scope.search = function(choice) {
	var array = $scope.userList;
	for(var i = 0; i < array.length; i++){
		if(array[i].id == choice)
		{
			       $state.go("tabsController.searchprofile", { id:array[i].id });
		}	
	}														
        };



$scope.$on('$ionicView.beforeEnter', function (event, viewData) { //
    viewData.enableBack = true;									  // Use it to display the "back" button
});																  //
}])
.controller('profileController', ['$scope', '$stateParams', '$state', 'allPerson', function($scope,$stateParams, $state,  allPerson) {

var i = $stateParams.id;

console.log("stateparam.id " + i);
console.log(allPerson[i]);
$scope.user = allPerson[i];


}])


.controller('profileCtrl', ['$scope', '$stateParams', 'Personal','DataService',
function ($scope, $stateParams, Personal, DataService) {
$scope.user = Personal;
var postsArray = DataService;


$scope.post = {};
for(var i = 0; i < 2; i++) // 2 o day se tuong duong voi chieu dai cua databse posts{
{
if($scope.user.id == postsArray[i].user.id ) { //id user trong 1 bai post){ 
	$scope.post = postsArray[i]; //post se bang url cua nhung buc hinh ma admin da dang tai 
	console.log($scope.user.id);
}
}

$scope.$on('$ionicView.beforeEnter', function (event, viewData) { //
    viewData.enableBack = true;									  // Use it to display the "back" button
});	

}])


	.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
