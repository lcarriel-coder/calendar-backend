const { Router } = require('express');
const { check } = require('express-validator');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events');
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

router.use(validarJWT);

router.get('/', [
   
    
] , getEventos);
router.post('/', [
    check('title','El titlulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatorio').custom( isDate ),
    check('end','Fecha de finalizacion es obligatorio').custom( isDate ),
    validarCampos
]
, crearEvento);

router.put('/:id', [] , actualizarEvento);

router.delete('/:id', [] , eliminarEvento);


module.exports = router;