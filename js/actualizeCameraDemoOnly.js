var pictureSource;   // picture source
var destinationType; // sets the format of returned value

// Wait for Cordova to connect with the device
//
document.addEventListener("deviceready",onDeviceReady,false);


// Cordova is ready to be used!
//
//create folder in Library/files/VSAG_images

// Cordova is ready
function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, onFileSystemFail); //part of create folder
}

//create folder  with in Library/files/VSAG_Images
// Cordova is ready
function onFileSystemSuccess(fileSystem) {
    console.log(fileSystem.name);
    var directoryEntry = fileSystem.root;
    directoryEntry.getDirectory("VSAG_Images", {create: true, exclusive: false}, onDirectorySuccess, onDirectoryFail)
}
function onDirectorySuccess(parent) {
    console.log(parent);
}
function onDirectoryFail(error) {
    alert("Unable to create new directory: " + error.code);
}
function onFileSystemFail(evt) {
    console.log(evt.target.error.code);
}
//end folder creation
// Called when a photo is successfully retrieved
// start repetition

function onPhotoDataSuccess2_4(imageURI) {
    var k2_4 = document.getElementById('k2_4');
    k2_4.src = imageURI;
    var thisValue = k2_4.src;
   // var thisValue = thisValue.split('tmp/')[1];
    var thisName = k2_4.name;
    localStorage.setItem('ii'+thisName, thisValue);
}
function onPhotoDataSuccess2_5(imageURI) {
    var k2_5 = document.getElementById('k2_5');
    k2_5.src = imageURI;
    var thisValue = k2_5.src;
   //  var thisValue = thisValue.split('tmp/')[1];
    var thisName = k2_5.name;
    localStorage.setItem('ii'+thisName, thisValue);
}
function onPhotoDataSuccess2_6(imageURI) {
    var k2_6 = document.getElementById('k2_6');
    k2_6.src = imageURI;
    var thisValue = k2_6.src;
   //  var thisValue = thisValue.split('tmp/')[1];
    var thisName = k2_6.name;
    localStorage.setItem('ii'+thisName, thisValue);
}

function capturePhoto2_4() {
    navigator.camera.getPicture(onPhotoDataSuccess2_4, onFail, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto2_5() {
    navigator.camera.getPicture(onPhotoDataSuccess2_5, onFail, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto2_6() {
    navigator.camera.getPicture(onPhotoDataSuccess2_6, onFail, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}


// End repetition
// A button will call this function
//
function capturePhotoEdit() {
    // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 10, allowEdit: true,
                                destinationType: destinationType.DATA_URL });
}

// A button will call this function
//
function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                sourceType: source });
}
// end repetition
// Called if something bad happens.
//
function onFail(message) {
    alert('Failed because: ' + message);
}




