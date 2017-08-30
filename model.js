/*
| [resource] Model ================================================
| -----------------------------------------------------------------
| Model definition for [resource]
*/

// Base Imports ===================================================
// ----------------------------------------------------------------
const mongoose = require('mongoose')
const Schema   = mongoose.Schema

// Model Schema Definition ========================================
// ----------------------------------------------------------------
const schema = new Schema({
  field1: String,
  field2: Number
})

// Model Action Prefires ==========================================
// ----------------------------------------------------------------
schema.pre('save', function(next) {
  const currentDate = new Date()

  this.updated_at = currentDate

  if (!this.created_at) {
    this.created_at = currentDate
  }
})

// Decorators =====================================================
// ----------------------------------------------------------------
const aDecorator = () => {

}

// Map Decorators to Schema =======================================
// ----------------------------------------------------------------
schema.methods = {}

// Export Model ===================================================
// ----------------------------------------------------------------
module.exports = mongoose.model('[resource]', schema)