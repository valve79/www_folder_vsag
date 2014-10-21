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
//q32
//32 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess32_4(imageURI) {
    var k_32_4 = document.getElementById('k_32_4');
    k_32_4.src = imageURI;
    var thisValue = k_32_4.src;
    var thisName = k_32_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess32_5(imageURI) {
    var k_32_5 = document.getElementById('k_32_5');
    k_32_5.src = imageURI;
    var thisValue = k_32_5.src;
    var thisName = k_32_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess32_6(imageURI) {
    var k_32_6 = document.getElementById('k_32_6');
    k_32_6.src = imageURI;
    var thisValue = k_32_6.src;
    var thisName = k_32_6.name;
    localStorage.setItem(thisName, thisValue);
}

//32 - opens camera, captures photo, gets destination URL
function capturePhoto32_4() {
    navigator.camera.getPicture(onPhotoDataSuccess32_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto32_5() {
    navigator.camera.getPicture(onPhotoDataSuccess32_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto32_6() {
    navigator.camera.getPicture(onPhotoDataSuccess32_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q33
//33 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess33_4(imageURI) {
    var k_33_4 = document.getElementById('k_33_4');
    k_33_4.src = imageURI;
    var thisValue = k_33_4.src;
    var thisName = k_33_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess33_5(imageURI) {
    var k_33_5 = document.getElementById('k_33_5');
    k_33_5.src = imageURI;
    var thisValue = k_33_5.src;
    var thisName = k_33_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess33_6(imageURI) {
    var k_33_6 = document.getElementById('k_33_6');
    k_33_6.src = imageURI;
    var thisValue = k_33_6.src;
    var thisName = k_33_6.name;
    localStorage.setItem(thisName, thisValue);
}

//33 - opens camera, captures photo, gets destination URL
function capturePhoto33_4() {
    navigator.camera.getPicture(onPhotoDataSuccess33_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto33_5() {
    navigator.camera.getPicture(onPhotoDataSuccess33_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto33_6() {
    navigator.camera.getPicture(onPhotoDataSuccess33_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q34
//34 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess34_4(imageURI) {
    var k_34_4 = document.getElementById('k_34_4');
    k_34_4.src = imageURI;
    var thisValue = k_34_4.src;
    var thisName = k_34_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess34_5(imageURI) {
    var k_34_5 = document.getElementById('k_34_5');
    k_34_5.src = imageURI;
    var thisValue = k_34_5.src;
    var thisName = k_34_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess34_6(imageURI) {
    var k_34_6 = document.getElementById('k_34_6');
    k_34_6.src = imageURI;
    var thisValue = k_34_6.src;
    var thisName = k_34_6.name;
    localStorage.setItem(thisName, thisValue);
}

//34 - opens camera, captures photo, gets destination URL
function capturePhoto34_4() {
    navigator.camera.getPicture(onPhotoDataSuccess34_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto34_5() {
    navigator.camera.getPicture(onPhotoDataSuccess34_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto34_6() {
    navigator.camera.getPicture(onPhotoDataSuccess34_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q35
//35 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess35_4(imageURI) {
    var k_35_4 = document.getElementById('k_35_4');
    k_35_4.src = imageURI;
    var thisValue = k_35_4.src;
    var thisName = k_35_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess35_5(imageURI) {
    var k_35_5 = document.getElementById('k_35_5');
    k_35_5.src = imageURI;
    var thisValue = k_35_5.src;
    var thisName = k_35_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess35_6(imageURI) {
    var k_35_6 = document.getElementById('k_35_6');
    k_35_6.src = imageURI;
    var thisValue = k_35_6.src;
    var thisName = k_35_6.name;
    localStorage.setItem(thisName, thisValue);
}

//35 - opens camera, captures photo, gets destination URL
function capturePhoto35_4() {
    navigator.camera.getPicture(onPhotoDataSuccess35_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto35_5() {
    navigator.camera.getPicture(onPhotoDataSuccess35_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto35_6() {
    navigator.camera.getPicture(onPhotoDataSuccess35_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q36
//36 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess36_4(imageURI) {
    var k_36_4 = document.getElementById('k_36_4');
    k_36_4.src = imageURI;
    var thisValue = k_36_4.src;
    var thisName = k_36_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess36_5(imageURI) {
    var k_36_5 = document.getElementById('k_36_5');
    k_36_5.src = imageURI;
    var thisValue = k_36_5.src;
    var thisName = k_36_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess36_6(imageURI) {
    var k_36_6 = document.getElementById('k_36_6');
    k_36_6.src = imageURI;
    var thisValue = k_36_6.src;
    var thisName = k_36_6.name;
    localStorage.setItem(thisName, thisValue);
}

//36 - opens camera, captures photo, gets destination URL
function capturePhoto36_4() {
    navigator.camera.getPicture(onPhotoDataSuccess36_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto36_5() {
    navigator.camera.getPicture(onPhotoDataSuccess36_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto36_6() {
    navigator.camera.getPicture(onPhotoDataSuccess36_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q37
//37 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess37_4(imageURI) {
    var k_37_4 = document.getElementById('k_37_4');
    k_37_4.src = imageURI;
    var thisValue = k_37_4.src;
    var thisName = k_37_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess37_5(imageURI) {
    var k_37_5 = document.getElementById('k_37_5');
    k_37_5.src = imageURI;
    var thisValue = k_37_5.src;
    var thisName = k_37_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess37_6(imageURI) {
    var k_37_6 = document.getElementById('k_37_6');
    k_37_6.src = imageURI;
    var thisValue = k_37_6.src;
    var thisName = k_37_6.name;
    localStorage.setItem(thisName, thisValue);
}

//37 - opens camera, captures photo, gets destination URL
function capturePhoto37_4() {
    navigator.camera.getPicture(onPhotoDataSuccess37_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto37_5() {
    navigator.camera.getPicture(onPhotoDataSuccess37_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto37_6() {
    navigator.camera.getPicture(onPhotoDataSuccess37_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q38
//38 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess38_4(imageURI) {
    var k_38_4 = document.getElementById('k_38_4');
    k_38_4.src = imageURI;
    var thisValue = k_38_4.src;
    var thisName = k_38_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess38_5(imageURI) {
    var k_38_5 = document.getElementById('k_38_5');
    k_38_5.src = imageURI;
    var thisValue = k_38_5.src;
    var thisName = k_38_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess38_6(imageURI) {
    var k_38_6 = document.getElementById('k_38_6');
    k_38_6.src = imageURI;
    var thisValue = k_38_6.src;
    var thisName = k_38_6.name;
    localStorage.setItem(thisName, thisValue);
}

//38 - opens camera, captures photo, gets destination URL
function capturePhoto38_4() {
    navigator.camera.getPicture(onPhotoDataSuccess38_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto38_5() {
    navigator.camera.getPicture(onPhotoDataSuccess38_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto38_6() {
    navigator.camera.getPicture(onPhotoDataSuccess38_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q39
//39 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess39_4(imageURI) {
    var k_39_4 = document.getElementById('k_39_4');
    k_39_4.src = imageURI;
    var thisValue = k_39_4.src;
    var thisName = k_39_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess39_5(imageURI) {
    var k_39_5 = document.getElementById('k_39_5');
    k_39_5.src = imageURI;
    var thisValue = k_39_5.src;
    var thisName = k_39_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess39_6(imageURI) {
    var k_39_6 = document.getElementById('k_39_6');
    k_39_6.src = imageURI;
    var thisValue = k_39_6.src;
    var thisName = k_39_6.name;
    localStorage.setItem(thisName, thisValue);
}

//39 - opens camera, captures photo, gets destination URL
function capturePhoto39_4() {
    navigator.camera.getPicture(onPhotoDataSuccess39_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto39_5() {
    navigator.camera.getPicture(onPhotoDataSuccess39_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto39_6() {
    navigator.camera.getPicture(onPhotoDataSuccess39_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q40
//40 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess40_4(imageURI) {
    var k_40_4 = document.getElementById('k_40_4');
    k_40_4.src = imageURI;
    var thisValue = k_40_4.src;
    var thisName = k_40_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess40_5(imageURI) {
    var k_40_5 = document.getElementById('k_40_5');
    k_40_5.src = imageURI;
    var thisValue = k_40_5.src;
    var thisName = k_40_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess40_6(imageURI) {
    var k_40_6 = document.getElementById('k_40_6');
    k_40_6.src = imageURI;
    var thisValue = k_40_6.src;
    var thisName = k_40_6.name;
    localStorage.setItem(thisName, thisValue);
}

//40 - opens camera, captures photo, gets destination URL
function capturePhoto40_4() {
    navigator.camera.getPicture(onPhotoDataSuccess40_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto40_5() {
    navigator.camera.getPicture(onPhotoDataSuccess40_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto40_6() {
    navigator.camera.getPicture(onPhotoDataSuccess40_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q41
//41 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess41_4(imageURI) {
    var k_41_4 = document.getElementById('k_41_4');
    k_41_4.src = imageURI;
    var thisValue = k_41_4.src;
    var thisName = k_41_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess41_5(imageURI) {
    var k_41_5 = document.getElementById('k_41_5');
    k_41_5.src = imageURI;
    var thisValue = k_41_5.src;
    var thisName = k_41_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess41_6(imageURI) {
    var k_41_6 = document.getElementById('k_41_6');
    k_41_6.src = imageURI;
    var thisValue = k_41_6.src;
    var thisName = k_41_6.name;
    localStorage.setItem(thisName, thisValue);
}

//41 - opens camera, captures photo, gets destination URL
function capturePhoto41_4() {
    navigator.camera.getPicture(onPhotoDataSuccess41_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto41_5() {
    navigator.camera.getPicture(onPhotoDataSuccess41_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto41_6() {
    navigator.camera.getPicture(onPhotoDataSuccess41_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}

// end repetition
// Called if something bad happens.
//
function onFail(message) {
    alert('Failed because: ' + message);
}




