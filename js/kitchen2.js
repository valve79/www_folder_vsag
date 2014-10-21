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

//q12
//12 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess12_4(imageURI) {
    var k_12_4 = document.getElementById('k_12_4');
    k_12_4.src = imageURI;
    var thisValue = k_12_4.src;
    var thisName = k_12_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess12_5(imageURI) {
    var k_12_5 = document.getElementById('k_12_5');
    k_12_5.src = imageURI;
    var thisValue = k_12_5.src;
    var thisName = k_12_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess12_6(imageURI) {
    var k_12_6 = document.getElementById('k_12_6');
    k_12_6.src = imageURI;
    var thisValue = k_12_6.src;
    var thisName = k_12_6.name;
    localStorage.setItem(thisName, thisValue);
}

//12 - opens camera, captures photo, gets destination URL
function capturePhoto12_4() {
    navigator.camera.getPicture(onPhotoDataSuccess12_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto12_5() {
    navigator.camera.getPicture(onPhotoDataSuccess12_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto12_6() {
    navigator.camera.getPicture(onPhotoDataSuccess12_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q13
//13 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess13_4(imageURI) {
    var k_13_4 = document.getElementById('k_13_4');
    k_13_4.src = imageURI;
    var thisValue = k_13_4.src;
    var thisName = k_13_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess13_5(imageURI) {
    var k_13_5 = document.getElementById('k_13_5');
    k_13_5.src = imageURI;
    var thisValue = k_13_5.src;
    var thisName = k_13_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess13_6(imageURI) {
    var k_13_6 = document.getElementById('k_13_6');
    k_13_6.src = imageURI;
    var thisValue = k_13_6.src;
    var thisName = k_13_6.name;
    localStorage.setItem(thisName, thisValue);
}

//13 - opens camera, captures photo, gets destination URL
function capturePhoto13_4() {
    navigator.camera.getPicture(onPhotoDataSuccess13_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto13_5() {
    navigator.camera.getPicture(onPhotoDataSuccess13_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto13_6() {
    navigator.camera.getPicture(onPhotoDataSuccess13_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q14
//14 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess14_4(imageURI) {
    var k_14_4 = document.getElementById('k_14_4');
    k_14_4.src = imageURI;
    var thisValue = k_14_4.src;
    var thisName = k_14_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess14_5(imageURI) {
    var k_14_5 = document.getElementById('k_14_5');
    k_14_5.src = imageURI;
    var thisValue = k_14_5.src;
    var thisName = k_14_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess14_6(imageURI) {
    var k_14_6 = document.getElementById('k_14_6');
    k_14_6.src = imageURI;
    var thisValue = k_14_6.src;
    var thisName = k_14_6.name;
    localStorage.setItem(thisName, thisValue);
}

//14 - opens camera, captures photo, gets destination URL
function capturePhoto14_4() {
    navigator.camera.getPicture(onPhotoDataSuccess14_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto14_5() {
    navigator.camera.getPicture(onPhotoDataSuccess14_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto14_6() {
    navigator.camera.getPicture(onPhotoDataSuccess14_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q15
//15 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess15_4(imageURI) {
    var k_15_4 = document.getElementById('k_15_4');
    k_15_4.src = imageURI;
    var thisValue = k_15_4.src;
    var thisName = k_15_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess15_5(imageURI) {
    var k_15_5 = document.getElementById('k_15_5');
    k_15_5.src = imageURI;
    var thisValue = k_15_5.src;
    var thisName = k_15_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess15_6(imageURI) {
    var k_15_6 = document.getElementById('k_15_6');
    k_15_6.src = imageURI;
    var thisValue = k_15_6.src;
    var thisName = k_15_6.name;
    localStorage.setItem(thisName, thisValue);
}

//15 - opens camera, captures photo, gets destination URL
function capturePhoto15_4() {
    navigator.camera.getPicture(onPhotoDataSuccess15_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto15_5() {
    navigator.camera.getPicture(onPhotoDataSuccess15_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto15_6() {
    navigator.camera.getPicture(onPhotoDataSuccess15_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q16
//16 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess16_4(imageURI) {
    var k_16_4 = document.getElementById('k_16_4');
    k_16_4.src = imageURI;
    var thisValue = k_16_4.src;
    var thisName = k_16_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess16_5(imageURI) {
    var k_16_5 = document.getElementById('k_16_5');
    k_16_5.src = imageURI;
    var thisValue = k_16_5.src;
    var thisName = k_16_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess16_6(imageURI) {
    var k_16_6 = document.getElementById('k_16_6');
    k_16_6.src = imageURI;
    var thisValue = k_16_6.src;
    var thisName = k_16_6.name;
    localStorage.setItem(thisName, thisValue);
}

//16 - opens camera, captures photo, gets destination URL
function capturePhoto16_4() {
    navigator.camera.getPicture(onPhotoDataSuccess16_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto16_5() {
    navigator.camera.getPicture(onPhotoDataSuccess16_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto16_6() {
    navigator.camera.getPicture(onPhotoDataSuccess16_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q17
//17 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess17_4(imageURI) {
    var k_17_4 = document.getElementById('k_17_4');
    k_17_4.src = imageURI;
    var thisValue = k_17_4.src;
    var thisName = k_17_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess17_5(imageURI) {
    var k_17_5 = document.getElementById('k_17_5');
    k_17_5.src = imageURI;
    var thisValue = k_17_5.src;
    var thisName = k_17_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess17_6(imageURI) {
    var k_17_6 = document.getElementById('k_17_6');
    k_17_6.src = imageURI;
    var thisValue = k_17_6.src;
    var thisName = k_17_6.name;
    localStorage.setItem(thisName, thisValue);
}

//17 - opens camera, captures photo, gets destination URL
function capturePhoto17_4() {
    navigator.camera.getPicture(onPhotoDataSuccess17_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto17_5() {
    navigator.camera.getPicture(onPhotoDataSuccess17_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto17_6() {
    navigator.camera.getPicture(onPhotoDataSuccess17_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q18
//18 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess18_4(imageURI) {
    var k_18_4 = document.getElementById('k_18_4');
    k_18_4.src = imageURI;
    var thisValue = k_18_4.src;
    var thisName = k_18_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess18_5(imageURI) {
    var k_18_5 = document.getElementById('k_18_5');
    k_18_5.src = imageURI;
    var thisValue = k_18_5.src;
    var thisName = k_18_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess18_6(imageURI) {
    var k_18_6 = document.getElementById('k_18_6');
    k_18_6.src = imageURI;
    var thisValue = k_18_6.src;
    var thisName = k_18_6.name;
    localStorage.setItem(thisName, thisValue);
}

//18 - opens camera, captures photo, gets destination URL
function capturePhoto18_4() {
    navigator.camera.getPicture(onPhotoDataSuccess18_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto18_5() {
    navigator.camera.getPicture(onPhotoDataSuccess18_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto18_6() {
    navigator.camera.getPicture(onPhotoDataSuccess18_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q19
//19 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess19_4(imageURI) {
    var k_19_4 = document.getElementById('k_19_4');
    k_19_4.src = imageURI;
    var thisValue = k_19_4.src;
    var thisName = k_19_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess19_5(imageURI) {
    var k_19_5 = document.getElementById('k_19_5');
    k_19_5.src = imageURI;
    var thisValue = k_19_5.src;
    var thisName = k_19_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess19_6(imageURI) {
    var k_19_6 = document.getElementById('k_19_6');
    k_19_6.src = imageURI;
    var thisValue = k_19_6.src;
    var thisName = k_19_6.name;
    localStorage.setItem(thisName, thisValue);
}

//19 - opens camera, captures photo, gets destination URL
function capturePhoto19_4() {
    navigator.camera.getPicture(onPhotoDataSuccess19_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto19_5() {
    navigator.camera.getPicture(onPhotoDataSuccess19_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto19_6() {
    navigator.camera.getPicture(onPhotoDataSuccess19_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q20
//20 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess20_4(imageURI) {
    var k_20_4 = document.getElementById('k_20_4');
    k_20_4.src = imageURI;
    var thisValue = k_20_4.src;
    var thisName = k_20_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess20_5(imageURI) {
    var k_20_5 = document.getElementById('k_20_5');
    k_20_5.src = imageURI;
    var thisValue = k_20_5.src;
    var thisName = k_20_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess20_6(imageURI) {
    var k_20_6 = document.getElementById('k_20_6');
    k_20_6.src = imageURI;
    var thisValue = k_20_6.src;
    var thisName = k_20_6.name;
    localStorage.setItem(thisName, thisValue);
}

//20 - opens camera, captures photo, gets destination URL
function capturePhoto20_4() {
    navigator.camera.getPicture(onPhotoDataSuccess20_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto20_5() {
    navigator.camera.getPicture(onPhotoDataSuccess20_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto20_6() {
    navigator.camera.getPicture(onPhotoDataSuccess20_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q21

//21 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess21_4(imageURI) {
    var k_21_4 = document.getElementById('k_21_4');
    k_21_4.src = imageURI;
    var thisValue = k_21_4.src;
    var thisName = k_21_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess21_5(imageURI) {
    var k_21_5 = document.getElementById('k_21_5');
    k_21_5.src = imageURI;
    var thisValue = k_21_5.src;
    var thisName = k_21_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess21_6(imageURI) {
    var k_21_6 = document.getElementById('k_21_6');
    k_21_6.src = imageURI;
    var thisValue = k_21_6.src;
    var thisName = k_21_6.name;
    localStorage.setItem(thisName, thisValue);
}

//21 - opens camera, captures photo, gets destination URL
function capturePhoto21_4() {
    navigator.camera.getPicture(onPhotoDataSuccess21_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto21_5() {
    navigator.camera.getPicture(onPhotoDataSuccess21_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto21_6() {
    navigator.camera.getPicture(onPhotoDataSuccess21_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}

// end repetition
// Called if something bad happens.
//
function onFail(message) {
    alert('Failed because: ' + message);
}




