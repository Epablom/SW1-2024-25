var express = require('express');
var router = express.Router();
const userService = require('./userService');

/* GET profile. */
router.get('/', (req, res, next) => {
    res.render('profile', { title: 'Perfil', currentPage: 'profile' })
});

router.post('/:id/editProfile', async (req, res) => {
    const userID = req.params.id;
    const updatedData = req.body; //para editar perfil
    
    const success = await userService.updateUserByID(userID, updatedData);
    if (success) {
        req.session.message = 'Perfil actualizado correctamente';
        res.redirect(`/profile/${userID}`);
    } else {
        req.session.error = 'No se pudo actualizar el perfil';
        res.redirect(`/profile/${userID}`);
    }
});

module.exports = router;