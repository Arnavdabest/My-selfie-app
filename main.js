var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
document.getElementById("textbox").innerHTML = "";
recognition.start();
}

recognition.onresult = function(event){
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    if(Content == "take my selfie"){
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance("taking selfie in 5 seconds");
    synth.speak(utterThis);
    Webcam.attach('#camera');
    setTimeout(function(){
        Webcam.snap(function(dataURI){
            document.getElementById("results").innerHTML = '<img id="selfieimage" src="'+dataURI+'"/>';
        });
        save();
    }, 5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});

function save(){
    document.getElementById("result").href = document.getElementById("selfieimage").src;
    document.getElementById("result").click();
}