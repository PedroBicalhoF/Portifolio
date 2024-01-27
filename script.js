const modelo = {
  particlesValue: 380,
  colorValue : '#fff',
  shapeType : 'circle',
  shapeWidth : 1,
  shapeColor : '#0f0',
  opacityValue : 0.5,
  lineOpacity : 0,
  moveSpeed : 3,
  moveDirection : 'top',
  eventsMode : 'grab',
  bubbleSize : 40
}

const container = document.getElementsByClassName('container')[0];
const bio = document.getElementById('sec');
const foto = document.getElementsByTagName('section')[1];
const nome = document.getElementById('txt');
const texto =  document.getElementsByTagName('h4')[0];

const projetos = 8;//quantidade de projetos

const data = new Date();
const dia = data.getDate();
const mes = data.getMonth() + 1;

if(( dia>=18 && dia<31) && mes==12){//edição natal
    modelo.particlesValue = 100;
    modelo.colorValue = '#fff';
    modelo.shapeType = 'star';
    modelo.shapeWidth = 5;
    modelo.shapeColor = '#ff0'
    modelo.opacityValue = 0.17;
    modelo.lineOpacity = 0.4;
    modelo.moveSpeed = 6;
    modelo.moveDirection = 'none';
    modelo.eventsMode = 'bubble';
    modelo.bubbleSize = 10;
    enfeite()
}

bio.onmouseenter = () => {
          setTimeout (() => {
            bio.style.transition = '.5s';
            bio.style.transform = 'translateY(-5%)';
            nome.innerHTML = "Pedro Bicalho";
            texto.innerHTML = `👩🏻‍💻Desenvolvimento Web e Interfaces.<br> 🎓Cursando Engenharia de Software.<br> 🧠Interesse em desenvolvimento front-end e back-end.<br> 🔎Buscando oportunidade na area de desenvolvimento.`;
          },"500");
}

/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": modelo.particlesValue,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": modelo.colorValue
      },
      "shape": {
        "type": modelo.shapeType,
        "stroke": {
          "width": modelo.shapeWidth,
          "color": modelo.shapeColor
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": modelo.opacityValue,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#fff",
        "opacity": modelo.lineOpacity,
        "width": 1  
      },
      "move": {
        "enable": true,
        "speed": modelo.moveSpeed,
        "direction": modelo.moveDirection,
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": modelo.eventsMode
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": .6
          }
        },
        "bubble": {
          "distance": 400,
          "size": modelo.bubbleSize,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

function enfeite(){
  for(i=0;i<projetos;i++){
    document.getElementsByClassName('secao_padrao')[0].style.background = '#f00';
    document.getElementsByClassName('secao_padrao')[0].classList = 'secao_projeto';
  }
}
