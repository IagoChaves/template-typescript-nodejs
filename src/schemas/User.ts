import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  email ?: string,
  firstname ?: string,
  lastname ?: string,
  fullname() : string
}

const UserSchema = new Schema({
  email: String,
  firstname: String,
  lastname: String
}, {
  timestamps: true
})

export default model<UserInterface>('User', UserSchema)
