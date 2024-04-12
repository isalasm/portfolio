const tokens = {
   "HOME": {
      "es": "Inicio",
      "en": "Home"
   },
   "PROJECTS": {
      "es": "Proyectos",
      "en": "Projects"
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
   "PREPROYECTOS_DESCRIPTION": {
      "es": "PreProyectos es un mercado para proyectos de infraestructura en Chile.",
      "en": "PreProyectos is a marketplace for infrastructure projects in Chile."
   }
}

const repeatTokens = {
   MORE_INFO: 2
}


window.onload = function(){

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
         for(let i=1; i<repeatTokens[token]; i++){
            let iterationId = id + "-" + i
            $(iterationId).text(tokens[token][language]);
         }
      }
   }
}

function changeCV(language){
   if (language == "es"){
      $("#RESUME").attr("href", "https://docs.google.com/document/d/1Me1wIG1z9OQ4GvMWTl4XQXmWq8r5GnCS6NbCZE7Un8M/edit?usp=sharingg");
   }
   else {
      $("#RESUME").attr("href", "https://docs.google.com/document/d/1_PWnOnvox4e9j6bDR3Yp-ez_-HtusRVGzdvd4Ekxzck/edit?usp=sharing");
   }
}