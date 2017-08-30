/*
| Resource Controller ================================================
| -----------------------------------------------------------------
| See the module.exports for a full list of actions.
*/

// Controller Dependencies ========================================
// ----------------------------------------------------------------
const Resource = require('./model')


// CRUD Actions ===================================================
// ----------------------------------------------------------------

const index = (req, res) => {
  return Resource
    .find()
    .then(result => res.json(result))
}

const show = (req, res) => {
  const result = new Resource()
    .query({ where: { id: req.params.id } })
    .fetchAll()
    .then((result) => {
      return res.json(result)
    })

  return result
}

const create = (req, res) => {
}

const update = () => {
}

const destroy = () => {
}

// Export controller ==============================================
// ----------------------------------------------------------------
module.exports = {
  index,
  create,
  update,
  show,
  delete
}
