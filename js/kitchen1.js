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
}

//2 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess2_4(imageURI) {
    var k_2_4 = document.getElementById('k_2_4');
    k_2_4.src = imageURI;
    var thisValue = k_2_4.src;
    var thisName = k_2_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess2_5(imageURI) {
    var k_2_5 = document.getElementById('k_2_5');
    k_2_5.src = imageURI;
    var thisValue = k_2_5.src;
    var thisName = k_2_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess2_6(imageURI) {
    var k_2_6 = document.getElementById('k_2_6');
    k_2_6.src = imageURI;
    var thisValue = k_2_6.src;
    var thisName = k_2_6.name;
    localStorage.setItem(thisName, thisValue);
}

//2 - opens camera, captures photo, gets destination URL
function capturePhoto2_4() {
    navigator.camera.getPicture(onPhotoDataSuccess2_4, null,{ quality: 30,
                                targetWidth:600,
                                targetHeight:600,
                                destinationType: Camera.DestinationType.FILE_URI,
                                });
}
function capturePhoto2_5() {
    navigator.camera.getPicture(onPhotoDataSuccess2_5, null, { quality: 30,
                                targetWidth:600,
                                targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto2_6() {
    navigator.camera.getPicture(onPhotoDataSuccess2_6, null, { quality: 30,
                                targetWidth:600,
                                targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}

//3 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess3_4(imageURI) {
    var k_3_4 = document.getElementById('k_3_4');
    k_3_4.src = imageURI;
    var thisValue = k_3_4.src;
    var thisName = k_3_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess3_5(imageURI) {
    var k_3_5 = document.getElementById('k_3_5');
    k_3_5.src = imageURI;
    var thisValue = k_3_5.src;
    var thisName = k_3_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess3_6(imageURI) {
    var k_3_6 = document.getElementById('k_3_6');
    k_3_6.src = imageURI;
    var thisValue = k_3_6.src;
    var thisName = k_3_6.name;
    localStorage.setItem(thisName, thisValue);
}


//3 - opens camera, captures photo, gets destination URL
function capturePhoto3_4() {
    navigator.camera.getPicture(onPhotoDataSuccess3_4, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto3_5() {
    navigator.camera.getPicture(onPhotoDataSuccess3_5, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto3_6() {
    navigator.camera.getPicture(onPhotoDataSuccess3_6, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}

//4 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess4_4(imageURI) {
    var k_4_4 = document.getElementById('k_4_4');
    k_4_4.src = imageURI;
    var thisValue = k_4_4.src;
    var thisName = k_4_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess4_5(imageURI) {
    var k_4_5 = document.getElementById('k_4_5');
    k_4_5.src = imageURI;
    var thisValue = k_4_5.src;
    var thisName = k_4_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess4_6(imageURI) {
    var k_4_6 = document.getElementById('k_4_6');
    k_4_6.src = imageURI;
    var thisValue = k_4_6.src;
    var thisName = k_4_6.name;
    localStorage.setItem(thisName, thisValue);
}

//4 - opens camera, captures photo, gets destination URL
function capturePhoto4_4() {
    navigator.camera.getPicture(onPhotoDataSuccess4_4, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto4_5() {
    navigator.camera.getPicture(onPhotoDataSuccess4_5, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto4_6() {
    navigator.camera.getPicture(onPhotoDataSuccess4_6, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}

//5 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess5_4(imageURI) {
    var k_5_4 = document.getElementById('k_5_4');
    k_5_4.src = imageURI;
    var thisValue = k_5_4.src;
    var thisName = k_5_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess5_5(imageURI) {
    var k_5_5 = document.getElementById('k_5_5');
    k_5_5.src = imageURI;
    var thisValue = k_5_5.src;
    var thisName = k_5_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess5_6(imageURI) {
    var k_5_6 = document.getElementById('k_5_6');
    k_5_6.src = imageURI;
    var thisValue = k_5_6.src;
    var thisName = k_5_6.name;
    localStorage.setItem(thisName, thisValue);
}

//5 - opens camera, captures photo, gets destination URL
function capturePhoto5_4() {
    navigator.camera.getPicture(onPhotoDataSuccess5_4, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto5_5() {
    navigator.camera.getPicture(onPhotoDataSuccess5_5, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto5_6() {
    navigator.camera.getPicture(onPhotoDataSuccess5_6, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}

//6 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess6_4(imageURI) {
    var k_6_4 = document.getElementById('k_6_4');
    k_6_4.src = imageURI;
    var thisValue = k_6_4.src;
    var thisName = k_6_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess6_5(imageURI) {
    var k_6_5 = document.getElementById('k_6_5');
    k_6_5.src = imageURI;
    var thisValue = k_6_5.src;
    var thisName = k_6_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess6_6(imageURI) {
    var k_6_6 = document.getElementById('k_6_6');
    k_6_6.src = imageURI;
    var thisValue = k_6_6.src;
    var thisName = k_6_6.name;
    localStorage.setItem(thisName, thisValue);
}

//6 - opens camera, captures photo, gets destination URL
function capturePhoto6_4() {
    navigator.camera.getPicture(onPhotoDataSuccess6_4, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto6_5() {
    navigator.camera.getPicture(onPhotoDataSuccess6_5, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto6_6() {
    navigator.camera.getPicture(onPhotoDataSuccess6_6, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}

//7 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess7_4(imageURI) {
    var k_7_4 = document.getElementById('k_7_4');
    k_7_4.src = imageURI;
    var thisValue = k_7_4.src;
    var thisName = k_7_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess7_5(imageURI) {
    var k_7_5 = document.getElementById('k_7_5');
    k_7_5.src = imageURI;
    var thisValue = k_7_5.src;
    var thisName = k_7_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess7_6(imageURI) {
    var k_7_6 = document.getElementById('k_7_6');
    k_7_6.src = imageURI;
    var thisValue = k_7_6.src;
    var thisName = k_7_6.name;
    localStorage.setItem(thisName, thisValue);
}

//7 - opens camera, captures photo, gets destination URL
function capturePhoto7_4() {
    navigator.camera.getPicture(onPhotoDataSuccess7_4, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto7_5() {
    navigator.camera.getPicture(onPhotoDataSuccess7_5, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto7_6() {
    navigator.camera.getPicture(onPhotoDataSuccess7_6, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}

//8 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess8_4(imageURI) {
    var k_8_4 = document.getElementById('k_8_4');
    k_8_4.src = imageURI;
    var thisValue = k_8_4.src;
    var thisName = k_8_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess8_5(imageURI) {
    var k_8_5 = document.getElementById('k_8_5');
    k_8_5.src = imageURI;
    var thisValue = k_8_5.src;
    var thisName = k_8_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess8_6(imageURI) {
    var k_8_6 = document.getElementById('k_8_6');
    k_8_6.src = imageURI;
    var thisValue = k_8_6.src;
    var thisName = k_8_6.name;
    localStorage.setItem(thisName, thisValue);
}

//8 - opens camera, captures photo, gets destination URL
function capturePhoto8_4() {
    navigator.camera.getPicture(onPhotoDataSuccess8_4, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto8_5() {
    navigator.camera.getPicture(onPhotoDataSuccess8_5, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto8_6() {
    navigator.camera.getPicture(onPhotoDataSuccess8_6, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}

//9 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess9_4(imageURI) {
    var k_9_4 = document.getElementById('k_9_4');
    k_9_4.src = imageURI;
    var thisValue = k_9_4.src;
    var thisName = k_9_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess9_5(imageURI) {
    var k_9_5 = document.getElementById('k_9_5');
    k_9_5.src = imageURI;
    var thisValue = k_9_5.src;
    var thisName = k_9_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess9_6(imageURI) {
    var k_9_6 = document.getElementById('k_9_6');
    k_9_6.src = imageURI;
    var thisValue = k_9_6.src;
    var thisName = k_9_6.name;
    localStorage.setItem(thisName, thisValue);
}

//9 - opens camera, captures photo, gets destination URL
function capturePhoto9_4() {
    navigator.camera.getPicture(onPhotoDataSuccess9_4, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto9_5() {
    navigator.camera.getPicture(onPhotoDataSuccess9_5, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto9_6() {
    navigator.camera.getPicture(onPhotoDataSuccess9_6, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}

//10 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess10_4(imageURI) {
    var k_10_4 = document.getElementById('k_10_4');
    k_10_4.src = imageURI;
    var thisValue = k_10_4.src;
    var thisName = k_10_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess10_5(imageURI) {
    var k_10_5 = document.getElementById('k_10_5');
    k_10_5.src = imageURI;
    var thisValue = k_10_5.src;
    var thisName = k_10_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess10_6(imageURI) {
    var k_10_6 = document.getElementById('k_10_6');
    k_10_6.src = imageURI;
    var thisValue = k_10_6.src;
    var thisName = k_10_6.name;
    localStorage.setItem(thisName, thisValue);
}

//10 - opens camera, captures photo, gets destination URL
function capturePhoto10_4() {
    navigator.camera.getPicture(onPhotoDataSuccess10_4, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto10_5() {
    navigator.camera.getPicture(onPhotoDataSuccess10_5, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto10_6() {
    navigator.camera.getPicture(onPhotoDataSuccess10_6, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}

//11 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess11_4(imageURI) {
    var k_11_4 = document.getElementById('k_11_4');
    k_11_4.src = imageURI;
    var thisValue = k_11_4.src;
    var thisName = k_11_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess11_5(imageURI) {
    var k_11_5 = document.getElementById('k_11_5');
    k_11_5.src = imageURI;
    var thisValue = k_11_5.src;
    var thisName = k_11_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess11_6(imageURI) {
    var k_11_6 = document.getElementById('k_11_6');
    k_11_6.src = imageURI;
    var thisValue = k_11_6.src;
    var thisName = k_11_6.name;
    localStorage.setItem(thisName, thisValue);
}

//11 - opens camera, captures photo, gets destination URL
function capturePhoto11_4() {
    navigator.camera.getPicture(onPhotoDataSuccess11_4, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto11_5() {
    navigator.camera.getPicture(onPhotoDataSuccess11_5, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto11_6() {
    navigator.camera.getPicture(onPhotoDataSuccess11_6, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                });
}


function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(onPhotoURISuccess, null, { quality: 30, targetWidth:600, targetHeight:600,
                                destinationType: destinationType.FILE_URI,
                                sourceType: source });
}
// end repetition
// Called if something bad happens.
//
function onFail(message) {
    alert('Failed because: ' + message);
}