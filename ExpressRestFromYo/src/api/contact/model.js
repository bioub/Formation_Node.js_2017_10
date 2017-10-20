import mongoose, { Schema } from 'mongoose'

const contactSchema = new Schema({
  prenom: {
    type: String
  },
  nom: {
    type: String
  }
}, {
  timestamps: true
})

contactSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      prenom: this.prenom,
      nom: this.nom,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Contact', contactSchema)

export const schema = model.schema
export default model
