
document.write('<iframe src="http://iswebrtcready.appear.in/lite.html" frameborder="0" height="0" width="0" id="webrtc-compatability"></iframe>');
document.close();

window.isAppearinCompatibility = function (successCallback, errorCallback) {

    var messageHandler = function (e) {
        var data = JSON.parse(e.data);
        if (data.support) {
            if (data.support === "true") {
                successCallback(true);
            }
            else {
                successCallback(false);
            }
        }
    }

    window.addEventListener('message', messageHandler, false);
    var iframe = document.getElementById('webrtc-compatability');
    iframe.onload = function () {
        iframe.contentWindow.postMessage('registerListener', '*');
    }
}
