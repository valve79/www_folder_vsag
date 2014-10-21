
var pictureSource;   // picture source
var destinationType; // sets the format of returned value

// Wait for Cordova to connect with the device
//
document.addEventListener("deviceready",onDeviceReady,false);

// Cordova is ready to be used!
//
function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}

// Called when a photo is successfully retrieved
//
function onPhotoDataSuccess1_1(imageURI) {
    var smallImage1_1 = document.getElementById('smallImage1_1');
    smallImage1_1.src = imageURI;
}
function onPhotoDataSuccess1_2(imageURI) {
    var smallImage1_2 = document.getElementById('smallImage1_2');
    smallImage1_2.src = imageURI;
}
function onPhotoDataSuccess1_3(imageURI) {
    var smallImage1_3 = document.getElementById('smallImage1_3');
    smallImage1_3.src = imageURI;
}
// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
    // Uncomment to view the image file URI
    // console.log(imageURI);
    
    // Get image handle
    //
    var largeImage = document.getElementById('largeImage');
    
    // Unhide image elements
    //
    largeImage.style.display = 'block';
    
    // Show the captured photo
    // The inline CSS rules are used to resize the image
    //
    largeImage.src = imageURI;
}

// A button will call this function
//

function capturePhoto1_1() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess1_1, onFail, { quality: 25,
                                //destinationType: destinationType.imageURI
                                destinationType: Camera.DestinationType.FILE_URI
                                });
}
function capturePhoto1_2() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess1_2, onFail, { quality: 50,
                                destinationType: destinationType.imageURI});
}
function capturePhoto1_3() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess1_3, onFail, { quality: 50,
                                destinationType: destinationType.imageURI});
}
// A button will call this function
//
function capturePhotoEdit() {
    // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
                                destinationType: destinationType.DATA_URL });
}

// A button will call this function
//
function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
                                destinationType: destinationType.FILE_URI,
                                sourceType: source });
}

// Called if something bad happens.
//
function onFail(message) {
    alert('Failed because: ' + message);
}