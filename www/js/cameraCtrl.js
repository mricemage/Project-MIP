 
    angular.module('app.cameraCtrl',['ionic', 'ngCordova'])
 .controller("cameraCtrl", ['$scope', function($scope, $cordovaCamera) {
 
    $scope.takePicture = function() {
        var options = { 
            quality : 75, // Quality of saved image (1-100)
            destinationType : Camera.DestinationType.DATA_URL, // Format of return value
            sourceType : Camera.PictureSourceType.CAMERA, // Set the source of the picture
            allowEdit : true, //Allowed simple editing before selection
            encodingType: Camera.EncodingType.JPEG, // JPG (0), PNG (1)
            targetWidth: 300, 
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions, //iOS-only options that specify popover location in iPad
            saveToPhotoAlbum: false // correct camera captured images in case wrong orientation
        };
 
        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    }
 
}]);