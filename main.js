let x = 0;
let y = 0;

let drawApple = "";

let largura = 0;
let altura = 0;
let apple = "";
let speakData = "";
let number = 0;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
  apple = loadImage("apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 
  number = Number(content);
  if (Number.isInteger(number)){
    document.getElementById("status").innerHTML = "a maça começou a ser desenhada! AGORA VOU ENFIAR ELA NA SUA GUELA :D";
    drawApple = "set";
  }
  else {
    document.getElementById("status").innerHTML = "o numero não foi reconhecido";
  }
}

function setup() {
  largura = window.innerWidth;
  altura = window.innerHeight;
  canvas = createCanvas(largura, altura-150);
  canvas.position(0, 150);
}

function draw() {
  if(drawApple == "set")
  {
    for(var i = 1; i <= to_number; i++)
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      Image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    speakData = number+" maçãs desenhadas";
    speak();
    drawApple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
