container = document.getElementsByClassName('container')[0];
        bio = document.getElementById('sec');
        foto = document.getElementsByTagName('section')[1];
        nome = document.getElementById('txt');
        texto =  document.getElementsByTagName('h4')[0];
        bio.onmouseenter = () => {
          setTimeout (() => {
            nome.innerHTML = "Pedro Bicalho";
            texto.innerHTML = `👩🏻‍💻Desenvolvimento Web e Interfaces.<br> 🎓Cursando Engenharia de Software.<br> 🧠Interesse em desenvolvimento front-end e back-end.<br> 🔎Buscando oportunidade na area de desenvolvimento.`;
          },"500");
        }

/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 380,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#f00"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#f00"
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
        "value": 0.5,
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
        "opacity": .1,
        "width": 1  
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
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
          "mode": "grab"
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
          "size": 40,
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
  
