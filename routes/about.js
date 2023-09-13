var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Escriba /about/tec en el navegador");
});

// images array
const randomImages = [
  "https://gamadero.tecnm.mx/assets/files/main/img/pleca_tenm%20-%20copia.png",
  "https://gamadero.tecnm.mx/assets/files/main/img/inicioitgam.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52hOeAgcITBkzYc8eyA1Mx1Q3TtM8dA9VGw",
  "https://sii.gamadero2.tecnm.mx/web/image/22361/20190201_124553_Film2.jpg",
];

// Data object
const aboutTec = {
  name: "Instituto Tecnológico de Gustavo A. Madero",
  description:
    "El Instituto Tecnológico de Gustavo A. Madero es una institución educativa ubicada en la alcaldía Gustavo A. Madero de la Ciudad de México, México. Este instituto ofrece una variedad de programas académicos en áreas como ingeniería, tecnología y ciencias aplicadas. Su enfoque principal es proporcionar una educación de calidad en estas disciplinas, promoviendo la formación de profesionales competentes en el ámbito tecnológico. El Instituto Tecnológico de Gustavo A. Madero también puede estar involucrado en proyectos de investigación y colaboraciones con la comunidad local para contribuir al desarrollo tecnológico y económico de la región.",
  mission:
    "La misión del Instituto Tecnológico de Gustavo A. Madero es proporcionar educación superior de calidad en áreas tecnológicas y científicas, con un enfoque en la formación de profesionales altamente capacitados y éticos. Busca promover la investigación, la innovación y la colaboración con la comunidad, contribuyendo al desarrollo económico y tecnológico de la región y del país. Su objetivo principal es preparar a los estudiantes para enfrentar los desafíos del mundo moderno y ser agentes de cambio positivo en sus respectivas áreas de estudio y en la sociedad en general.",
  values:
    "El Instituto Tecnológico de Gustavo A. Madero se fundamenta en una sólida ética de calidad educativa, promoviendo la excelencia académica, la integridad y la responsabilidad. Prioriza la innovación y la adaptabilidad, fomentando la creatividad y la colaboración, mientras valora la diversidad y la igualdad de oportunidades. Comprometido con el desarrollo sustentable y la vinculación activa con la comunidad, busca contribuir al progreso socioeconómico y tecnológico, reflejando así su compromiso con una educación superior de calidad y valores sólidos.",
};

/* GET about/tec. */
router.get("/tec", (_, res) => {
  // RandomImage
  const randomImage =
    randomImages[Math.floor(Math.random() * randomImages.length)];
  res.render("about", {
    // SpreadOperator
    ...aboutTec,
    image: randomImage,
  });
});

router.get("/api/tec", function (_, res, _) {
  const randomImage =
    randomImages[Math.floor(Math.random() * randomImages.length)];
  res.send({
    ...aboutTec,
    image: randomImage,
  });
});

module.exports = router;
