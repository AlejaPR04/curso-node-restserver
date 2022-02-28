const { response } = require('express');

const usuariosGet = (req, res= response) => {

    const {q, nombre = 'No'}= req.query;

    res.status(403).json({
        msg: 'get API controlador',
        q,
        nombre
    });
}

const usuariosPost = (req, res = response) => {

    const {nombre, id } = req.body;
    res.status(201).json({
        msg: 'post API controlador',
        nombre, 
        id 
    });
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id; 

    res.status(201).json({
        msg: 'put API controlador',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.status(201).json({
        msg: 'delete API controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}