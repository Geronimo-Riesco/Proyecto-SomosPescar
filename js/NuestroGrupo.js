document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu-ul").classList.toggle("show");
});

const personas = [
  {
    id: 0,
    nombre: "Silvia Rueda",
    apellido: "de Uranga",
    rol: "Directora de Pescar",
    linkedin: "https://www.linkedin.com/in/silvia-uranga-1056675/?originalSubdomain=ar",
    foto: "../img/individuales/silvina-uranga.jpg",
  },
  {
    id: 1,
    nombre: "Marie",
    apellido: "Steverlynck",
    rol: "Coordinación de programas y RR. II.",
    linkedin: "https://www.linkedin.com/in/marie-steverlynck-97a42b194/?trk=public_profile_browsemap_profile-result-card_result-card_full-click&originalSubdomain=ar",
    foto: "../img/individuales/marie-steverlynck.jpg",
  },
  {
    id: 2,
    nombre: "Carolina",
    apellido: "Bianchetti",
    rol: "Intermediación laboral y red de egresados",
    linkedin: "https://www.linkedin.com/in/carolina-bianchetti-88745a70/?originalSubdomain=ar",
    foto: "../img/individuales/carolina-bianchetti.jpg",
  },
  {
    id: 3,
    nombre: "Florencia",
    apellido: "Cocorullo",
    rol: "Coordinación de programas y Líder de Capacitación",
    linkedin: "https://www.linkedin.com/in/florencia-cocorullo-8086ab92/?originalSubdomain=ar",
    foto: "../img/individuales/florencia-cocorullo.jpg",
  },

  {
    id: 4,
    nombre: "Paola",
    apellido: "Trippichio",
    rol: "Orientadora del equipo",
    linkedin: "https://www.linkedin.com/in/paola-tripicchio-2bb59122/?originalSubdomain=ar",
    foto: "../img/individuales/paola-trippichio.jpg",
  },
  {
    id: 5,
    nombre: "Emanuel",
    apellido: "Alderete",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/EmanuelAl",
    linkedin: "https://www.linkedin.com/in/emanuel-alderete/",
    foto: "../img/individuales/emanuel-alderete.jpg",
  },
  {
    id: 6,
    nombre: "Hernan",
    apellido: "Balderrama",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/HernanJBalderrama",
    linkedin: "https://www.linkedin.com/in/hernanjbalderrama/",
    foto: "../img/individuales/javier-balderrama.jpg",
  },
  {
    id: 7,
    nombre: "María Eva Medina",
    apellido: "Balderrama",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/EvaMedina",
    linkedin: "https://www.linkedin.com/in/mariaevamedinabalderrama/",
    foto: "../img/individuales/maria-eva-balderrama.jpg",
  },
  {
    id: 8,
    nombre: "Florencia",
    apellido: "Bascaran",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/Florencia-Bascaran",
    linkedin: "no-tiene",
    foto: "../img/individuales/florencia-bascaran.jpg",
  },
  {
    id: 9,
    nombre: "Nayla",
    apellido: "Bechara",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "http://github.com/naylabechara",
    linkedin: "https://www.linkedin.com/in/nayla-bechara/",
    foto: "../img/individuales/nayla-bechara.jpg",
  },
  {
    id: 10,
    nombre: "Mauro",
    apellido: "Benitez",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/Pandiimau",
    linkedin: "https://www.linkedin.com/in/mauroebenitez/",
    foto: "../img/individuales/mauro-benitez.jpg",
  },
  {
    id: 11,
    nombre: "Laura",
    apellido: "Calzadilla",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/LauraVictoriaC",
    linkedin: "https://www.linkedin.com/in/laura-calzadilla",
    foto: "../img/individuales/laura-calzadilla.jpg",
  },
  {
    id: 12,
    nombre: "Iván Gabriel",
    apellido: "Caravajal",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/IvanGCGH",
    linkedin: "https://www.linkedin.com/in/ivan-gabriel-caravajal",
    foto: "../img/individuales/ivan-caravajal.jpg",
  },
  {
    id: 13,
    nombre: "Celina",
    apellido: "Chiappa",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/celinachiappa",
    linkedin: "no-tiene",
    foto: "../img/individuales/celina-chiappa.jpg",
  },
  {
    id: 14,
    nombre: "Michelle",
    apellido: "Escalante",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/EscalanteMichelle",
    linkedin: "https://www.linkedin.com/in/michelle-mel-escalante/",
    foto: "../img/individuales/michelle-escalante.jpg",
  },
  {
    id: 15,
    nombre: "Angelica",
    apellido: "Garay",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/angiecreators",
    linkedin: "https://www.linkedin.com/in/angiegaray/",
    foto: "../img/individuales/angelica-garay.jpg",
  },
  {
    id: 16,
    nombre: "Maira",
    apellido: "Gomez",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/MairaAnabella",
    linkedin: "https://www.linkedin.com/in/mairaanabellagomez/",
    foto: "../img/individuales/maria-gomez.jpg",
  },
  {
    id: 17,
    nombre: "Andrea Joana Yanina",
    apellido: "Guaymas",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/AndreaGuaymas",
    linkedin: "https://www.linkedin.com/in/andrea-joana-yanina-guaymas",
    foto: "../img/individuales/andrea-guaymas.jpg",
  },
  {
    id: 18,
    nombre: "Belen",
    apellido: "Jessikowski",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/beluirina",
    linkedin: "https://www.linkedin.com/in/belen-jessikowski/",
    foto: "../img/individuales/belen-jessikowski.jpg",
  },
  {
    id: 19,
    nombre: "Belén",
    apellido: "Nieto",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/Belen-Nieto",
    linkedin: "https://www.linkedin.com/in/jbelennieto/",
    foto: "../img/individuales/sin-foto.jpg",
  },
  {
    id: 20,
    nombre: "Valentina",
    apellido: "Nieto",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/carpincha",
    linkedin: "https://www.linkedin.com/in/valentina-nieto/",
    foto: "../img/individuales/valentina-nieto.jpg",
  },
  {
    id: 21,
    nombre: "Daira",
    apellido: "Portillo",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/dairaportillo",
    linkedin: "https://www.linkedin.com/in/daira-portillo/",
    foto: "../img/individuales/daira-portillo.jpg",
  },
  {
    id: 22,
    nombre: "Gerónimo",
    apellido: "Riesco",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/Geronimo-Riesco",
    linkedin: "https://www.linkedin.com/in/ger%C3%B3nimo-ezequiel-riesco",
    foto: "../img/individuales/geronimo-riesco.jpg",
  },
  {
    id: 23,
    nombre: "Agustina",
    apellido: "Roldán",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/agus-plath",
    linkedin: "https://www.linkedin.com/in/agustina-roldan-/",
    foto: "../img/individuales/agustina-roldan.jpg",
  },
  {
    id: 24,
    nombre: "Alison",
    apellido: "Salazar",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/AlisonSalazarGomez",
    linkedin: "no-tiene",
    foto: "../img/individuales/alison-gomez.jpg",
  },
  {
    id: 25,
    nombre: "Kristel",
    apellido: "Sedano",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/kristelsedano",
    linkedin: "https://www.linkedin.com/in/kristel-sedano-657325241/",
    foto: "../img/individuales/kristel-sedano.jpg",
  },
  {
    id: 26,
    nombre: "Sofia",
    apellido: "Senin",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/SeninSofia",
    linkedin: "https://www.linkedin.com/in/sofia-senin/",
    foto: "../img/individuales/sofia-senin.jpg",
  },
  {
    id: 27,
    nombre: "Abraham",
    apellido: "Trenyan",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "http://github.com/AbrahamTrenyan",
    linkedin:
      "https://ar.linkedin.com/in/abrahamtrenyan?trk=public_profile_browsemap",
    foto: "../img/individuales/abraham-trenyan.jpg",
  },
  {
    id: 28,
    nombre: "Ezequiel",
    apellido: "Villalba",
    rol: "Alumn@ - Desarrollad@r Full Stack",
    github: "https://github.com/SamplerDev",
    linkedin: "https://www.linkedin.com/in/ezequiel-villalba/",
    foto: "../img/individuales/sin-foto.jpg",
  },
];

const cardDirectora = document.getElementById("card-directora");
const cardsDirectivos = document.getElementById("cards-directivos");
const cardOrientadora = document.getElementById("card-orientadora");
const cardAlumnos = document.getElementById("cards-alumnos");

function Card() {
  personas.map((persona, index) => {
    if (persona.id === 0) {
      const card = document.createElement("div");
      card.className = `card-directora`;
      card.innerHTML = `
        <div class="card">
          <div class="img-persona">
            <img src="${persona.foto}">
          </div>
          <h2 class="titulo-persona">${persona.nombre} ${persona.apellido}</h2>
          <span class="rol-persona">${persona.rol}</span>
          <div class="links">
            <div class="link-linkedin">
              <a href="${persona.linkedin}" target="_blank">Linkedin</a>
              <img class="link-a-img" src="../img/cardsGrupo/linkedin-icon.png">
            </div>
          </div>
        </div>
        `;
      cardDirectora.appendChild(card);
    } else if (persona.id > 0 && persona.id < 4) {
        const card = document.createElement("div");
        card.className = `card-directivo${index}`;
        card.innerHTML = `
          <div class="card">
            <div class="img-persona">
              <img src="${persona.foto}">
            </div>
            <h2 class="titulo-persona">${persona.nombre} ${persona.apellido}</h2>
            <span class="rol-persona">${persona.rol}</span>
            <div class="links">
              <div class="link-linkedin">
                <a href="${persona.linkedin}" target="_blank">Linkedin</a>
                <img class="link-a-img" src="../img/cardsGrupo/linkedin-icon.png">
              </div>
            </div>
          </div>
          `;
        cardsDirectivos.appendChild(card);
    } else if (persona.id === 4) {
        const card = document.createElement("div");
        card.className = `card-orientadora`;
        card.innerHTML = `
          <div class="card">
            <div class="img-persona">
              <img src="${persona.foto}">
            </div>
            <h2 class="titulo-persona">${persona.nombre} ${persona.apellido}</h2>
            <span class="rol-persona">${persona.rol}</span>
            <div class="links">
              <div class="link-linkedin">
                <a href="${persona.linkedin}" target="_blank">Linkedin</a>
                <img class="link-a-img" src="../img/cardsGrupo/linkedin-icon.png">
              </div>
            </div>
          </div>
          `;
        cardOrientadora.appendChild(card);
    } else {
        const card = document.createElement("div");
        card.className = `card-alumno${index}`;
        card.innerHTML = `
          <div class="card">
            <div class="img-persona">
              <img src="${persona.foto}">
            </div>
            <h2 class="titulo-persona">${persona.nombre} ${persona.apellido}</h2>
            <span class="rol-persona">${persona.rol}</span>
            <div class="links">
              <div class="link-github">
                <a href="${persona.github}" target="_blank">GitHub</a>
                <img class="link-a-img" src="../img/cardsGrupo/github-icon.png">
              </div>
              <div class="link-linkedin">
                <a href="${persona.linkedin}" target="_blank">Linkedin</a>
                <img class="link-a-img" src="../img/cardsGrupo/linkedin-icon.png">
              </div>
            </div>
          </div>
          `;
        cardAlumnos.appendChild(card);
    }
  });
}

Card();
