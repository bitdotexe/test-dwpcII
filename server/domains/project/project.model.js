//  Importando Mongoose
import mongoose from 'mongoose';
//  Desestructurando la función Schema
const { Schema } = mongoose;
//  Construir un Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//  Compilando el Schema para generar el modelo
export default mongoose.model('project', ProjectSchema);
