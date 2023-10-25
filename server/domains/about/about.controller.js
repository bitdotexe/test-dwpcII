// Actions methods
// GET "/"
// GET "/index"
const about = (req, res) => {
  res.render('home/aboutView', { appVersion: '1.0.0' });
};

// Controlador Home
export default {
  about,
};
