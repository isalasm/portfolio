const tokens = {
   "HOME": {
      "es": "Inicio",
      "en": "Home"
   },
   "PROJECTS": {
      "es": "Proyectos",
      "en": "Projects"
   },
   "EXPERIENCE": {
      "es": "Experiencia",
      "en": "Experience"
   },
   "RESUME": {
      "es": "CV",
      "en": "Resume"
   },
   "TITLE": {
      "es": "Ingeniero de Software",
      "en": "Software Engineer"
   },
   "DESCRIPTION": {
      "es": "Me especializo en el desarrollo back-end, enfocándome en frameworks como NodeJS y Django. Además, he adquirido experiencia en el desarrollo front-end, utilizando tecnologías como AngularJS y React. Poseo una pasión por el aprendizaje continuo en programación y tecnología, lo cual me impulsa a expandir constantemente mis conocimientos en estos campos.",
      "en": "I specialize in back-end development, focusing on frameworks such as Node and Django. I have also gained experience in front-end development, using technologies such as AngularJS and React. I have a passion for continuous learning in programming and technology, which drives me to constantly expand my knowledge in these fields."
   },
   "MORE_INFO": {
      "es": "Más información",
      "en": "Learn More"
   },
   "EUNATEST_ROLE": {
      "es": "Cofundador / Desarrollador Full-stack",
      "en": "Cofounder / Full-stack Developer"
   },
   "EUNATEST_DATE": {
      "es": "2018 - Presente",
      "en": "2018 - Present"
   },
   "EUNATEST_DESCRIPTION": {
      "es": "Eunatest es una plataforma web diseñada para asistir a estudiantes de medicina y médicos extranjeros en su preparación para el examen EUNACOM. Ofreciendo una variedad de pruebas y estadísticas.",
      "en": "Eunatest helps medical students and foreign medical professionals to prepare for the EUNACOM exam. By providing a test suite where they can practice by either running trials of the exam or training with questions of a specific area. It also provides statistics of the user's performance."
   },
   "PREPROYECTOS_ROLE": {
      "es": "Desarollador Independiente",
      "en": "Independent Developer"
   },
   "PREPROYECTOS_DATE": {
      "es": "2019 - 2020",
      "en": "2019 - 2020"
   },
   "PREPROYECTOS_DESCRIPTION": {
      "es": "PreProyectos es un mercado para proyectos de infraestructura en Chile.",
      "en": "PreProyectos is a marketplace for infrastructure projects in Chile."
   },
   "LABRIN_ROLE": {
      "es": "Desarollador Independiente",
      "en": "Independent Developer"
   },
   "LABRIN_DATE": {
      "es": "2021",
      "en": "2021"
   },
   "LABRIN_DESCRIPTION": {
      "es": "Joyería Labrin es una joyería chilena con sede en Talca.",
      "en": "Joyería Labrin is a Chilean jewelry store based in Talca."
   },
   "CORNERSHOP_ROLE": {
      "es": "Desarollador Back-end",
      "en": "Backend Engineer"
   },
   "CORNERSHOP_DATE": {
      "es": "2021-2023",
      "en": "2021-2023",
   },
   "CORNERSHOP_DESCRIPTION": {
      "es": "Cornershop es un servicio que conecta a usuarios con shoppers, quienes hacen compras en el supermercado para ellos. Fue adquirida por Uber el año 2020 y paso a ser Uber Groceries el año 2023.",
      "en": "Cornershop is a service that connects people to shoppers that buy grocery products for them. It was adquire by Uber in 2020 and became Uber Groceries in 2023."
   },
   "IMOVA_ROLE": {
      "es": "Desarrollador practicante",
      "en": "Intern developer"
   },
   "IMOVA_DATE": {
      "es": "2020",
      "en": "2020",
   },
   "IMOVA_DESCRIPTION": {
      "es": "IMOVA crea productos empresariales de realidad virtual y mixta.",
      "en": "IMOVA creates virtual and mixed reality business oriented products."
   },
   "STOCKEXCHANGE_ROLE": {
      "es": "Desarrollador practicante",
      "en": "Intern developer"
   },
   "STOCKEXCHANGE_DATE": {
      "es": "2017",
      "en": "2017",
   },
   "STOCKEXCHANGE_NAME": {
      "es": "Bolsa de comercio de Santiago",
      "en": "Santiago Stock Exchange"
   },
   "STOCKEXCHANGE_DESCRIPTION": {
      "es": "La bolsa de comercio de santiago es el principal centro de operaciones bursátiles de Chile y el tercero más grande de Latinoamérica",
      "en": "The Santiago stock exchange is is Chile's dominant stock exchange, and the third largest stock exchange in Latin America"
   }
}

let projects = [
   {
      name: "Eunatest",
      url: "https://www.eunatest.cl",
      imageUrl: "assets/images/eunatestlogo.png"
   },
   {
      name: "PreProyectos",
      url: "https://subir.preproyectos.cl",
      imageUrl: "assets/images/pplogo.png"
   },
   {
      id: "LABRIN",
      name: "Joyería Labrín",
      url: "https://joyaslabrin.cl/",
      imageUrl: "assets/images/labrinlogo.png"
   },

]

let experience = [
   {
      id: "CORNERSHOP",
      name: "Cornershop by Uber",
      url: "https://www.uber.com/es-CL/newsroom/como-seguir-disfrutando-de-cornershop-ahora-en-uber-eats/",
      imageUrl: "assets/images/cornershoplogo.png"
   },
   {
      name: "IMOVA",
      url: "https://imova.cl/",
      imageUrl: "assets/images/imovalogo.png"
   },
   {
      id: "STOCKEXCHANGE",
      name: "Bolsa de Comercio de Santiago",
      url: "https://www.bolsadesantiago.com/",
      imageUrl: "assets/images/exchangelogo.svg"
   },

]

const repeatTokens = {
   MORE_INFO: 3
}


window.onload = function(){

   const currentUrl = window.location.href;
   if (currentUrl.endsWith("projects.html")) {
      injectProyects(projects, "projects-container")
   }
   else if (currentUrl.endsWith("experience.html")) {
      injectProyects(experience, "experience-container")
   }

   let language = localStorage.getItem("language");

   if(["ES", "EN"].includes(language)) {
      languages[language]();
   }
   else {
      languages.EN();
   }

   $("#ES").click(function() {
      languages.ES();
   })

   $("#EN").click(function() {
      languages.EN();
   })

   $("#main-container").css("visibility", "visible");

}

const languages = {
   ES: function() {
      localStorage.setItem("language", "ES");
      $("#EN").addClass("inactive-flag")
      $("#ES").removeClass("inactive-flag")
      loadTokens("es")
      changeCV("es")
   },
   EN: function() {
      localStorage.setItem("language", "EN");
      $("#ES").addClass("inactive-flag")
      $("#EN").removeClass("inactive-flag")
      loadTokens("en")
      changeCV("en")
   }
}


function loadTokens(language){
   for(let token of Object.keys(tokens)){
      let id = "#" + token
      $(id).text(tokens[token][language]);
      if(Object.keys(repeatTokens).includes(token)){
         for(let i=0; i<repeatTokens[token]; i++){
            let iterationId = id + "-" + i
            $(iterationId).text(tokens[token][language]);
         }
      }
   }
}

function changeCV(language){
   if (language == "es"){
      $("#RESUME").attr("href", "https://drive.google.com/file/d/1B04HeD6h7Sag0kMYMSqKa6VBKfq3CsqO/view");
   }
   else {
      $("#RESUME").attr("href", "https://drive.google.com/file/d/1RAKy5QsWIIBz91l3r3Fc2C3ZS-UZTikI/view");
   }
}

function injectProyects(projects, containereId) {

   let projectsContainer = $(`#${containereId}`);

   let i=0;
   for (let project of projects){
      let id = project.id || project.name.toUpperCase();
      let projectHTML = `
      <div class="col-md-6">
         <div
            class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative content-box">
            <div class="col p-4 d-flex flex-column position-static">
               <strong id="${id}_ROLE" class="d-inline-block mb-2 text-success"></strong>
               <h3 id="${id}_NAME" class="mb-0">${project.name}</h3>
               <div id="${id}_DATE" class="mb-"></div>
               <p id="${id}_DESCRIPTION" class="mb-auto description">Description</p>
               <a id="MORE_INFO-${i}" href="${project.url}"
                  class="icon-link gap-1 icon-link-hover read-more">
                  Continue reading
                  <svg class="bi">
                     <use xlink:href="#chevron-right" />
                  </svg>
               </a>
            </div>
            <div class="col-auto d-none d-lg-block" style="margin: auto; margin-right: 10px;">
               <img src="${project.imageUrl}" style="width: 150px;">
            </div>
         </div>
      </div>
      `
      projectsContainer.append(projectHTML);
      i++;
   }
}