document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal("#home");
ScrollReveal().reveal("#intro", { delay: 600 });
ScrollReveal().reveal(".features-card", { delay: 500 });
ScrollReveal().reveal(".contact-details", { delay: 500 });

/********************************************
JS Cursor-Custom
*********************************************/

var cursorinner = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});
document.addEventListener("mousedown", function () {
  cursorinner.classList.add("cursorinnerhover");
});
document.addEventListener("mouseup", function () {
  cursorinner.classList.remove("cursorinnerhover");
});

/********************************************
JS Nuestro Grupo
*********************************************/

let mjson = { 
  directora: {
    nombre: "Silvina Rueda",
    apellido: "de Urganda",
    rol: "Directora de Pescar",
    linkedin:
      "https://www.linkedin.com/in/silvia-uranga-1056675/?originalSubdomain=ar",
    foto: "../img/individuales/silvina-uranga.jpg",
  },
  directivos: [
    {
      nombre: "Marie",
      apellido: "Steverlynck",
      rol: "Coordinación de programas y RR. II.",
      linkedin:
        "https://www.linkedin.com/in/marie-steverlynck-97a42b194/?trk=public_profile_browsemap_profile-result-card_result-card_full-click&originalSubdomain=ar",
      foto: "../img/individuales/marie-steverlynck.jpg",
    },
    {
      nombre: "Carolina",
      apellido: "Bianchetti",
      rol: "Intermediación laboral y red de egresados",
      linkedin:
        "https://www.linkedin.com/in/carolina-bianchetti-88745a70/?originalSubdomain=ar",
      foto: "../img/individuales/carolina-bianchetti.jpg",
    },
    {
      nombre: "Florencia",
      apellido: "Cocorullo",
      rol: "Coordinación y Líder de Capacitación",
      linkedin:
        "https://www.linkedin.com/in/florencia-cocorullo-8086ab92/?originalSubdomain=ar",
      foto: "../img/individuales/florencia-cocorullo.jpg",
    },
  ],

  orientadora: [
    {
      nombre: "Paola",
      apellido: "Trippichio",
      rol: "Orientadora del equipo",
      linkedin:
        "https://www.linkedin.com/in/paola-tripicchio-2bb59122/?originalSubdomain=ar",
      foto: "../img/individuales/paola-trippichio.jpg",
    },
  ],
  alumnos: [
    {
      nombre: "Emanuel",
      apellido: "Alderete",
      github: "https://github.com/EmanuelAl",
      linkedin: "https://www.linkedin.com/in/emanuel-alderete/",
      foto: "../img/individuales/emanuel-alderete.jpg",
    },
    {
      nombre: "Hernan",
      apellido: "Balderrama",
      github: "https://github.com/HernanJBalderrama",
      linkedin: "https://www.linkedin.com/in/hernanjbalderrama/",
      foto: "../img/individuales/javier-balderrama.jpg",
    },
    {
      nombre: "María Eva Medina",
      apellido: "Balderrama",
      github: "https://github.com/EvaMedina",
      linkedin: "https://www.linkedin.com/in/mariaevamedinabalderrama/",
      foto: "../img/individuales/maria-eva-balderrama.jpg",
    },
    {
      nombre: "Florencia",
      apellido: "Bascaran",
      github: "https://github.com/Florencia-Bascaran",
      linkedin: "no-tiene",
      foto: "../img/individuales/florencia-bascaran.jpg",
    },
    {
      nombre: "Nayla",
      apellido: "Bechara",
      github: "http://github.com/naylabechara",
      linkedin: "https://www.linkedin.com/in/nayla-bechara/",
      foto: "../img/individuales/nayla-bechara.jpg",
    },
    {
      nombre: "Mauro",
      apellido: "Benitez",
      github: "https://github.com/Pandiimau",
      linkedin: "https://www.linkedin.com/in/mauroebenitez/",
      foto: "../img/individuales/mauro-benitez.jpg",
    },
    {
      nombre: "Laura",
      apellido: "Calzadilla",
      github: "https://github.com/LauraVictoriaC",
      linkedin: "https://www.linkedin.com/in/laura-calzadilla",
      foto: "../img/individuales/laura-calzadilla.jpg",
    },
    {
      nombre: "Iván Gabriel",
      apellido: "Caravajal",
      github: "https://github.com/IvanGCGH",
      linkedin: "https://www.linkedin.com/in/ivan-gabriel-caravajal",
      foto: "../img/individuales/ivan-caravajal.jpg",
    },
    {
      nombre: "Celina",
      apellido: "Chiappa",
      github: "https://github.com/celinachiappa",
      linkedin: "no-tiene",
      foto: "../img/individuales/celina-chiappa.jpg",
    },
    {
      nombre: "Michelle",
      apellido: "Escalante",
      github: "https://github.com/EscalanteMichelle",
      linkedin: "https://www.linkedin.com/in/michelle-mel-escalante/",
      foto: "../img/individuales/michelle-escalante.jpg",
    },
    {
      nombre: "Angelica",
      apellido: "Garay",
      github: "https://github.com/angiecreators",
      linkedin: "https://www.linkedin.com/in/angiegaray/",
      foto: "../img/individuales/angelica-garay.jpg",
    },
    {
      nombre: "Maira",
      apellido: "Gomez",
      github: "https://github.com/MairaAnabella",
      linkedin: "https://www.linkedin.com/in/mairaanabellagomez/",
      foto: "../img/individuales/maria-gomez.jpg",
    },
    {
      nombre: "Andrea Joana Yanina",
      apellido: "Guaymas",
      github: "https://github.com/AndreaGuaymas",
      linkedin: "https://www.linkedin.com/in/andrea-joana-yanina-guaymas",
      foto: "../img/individuales/andrea-guaymas.jpg",
    },
    {
      nombre: "Belen",
      apellido: "Jessikowski",
      github: "https://github.com/beluirina",
      linkedin: "https://www.linkedin.com/in/belen-jessikowski/",
      foto: "../img/individuales/belen-jessikowski.jpg",
    },
    {
      nombre: "Belén",
      apellido: "Nieto",
      github: "https://github.com/Belen-Nieto",
      linkedin: "https://www.linkedin.com/in/jbelennieto/",
      foto: "../img/individuales/sin-foto.jpg",
    },
    {
      nombre: "Valentina",
      apellido: "Nieto",
      github: "https://github.com/carpincha",
      linkedin: "https://www.linkedin.com/in/valentina-nieto/",
      foto: "../img/individuales/valentina-nieto.jpg",
    },
    {
      nombre: "Daira",
      apellido: "Portillo",
      github: "https://github.com/dairaportillo",
      linkedin: "https://www.linkedin.com/in/daira-portillo/",
      foto: "../img/individuales/daira-portillo.jpg",
    },
    {
      nombre: "Gerónimo",
      apellido: "Riesco",
      github: "https://github.com/Geronimo-Riesco",
      linkedin: "https://www.linkedin.com/in/ger%C3%B3nimo-ezequiel-riesco",
      foto: "../img/individuales/geronimo-riesco.jpg",
    },
    {
      nombre: "Agustina",
      apellido: "Roldán",
      github: "https://github.com/agus-plath",
      linkedin: "https://www.linkedin.com/in/agustina-roldan-/",
      foto: "../img/individuales/agustina-roldan.jpg",
    },
    {
      nombre: "Alison",
      apellido: "Salazar",
      github: "https://github.com/AlisonSalazarGomez",
      linkedin: "no-tiene",
      foto: "../img/individuales/alison-gomez.jpg",
    },
    {
      nombre: "Kristel",
      apellido: "Sedano",
      github: "https://github.com/kristelsedano",
      linkedin: "https://www.linkedin.com/in/kristel-sedano-657325241/",
      foto: "../img/individuales/kristel-sedano.jpg",
    },
    {
      nombre: "Sofia",
      apellido: "Senin",
      github: "https://github.com/SeninSofia",
      linkedin: "https://www.linkedin.com/in/sofia-senin/",
      foto: "../img/individuales/sofia-senin.jpg",
    },
    {
      nombre: "Abraham",
      apellido: "Trenyan",
      github: "http://github.com/AbrahamTrenyan",
      linkedin:
        "https://ar.linkedin.com/in/abrahamtrenyan?trk=public_profile_browsemap",
      foto: "../img/individuales/abraham-trenyan.jpg",
    },
    {
      nombre: "Ezequiel",
      apellido: "Villalba",
      github: "https://github.com/SamplerDev",
      linkedin: "https://www.linkedin.com/in/ezequiel-villalba/",
      foto: "../img/individuales/sin-foto.jpg",
    },
  ],
};

/********************************************
consumo de json entre muchisimas comillas, por que si esto lo ven en artech me cagan a patadas en el trasero

belen - jajsjjsjjajajjs
*********************************************/

let card = document.querySelector(".cardd");
let nombre = document.querySelector(".nombre");
let puesto = document.querySelector(".puesto");
let gitHub = document.querySelector(".atext1");
let linkedin = document.querySelector(".atext2");

/*console.log(card, nombre.innerHTML)*/

let directora = Object.values(mjson.directora);

let populate = (arr) => {
  let git = gitHub.href;
  let linked = linkedin.href;

  for (var i = 0; i < arr.length; i++) {
    /*console.log(arr[i]);*/

    nombre.innerHTML = `${arr[0]} ${arr[1]}`;
    linkedin.href = `${arr[3]}`;
    /* git = `${arr[4]}`;*/
  }
};

populate(directora);

let directivos = [
  ...document.querySelectorAll(".directivo"),
]; /*agarro las cards desde el documento con un spread operator */

let otrosDirectivos = Object.values(
  mjson.directivos
); /**agarro la info de los directivos desde el json */

let contenedor = document.querySelector(".directivos");

console.log(directivos);
console.log(otrosDirectivos);

function returnCards(jason, clase) {
  return jason
    .map(
      (valuesCard, index) => `
    <div class=\"card-grupo  ${clase}\">
    <div class="imgBx">
    <img src= ${valuesCard.foto} alt="${valuesCard.nombre}" />
    </div>
    <div class="content">
      <div class="details">
      <h2 class="nombre"> ${valuesCard.nombre}  ${valuesCard.apellido} <br /><span>" ${valuesCard.rol}" </span></h2>
      <div class="card_btn">
      <a class="atext1" href="${valuesCard.github}" target="_blank"
        ><i class="texto" >GitHub</i><img src="../img/cardsGrupo/github-icon.png"
      /></a>
      <a class="atext2" href="${valuesCard.linkedin}" target="_blank"
        ><i class="texto">LinkedIn</i><img
          src="../img/cardsGrupo/linkedin-icon.png"
      /></a>
    </div>
  </div>
</div>
</div>
`
    )
    .join("");
}


//let directora2 = document.querySelector(".directora"); // carga las columnas de la directora
//let jdirectora = Object.values(mjson.directora);

//directora2.innerHTML = returnCards(jdirectora, "directora1");

contenedor.innerHTML = returnCards(otrosDirectivos, "directivo1"); // carga las columnas de otros directivos

let orientadora = document.querySelector(".orientadora"); // carga las columnas de la orientadora
let jorientadora = Object.values(mjson.orientadora);

orientadora.innerHTML = returnCards(jorientadora, "orientadora1");

let estudiantes = document.querySelector(".estudiantes");
let jestudiantes = Object.values(mjson.alumnos);

estudiantes.innerHTML = returnCards(jestudiantes, "estudiantesCard");
