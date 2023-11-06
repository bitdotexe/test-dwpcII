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
  // Extrayendo la informacion
  // del formulario
  const { name, description } = req.body;
  // Regresando al cliente la información recabada
  res.status(200).json({
    name,
    description,
  });
};

// Controlador user
export default {
  // Action Methods
  showDashboard,
  addForm,
  addPost,
};
