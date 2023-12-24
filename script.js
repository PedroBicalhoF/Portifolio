let particles_value= 380;
let color_value = '#f00';
let shape_type = 'circle';
let shape_width = 1;
let shape_color = '#f00';
let opacity_value = 0.5;
let line_linked_opacity = 0;
let move_speed = 3;
let move_direction = 'top';
let events_mode = 'grab';
let bubble_size = 40;

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
    particles_value = 100;
    color_value = '#fff';
    shape_type = 'star';
    shape_width = 5;
    shape_color = '#ff0'
    opacity_value = 0.17;
    line_linked_opacity = 0.4;
    move_speed = 6;
    move_direction = 'none';
    events_mode = 'bubble';
    bubble_size = 10;
    enfeite()
}

bio.onmouseenter = () => {
          setTimeout (() => {
            bio.style.transition = '.5s';
            bio.style.transform = 'translateY(-10%)';
            nome.innerHTML = "Pedro Bicalho";
            texto.innerHTML = `👩🏻‍💻Desenvolvimento Web e Interfaces.<br> 🎓Cursando Engenharia de Software.<br> 🧠Interesse em desenvolvimento front-end e back-end.<br> 🔎Buscando oportunidade na area de desenvolvimento.`;
          },"500");
}

/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": particles_value,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": color_value
      },
      "shape": {
        "type": shape_type,
        "stroke": {
          "width": shape_width,
          "color": shape_color
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
        "value": opacity_value,
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
        "opacity": line_linked_opacity,
        "width": 1  
      },
      "move": {
        "enable": true,
        "speed": move_speed,
        "direction": move_direction,
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
          "mode": events_mode
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
          "size": bubble_size,
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
