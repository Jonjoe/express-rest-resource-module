/*
| [resource] Routes ===============================================
| -----------------------------------------------------------------
| Routing for [resource] api/[version]/[resource]]
*/

// Base Imports ===================================================
// ----------------------------------------------------------------
const Router = require('express').Router()
const Resource   = require('./controller')

// CRUD Actions ===================================================
// ----------------------------------------------------------------

// Resource Index
Router.get('/', Resource.index)
// Create Resource
Router.post('/', Resource.create)
// Update Record
Router.patch('/:id', Resource.update)
// Read Record
Router.get('/:id', User.show)
// Delete Record
Router.delete('/:id', Resource.update)

// Other Actions ===================================================
// ----------------------------------------------------------------
// ... Other routes here.

module.exports = Router