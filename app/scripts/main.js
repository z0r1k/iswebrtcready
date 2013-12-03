window.onload = function () {
    var testResults = [];

    var html5videoTest = function () {
        testResults.push({
            "id": "html5video",
            "name": "HTML 5 Video element",
            "description": "Video element support",
            "isSupported": !!document.createElement('video').canPlayType
        });
    };

    var vp8CodecTestResult;
    var vp8CodecTest = function () {
        testResults.push({
            "id": "vp8codec",
            "name": "VP8 Codec",
            "description": "Video en-/decoding",
            "isSupported": document.createElement('video').canPlayType('video/webm; codecs="vp8", vorbis') === "probably"
        });
    };

    var getUserMediaTestResult;
    var getUserMediaTest = function () {
        var res;
        if (navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.getUserMedia) {
            res = true;
        }
        else {
            res = false;
        }
        
        testResults.push({
            "id": "getusermedia",
            "name": "getUserMedia()",
            "description": "Web camera access",
            "isSupported": res
        });
    };

    var RTCPeerConnectionTestResult;
    var RTCPeerConnectionTest = function () {
        var res;
        if (window.mozRTCPeerConnection || window.webkitRTCPeerConnection || window.oRTCPeerConnection || window.msRTCPeerConnection || window.RTCPeerConnection) {
            res = true;
        }
        else {
            res = false;
        }
        
        testResults.push({
            "id": "rtcpeerconnection",
            "name": "RTCPeerConnection",
            "description": "Peer to Peer connection",
            "isSupported": res
        });
    };

    var ICETestResult;
    var ICETest = function () {
        var pc_config = {"iceServers": [{"url": "stun:stun.l.google.com:19302"}]};
        var pc;
        try {
        // Create an RTCPeerConnection via the polyfill (adapter.js).
            if (window.webkitRTCPeerConnection) {
                pc = new webkitRTCPeerConnection(pc_config);
            }
            if (window.mozRTCPeerConnection) {
                pc = new mozRTCPeerConnection(pc_config);
            }
            if (window.oRTCPeerConnection) {
                pc = new oRTCPeerConnection(pc_config);
            }
            if (window.msRTCPeerConnection) {
                pc = new msRTCPeerConnection(pc_config);
            }
            if (window.RTCPeerConnection) {
                pc = new RTCPeerConnection(pc_config);
            }
        }
        catch (e) {

        }
        var res;
        var test = {
            "id": "iceconnection",
            "name": "ICE Connection",
            "description": "NAT traversal"
        }
        if (pc && !!pc.iceConnectionState) {
            test.isSupported = true;
        }
        else if (pc && !!pc.iceState) {
            test.isSupported = false;
            test.message = "Old, unsupported API detected.";
        }
        else {
            test.isSupported = false;
        }
        
        testResults.push(test);
    }

    var browserSupport = true;
    var findMainResult = function() {
        testResults.forEach(function(test) {
            browserSupport = test.isSupported && browserSupport;
        });
    }

    var listener = {};

    var messageHandler = function (e) {
        var payload = e.data;
        switch (payload.event) {
            case 'performAllTests':
                var numberOfTries = 0;
                var maxNumberOfTries = 40; // tries for 4 seconds
                var reportResult = function () {
                    numberOfTries++;
                    if (!e.source) {
                        if (numberOfTries < maxNumberOfTries) {
                            window.setTimeout(reportResult, 100);
                        }
                        else {
                            console.error('timeout');
                        }
                    }
                    else {
                        var res = {
                            "event": "appearinSupport",
                            "data": {
                                "callbackToken": payload.callbackToken,
                                "isSupported": browserSupport,
                                "results": testResults,
                            }
                        }
                        e.source.postMessage(res, e.origin);
                    }
                }
                reportResult();
                            
                
                
                
                break;
            case 'performTest':
                if (payload.testId) {
                    if (true) { // test exists
                        var testResult = {
                            "event": "testResult",
                            "data": {
                                "testId": payload.testId,
                                "callbackToken": payload.callbackToken
                            }
                        };
                        
                        testResults.forEach(function (r) {
                            if (payload.testId === r.id) {
                                testResult.data.result = r;
                                testResult.data.isSupported = r.result;
                            }
                        });
                        e.source.postMessage(testResult, e.origin);
                        break;
                    }
                    else {
                        window.console.error("Error: Test not found.");
                    }
                }
                else {
                    window.console.error("Error: test argument missing.");
                }
                break;
            case 'getAvailableTests':
                var battery = [
                    'html5videoTest',
                    'vp8CodecTest',
                    'getUserMediaTest',
                    'RTCPeerConnectionTest',
                    'ICETest'
                ]
                
//                e.source.postMessage(testResult, e.origin);
                break;
        }
    }
    window.addEventListener('message', messageHandler, false);

    var testBattery = [
        html5videoTest,
        vp8CodecTest,
        getUserMediaTest,
        RTCPeerConnectionTest,
        ICETest
    ];

    testBattery.forEach(function (test) {
        test();
    });
    findMainResult();
};
