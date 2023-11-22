import log from '../../config/winston';
// Importando el modelo
import ProjectModel from './project.model';

// Actions methods

// GET '/project/showDashboard'
const showDashboard = async (req, res) => {
  // Consultado todos los proyectos
  const projects = await ProjectModel.find({}).lean().exec();
  // Enviando los proyectos al cliente en JSON
  res.render('project/dashboardView', { projects });
};
// GET '/project/addForm'
const addForm = (req, res) => {
  res.render('project/addView');
};

// POST "/project/add"
const addPost = async (req, res) => {
  // Rescatando la info del formulario
  const { errorData: validationError } = req;
  // En caso de haber error
  // se le informa al cliente
  if (validationError) {
    log.info('Se entrega al cliente error de validación de add Project');
    // Se desestructuran los datos de validación
    const { value: project } = validationError;
    // Se extraen los campos que fallaron en la validación
    const errorModel = validationError.inner.reduce((prev, curr) => {
      // Creando una variable temporal para
      // evitar el error "no-param-reassing"
      const workingPrev = prev;
      workingPrev[`${curr.path}`] = curr.message;
      return workingPrev;
    }, {});
    return res.status(422).render('project/addView', { project, errorModel });
  }
  // En caso de que pase la validación
  // Se desestructura la información
  // de la peticion
  const { validData: project } = req;
  // Creando la instancia de un documento
  // con los valores de 'project'
  const projectDocument = new ProjectModel(project);
  try {
    // Se salva el documento en la colección correspondiente
    const savedProject = await projectDocument.save();
    // Se informa al cliente que se a guardado el proyecto
    log.info(`Se carga proyecto ${savedProject}`);
    //  Se registra en el log de redireccionamiento
    log.info('Se redirecciona el sistema a /projects');
    //  Se redirecciona el sistema a la ruta /projects
    return res.redirect('/projects/dashboard');
  } catch (error) {
    log.error(
      'ln 56 project.controller: Error al guardar proyecto en la base de datos',
    );
    return res.status(500).json(error);
  }
};

// Controlador user
export default {
  // Action Methods
  showDashboard,
  addForm,
  addPost,
};
