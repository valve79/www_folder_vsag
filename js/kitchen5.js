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
//q42
//42 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess42_4(imageURI) {
    var k_42_4 = document.getElementById('k_42_4');
    k_42_4.src = imageURI;
    var thisValue = k_42_4.src;
    var thisName = k_42_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess42_5(imageURI) {
    var k_42_5 = document.getElementById('k_42_5');
    k_42_5.src = imageURI;
    var thisValue = k_42_5.src;
    var thisName = k_42_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess42_6(imageURI) {
    var k_42_6 = document.getElementById('k_42_6');
    k_42_6.src = imageURI;
    var thisValue = k_42_6.src;
    var thisName = k_42_6.name;
    localStorage.setItem(thisName, thisValue);
}

//42 - opens camera, captures photo, gets destination URL
function capturePhoto42_4() {
    navigator.camera.getPicture(onPhotoDataSuccess42_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto42_5() {
    navigator.camera.getPicture(onPhotoDataSuccess42_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto42_6() {
    navigator.camera.getPicture(onPhotoDataSuccess34_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q43
//43 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess43_4(imageURI) {
    var k_43_4 = document.getElementById('k_43_4');
    k_43_4.src = imageURI;
    var thisValue = k_43_4.src;
    var thisName = k_43_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess43_5(imageURI) {
    var k_43_5 = document.getElementById('k_43_5');
    k_43_5.src = imageURI;
    var thisValue = k_43_5.src;
    var thisName = k_43_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess43_6(imageURI) {
    var k_43_6 = document.getElementById('k_43_6');
    k_43_6.src = imageURI;
    var thisValue = k_43_6.src;
    var thisName = k_43_6.name;
    localStorage.setItem(thisName, thisValue);
}

//43 - opens camera, captures photo, gets destination URL
function capturePhoto43_4() {
    navigator.camera.getPicture(onPhotoDataSuccess43_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto43_5() {
    navigator.camera.getPicture(onPhotoDataSuccess43_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto43_6() {
    navigator.camera.getPicture(onPhotoDataSuccess43_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q44
//44 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess44_4(imageURI) {
    var k_44_4 = document.getElementById('k_44_4');
    k_44_4.src = imageURI;
    var thisValue = k_44_4.src;
    var thisName = k_44_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess44_5(imageURI) {
    var k_44_5 = document.getElementById('k_44_5');
    k_44_5.src = imageURI;
    var thisValue = k_44_5.src;
    var thisName = k_44_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess44_6(imageURI) {
    var k_44_6 = document.getElementById('k_44_6');
    k_44_6.src = imageURI;
    var thisValue = k_44_6.src;
    var thisName = k_44_6.name;
    localStorage.setItem(thisName, thisValue);
}

//44 - opens camera, captures photo, gets destination URL
function capturePhoto44_4() {
    navigator.camera.getPicture(onPhotoDataSuccess44_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto44_5() {
    navigator.camera.getPicture(onPhotoDataSuccess44_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto44_6() {
    navigator.camera.getPicture(onPhotoDataSuccess44_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q45
//45 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess45_4(imageURI) {
    var k_45_4 = document.getElementById('k_45_4');
    k_45_4.src = imageURI;
    var thisValue = k_45_4.src;
    var thisName = k_45_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess45_5(imageURI) {
    var k_45_5 = document.getElementById('k_45_5');
    k_45_5.src = imageURI;
    var thisValue = k_45_5.src;
    var thisName = k_45_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess45_6(imageURI) {
    var k_45_6 = document.getElementById('k_45_6');
    k_45_6.src = imageURI;
    var thisValue = k_45_6.src;
    var thisName = k_45_6.name;
    localStorage.setItem(thisName, thisValue);
}

//45 - opens camera, captures photo, gets destination URL
function capturePhoto45_4() {
    navigator.camera.getPicture(onPhotoDataSuccess45_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto45_5() {
    navigator.camera.getPicture(onPhotoDataSuccess45_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto45_6() {
    navigator.camera.getPicture(onPhotoDataSuccess45_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q46
//46 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess46_4(imageURI) {
    var k_46_4 = document.getElementById('k_46_4');
    k_46_4.src = imageURI;
    var thisValue = k_46_4.src;
    var thisName = k_46_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess46_5(imageURI) {
    var k_46_5 = document.getElementById('k_46_5');
    k_46_5.src = imageURI;
    var thisValue = k_46_5.src;
    var thisName = k_46_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess46_6(imageURI) {
    var k_46_6 = document.getElementById('k_46_6');
    k_46_6.src = imageURI;
    var thisValue = k_46_6.src;
    var thisName = k_46_6.name;
    localStorage.setItem(thisName, thisValue);
}

//46 - opens camera, captures photo, gets destination URL
function capturePhoto46_4() {
    navigator.camera.getPicture(onPhotoDataSuccess46_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto46_5() {
    navigator.camera.getPicture(onPhotoDataSuccess46_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto46_6() {
    navigator.camera.getPicture(onPhotoDataSuccess46_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q47
//47 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess47_4(imageURI) {
    var k_47_4 = document.getElementById('k_47_4');
    k_47_4.src = imageURI;
    var thisValue = k_47_4.src;
    var thisName = k_47_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess47_5(imageURI) {
    var k_47_5 = document.getElementById('k_47_5');
    k_47_5.src = imageURI;
    var thisValue = k_47_5.src;
    var thisName = k_47_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess47_6(imageURI) {
    var k_47_6 = document.getElementById('k_47_6');
    k_47_6.src = imageURI;
    var thisValue = k_47_6.src;
    var thisName = k_47_6.name;
    localStorage.setItem(thisName, thisValue);
}

//47 - opens camera, captures photo, gets destination URL
function capturePhoto47_4() {
    navigator.camera.getPicture(onPhotoDataSuccess47_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto47_5() {
    navigator.camera.getPicture(onPhotoDataSuccess47_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto47_6() {
    navigator.camera.getPicture(onPhotoDataSuccess47_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q48
//48 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess48_4(imageURI) {
    var k_48_4 = document.getElementById('k_48_4');
    k_48_4.src = imageURI;
    var thisValue = k_48_4.src;
    var thisName = k_48_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess48_5(imageURI) {
    var k_48_5 = document.getElementById('k_48_5');
    k_48_5.src = imageURI;
    var thisValue = k_48_5.src;
    var thisName = k_48_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess48_6(imageURI) {
    var k_48_6 = document.getElementById('k_48_6');
    k_48_6.src = imageURI;
    var thisValue = k_48_6.src;
    var thisName = k_48_6.name;
    localStorage.setItem(thisName, thisValue);
}

//48 - opens camera, captures photo, gets destination URL
function capturePhoto48_4() {
    navigator.camera.getPicture(onPhotoDataSuccess48_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto48_5() {
    navigator.camera.getPicture(onPhotoDataSuccess48_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto48_6() {
    navigator.camera.getPicture(onPhotoDataSuccess48_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
//q49
//2 - finds element ID, retireves url of img and saves in local storage
function onPhotoDataSuccess49_4(imageURI) {
    var k_49_4 = document.getElementById('k_49_4');
    k_49_4.src = imageURI;
    var thisValue = k_49_4.src;
    var thisName = k_49_4.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess49_5(imageURI) {
    var k_49_5 = document.getElementById('k_49_5');
    k_49_5.src = imageURI;
    var thisValue = k_49_5.src;
    var thisName = k_49_5.name;
    localStorage.setItem(thisName, thisValue);
}
function onPhotoDataSuccess49_6(imageURI) {
    var k_49_6 = document.getElementById('k_49_6');
    k_49_6.src = imageURI;
    var thisValue = k_49_6.src;
    var thisName = k_49_6.name;
    localStorage.setItem(thisName, thisValue);
}

//49 - opens camera, captures photo, gets destination URL
function capturePhoto49_4() {
    navigator.camera.getPicture(onPhotoDataSuccess49_4, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto49_5() {
    navigator.camera.getPicture(onPhotoDataSuccess49_5, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
function capturePhoto49_6() {
    navigator.camera.getPicture(onPhotoDataSuccess49_6, null, { quality: 10,
                                destinationType: destinationType.FILE_URI,
                                });
}
// end repetition
// Called if something bad happens.
//
function onFail(message) {
    alert('Failed because: ' + message);
}




