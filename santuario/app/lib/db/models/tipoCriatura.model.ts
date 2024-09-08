import { Document, model, models, Schema } from 'mongoose';

export interface ITipoCriatura extends Document {
	name: string;
}

export const TipoCriaturaSchema = new Schema<ITipoCriatura>({
	name: {
		type: String,
		enum: {
			values: ['Dragón', 'Fénix', 'Golem', 'Grifo', 'Vampiro'],
			message: 'Tipo de criatura {VALUE} no aceptada',
		},
		require: true,
	},
});

export default models?.TipoCriatura ||
	model<ITipoCriatura>('TipoCriatura', TipoCriaturaSchema);
