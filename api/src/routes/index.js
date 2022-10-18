const { Router } = require('express');
// Importar todos los routers;
const Diet = require('./Diet.js');
const Recipe = require('./Recipe.js');
const router = Router();

// Configurar los routers
router.use('/recipes', Recipe);
router.use('/diet', Diet);


module.exports = router;
