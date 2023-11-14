import log from '../../config/winston';

// Actions methods

// GET '/project/showDashboard'
const showDashboard = (req, res) => {
  res.send("🚧 Under Construction '/project/showDashboard' 🚧");
};
// GET '/project/addForm'
const addForm = (req, res) => {
  res.render('project/addView');
};

// POST "/project/add"
const addPost = (req, res) => {
  // Rescatando la info del formulario
  const { errorData: validationError } = req;
  // En caso de haber error
  // se le informa al cliente
  if (validationError) {
    log.info('Se entrega al cliente error de validación de add Project');
    res.status(422).json(validationError);
  } else {
    // En caso de que pase la validación
    // Se desestructura la información
    // de la peticion
    const { validData: project } = req;
    // Se contesta la información
    // del proyecto al cliente
    res.status(200).json(project);
  }
};

// Controlador user
export default {
  // Action Methods
  showDashboard,
  addForm,
  addPost,
};
