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
//q22
//22 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess22_4(imageURI) {
    var k_22_4 = document.getElementById('k_22_4');
    k_22_4.src = imageURI;
    var thisValue = k_22_4.src;
    var thisName = k_22_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess22_5(imageURI) {
    var k_22_5 = document.getElementById('k_22_5');
    k_22_5.src = imageURI;
    var thisValue = k_22_5.src;
    var thisName = k_22_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess22_6(imageURI) {
    var k_22_6 = document.getElementById('k_22_6');
    k_22_6.src = imageURI;
    var thisValue = k_22_6.src;
    var thisName = k_22_6.name;
    localStorage.setItem(thisName, thisValue);
}

//22 - opens camera, captures photo, gets destination URL
function capturePhoto22_4() {
    navigator.camera.getPicture(onPhotoDataSuccess22_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto22_5() {
    navigator.camera.getPicture(onPhotoDataSuccess22_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto22_6() {
    navigator.camera.getPicture(onPhotoDataSuccess22_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q23

//23 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess23_4(imageURI) {
    var k_23_4 = document.getElementById('k_23_4');
    k_23_4.src = imageURI;
    var thisValue = k_23_4.src;
    var thisName = k_23_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess23_5(imageURI) {
    var k_23_5 = document.getElementById('k_23_5');
    k_23_5.src = imageURI;
    var thisValue = k_23_5.src;
    var thisName = k_23_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess23_6(imageURI) {
    var k_23_6 = document.getElementById('k_23_6');
    k_23_6.src = imageURI;
    var thisValue = k_23_6.src;
    var thisName = k_23_6.name;
    localStorage.setItem(thisName, thisValue);
}

//23 - opens camera, captures photo, gets destination URL
function capturePhoto23_4() {
    navigator.camera.getPicture(onPhotoDataSuccess23_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto23_5() {
    navigator.camera.getPicture(onPhotoDataSuccess23_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto23_6() {
    navigator.camera.getPicture(onPhotoDataSuccess23_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q24

//24 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess24_4(imageURI) {
    var k_24_4 = document.getElementById('k_24_4');
    k_24_4.src = imageURI;
    var thisValue = k_24_4.src;
    var thisName = k_24_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess24_5(imageURI) {
    var k_24_5 = document.getElementById('k_24_5');
    k_24_5.src = imageURI;
    var thisValue = k_24_5.src;
    var thisName = k_24_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess24_6(imageURI) {
    var k_24_6 = document.getElementById('k_24_6');
    k_24_6.src = imageURI;
    var thisValue = k_24_6.src;
    var thisName = k_24_6.name;
    localStorage.setItem(thisName, thisValue);
}

//24 - opens camera, captures photo, gets destination URL
function capturePhoto24_4() {
    navigator.camera.getPicture(onPhotoDataSuccess24_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto24_5() {
    navigator.camera.getPicture(onPhotoDataSuccess24_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto24_6() {
    navigator.camera.getPicture(onPhotoDataSuccess24_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q25
//25 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess25_4(imageURI) {
    var k_25_4 = document.getElementById('k_25_4');
    k_25_4.src = imageURI;
    var thisValue = k_25_4.src;
    var thisName = k_25_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess25_5(imageURI) {
    var k_25_5 = document.getElementById('k_25_5');
    k_25_5.src = imageURI;
    var thisValue = k_25_5.src;
    var thisName = k_25_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess25_6(imageURI) {
    var k_25_6 = document.getElementById('k_25_6');
    k_25_6.src = imageURI;
    var thisValue = k_25_6.src;
    var thisName = k_25_6.name;
    localStorage.setItem(thisName, thisValue);
}

//25 - opens camera, captures photo, gets destination URL
function capturePhoto25_4() {
    navigator.camera.getPicture(onPhotoDataSuccess25_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto25_5() {
    navigator.camera.getPicture(onPhotoDataSuccess25_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto25_6() {
    navigator.camera.getPicture(onPhotoDataSuccess25_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q26
//26 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess26_4(imageURI) {
    var k_26_4 = document.getElementById('k_26_4');
    k_26_4.src = imageURI;
    var thisValue = k_26_4.src;
    var thisName = k_26_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess26_5(imageURI) {
    var k_26_5 = document.getElementById('k_26_5');
    k_26_5.src = imageURI;
    var thisValue = k_26_5.src;
    var thisName = k_26_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess26_6(imageURI) {
    var k_26_6 = document.getElementById('k_26_6');
    k_26_6.src = imageURI;
    var thisValue = k_26_6.src;
    var thisName = k_26_6.name;
    localStorage.setItem(thisName, thisValue);
}

//26 - opens camera, captures photo, gets destination URL
function capturePhoto26_4() {
    navigator.camera.getPicture(onPhotoDataSuccess26_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto26_5() {
    navigator.camera.getPicture(onPhotoDataSuccess26_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto26_6() {
    navigator.camera.getPicture(onPhotoDataSuccess26_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q27
//27 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess27_4(imageURI) {
    var k_27_4 = document.getElementById('k_27_4');
    k_27_4.src = imageURI;
    var thisValue = k_27_4.src;
    var thisName = k_27_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess27_5(imageURI) {
    var k_27_5 = document.getElementById('k_27_5');
    k_27_5.src = imageURI;
    var thisValue = k_27_5.src;
    var thisName = k_27_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess27_6(imageURI) {
    var k_27_6 = document.getElementById('k_27_6');
    k_27_6.src = imageURI;
    var thisValue = k_27_6.src;
    var thisName = k_27_6.name;
    localStorage.setItem(thisName, thisValue);
}

//27 - opens camera, captures photo, gets destination URL
function capturePhoto27_4() {
    navigator.camera.getPicture(onPhotoDataSuccess27_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto27_5() {
    navigator.camera.getPicture(onPhotoDataSuccess27_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto27_6() {
    navigator.camera.getPicture(onPhotoDataSuccess27_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q28
//28 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess28_4(imageURI) {
    var k_28_4 = document.getElementById('k_28_4');
    k_28_4.src = imageURI;
    var thisValue = k_28_4.src;
    var thisName = k_28_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess28_5(imageURI) {
    var k_28_5 = document.getElementById('k_28_5');
    k_28_5.src = imageURI;
    var thisValue = k_28_5.src;
    var thisName = k_28_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess28_6(imageURI) {
    var k_28_6 = document.getElementById('k_28_6');
    k_28_6.src = imageURI;
    var thisValue = k_28_6.src;
    var thisName = k_28_6.name;
    localStorage.setItem(thisName, thisValue);
}

//28 - opens camera, captures photo, gets destination URL
function capturePhoto28_4() {
    navigator.camera.getPicture(onPhotoDataSuccess28_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto28_5() {
    navigator.camera.getPicture(onPhotoDataSuccess28_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto28_6() {
    navigator.camera.getPicture(onPhotoDataSuccess28_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q29
//29 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess29_4(imageURI) {
    var k_29_4 = document.getElementById('k_29_4');
    k_29_4.src = imageURI;
    var thisValue = k_29_4.src;
    var thisName = k_29_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess29_5(imageURI) {
    var k_29_5 = document.getElementById('k_29_5');
    k_29_5.src = imageURI;
    var thisValue = k_29_5.src;
    var thisName = k_29_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess29_6(imageURI) {
    var k_29_6 = document.getElementById('k_29_6');
    k_29_6.src = imageURI;
    var thisValue = k_29_6.src;
    var thisName = k_29_6.name;
    localStorage.setItem(thisName, thisValue);
}

//29 - opens camera, captures photo, gets destination URL
function capturePhoto29_4() {
    navigator.camera.getPicture(onPhotoDataSuccess29_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto29_5() {
    navigator.camera.getPicture(onPhotoDataSuccess29_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto29_6() {
    navigator.camera.getPicture(onPhotoDataSuccess29_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q30
//30 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess30_4(imageURI) {
    var k_30_4 = document.getElementById('k_30_4');
    k_30_4.src = imageURI;
    var thisValue = k_30_4.src;
    var thisName = k_30_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess30_5(imageURI) {
    var k_30_5 = document.getElementById('k_30_5');
    k_30_5.src = imageURI;
    var thisValue = k_30_5.src;
    var thisName = k_30_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess30_6(imageURI) {
    var k_30_6 = document.getElementById('k_30_6');
    k_30_6.src = imageURI;
    var thisValue = k_30_6.src;
    var thisName = k_30_6.name;
    localStorage.setItem(thisName, thisValue);
}

//30 - opens camera, captures photo, gets destination URL
function capturePhoto30_4() {
    navigator.camera.getPicture(onPhotoDataSuccess30_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto30_5() {
    navigator.camera.getPicture(onPhotoDataSuccess30_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto30_6() {
    navigator.camera.getPicture(onPhotoDataSuccess30_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q31
//31 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess31_4(imageURI) {
    var k_31_4 = document.getElementById('k_31_4');
    k_31_4.src = imageURI;
    var thisValue = k_31_4.src;
    var thisName = k_31_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess31_5(imageURI) {
    var k_31_5 = document.getElementById('k_31_5');
    k_31_5.src = imageURI;
    var thisValue = k_31_5.src;
    var thisName = k_31_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess31_6(imageURI) {
    var k_31_6 = document.getElementById('k_31_6');
    k_31_6.src = imageURI;
    var thisValue = k_31_6.src;
    var thisName = k_31_6.name;
    localStorage.setItem(thisName, thisValue);
}

//31 - opens camera, captures photo, gets destination URL
function capturePhoto31_4() {
    navigator.camera.getPicture(onPhotoDataSuccess31_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto31_5() {
    navigator.camera.getPicture(onPhotoDataSuccess31_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto31_6() {
    navigator.camera.getPicture(onPhotoDataSuccess31_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}

// end repetition
// Called if something bad happens.
//
function onFail(message) {
    alert('Failed because: ' + message);
}




