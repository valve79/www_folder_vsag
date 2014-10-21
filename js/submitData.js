/*function submitData() {
    var output;
    if (window.localStorage) {
        if (localStorage.length) {
            for (var i = 0; i < localStorage.length; i++) {
                var lsKey = localStorage.key(i);
                var lsValue = localStorage.getItem(localStorage.key(i));
                output += lsKey + ': ' + lsValue + '\n';
            }
        } else {
            output += 'There is no data stored for this domain.';
        }
    } else {
        output += 'Your browser does not support local storage.';
    }
    console.log(output);

} */