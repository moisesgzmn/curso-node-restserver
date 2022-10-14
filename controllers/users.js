const { response, request } = require('express')

const getUser = (req = request, res = response) => {

    const { q, nombre = 'no name' } = req.query;

    res.json({
        ok: true,
        msg: "get API - controlador",
        q,
        nombre
    })
}

const postUser = (req = request, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        ok: true,
        msg: "post API - controlador",
        nombre,
        edad
    })
}

const putUser = (req = request, res = response) => {

    const id = req.params.id;

    res.json({
        ok: true,
        msg: "put API - controlador",
        id
    })
}

const patchUser = (req, res = response) => {
    res.json({
        ok: true,
        msg: "patch API - controlador"
    })
}

const deleteUser = (req, res = response) => {
    res.json({
        ok: true,
        msg: "delete API - controlador"
    })
}

module.exports = {
    getUser, postUser, putUser, patchUser, deleteUser
}