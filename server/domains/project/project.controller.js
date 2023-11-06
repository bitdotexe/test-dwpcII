// Actions methods

// GET '/project/showDashboard'
const showDashboard = (req, res) => {
  res.render('project/addView');
};
// GET '/project/addForm'
const addForm = (req, res) => {
  res.send("🚧 Under Construction '/project/addForm' 🚧");
};

// Controlador Home
export default {
  showDashboard,
  addForm,
};
