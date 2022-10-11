var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {

    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;

    console.log(Content);
    
    if(Content == "take my selfie"){
    speak();
    console.log("taking selfie");
    }
}

function speak() {
    var synth = window.speechSynthesis;

    speak_data = "Taking Selfie In Five seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function(){
        image_id = "result1";
        take_snapshot();
        speak_data = "taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    },5000
    );

    setTimeout(function(){
        image_id = "result2";
        take_snapshot();
        speak_data = "taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    },10000
    );

    setTimeout(function(){
        image_id = "result3";
        take_snapshot();
    },15000
    );
}

camera = document.getElementById("camera");

Webcam.set({
    height :400,
    width : 400,
    image_format :'png',
    png_quality : 90
})

function take_snapshot (){
    Webcam.snap(function(data_uri){
           if(image_id == "result1") {
            console.log("if good")
            document.getElementById("show1").style.display = "none";
            document.getElementById("result1").innerHTML = '<img id = "selfie1" src = "' + data_uri +'"/>';
        }

        if(image_id == "result2") {
            document.getElementById("show2").style.display = "none";
            document.getElementById("result2").innerHTML = '<img id = "selfie2" src ="' + data_uri +'"/>';
        }

        if(image_id == "result3") {
            document.getElementById("show3").style.display = "none";
            document.getElementById("result3").innerHTML = '<img id = "selfie3" src="' + data_uri +'"/>';
        }
    });
}

