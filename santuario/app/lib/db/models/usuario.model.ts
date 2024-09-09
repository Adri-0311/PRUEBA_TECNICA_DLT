import { Document, model, models, Schema } from 'mongoose';

export interface IUsuario extends Document {
	name: string;
	email: string;
	password: string;
	rol: string;
	descripcion: string;
}

const UsuarioSchema = new Schema<IUsuario>({
	name: { type: String, maxlength: 20},
	email: {type: String, unique: true, required: true},
	password: {type: String, required: true},
	rol: {
		type: String,
		enum: {
			values: ['criador', 'maestro'],
			message: 'Tipo de rol {VALUE} no aceptado',
		},
		require: true,
	},
	descripcion: { type: String},
});

export default models?.Usuario || model<IUsuario>('Usuario', UsuarioSchema);
