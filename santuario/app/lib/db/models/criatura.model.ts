import { Document, model, models, Schema, Types } from 'mongoose';

export interface ICriatura extends Document {
	cuidador: Types.ObjectId;
	name: string;
	tipo: string;
	nivel: number;
	entrenado: boolean;
}

const CriaturaSchema = new Schema<ICriatura>({
	cuidador: { type: Schema.Types.ObjectId },
	name: { type: String, maxlength: 20, require: true },
	tipo: {
		type: String,
		enum: {
			values: ['Dragón', 'Fénix', 'Golem', 'Grifo', 'Vampiro'],
			message: 'Tipo de criatura {VALUE} no aceptada',
		},
		require: true,
	},
	nivel: { type: Number, min: 1, max: 10, require: true },
	entrenado: { type: Boolean, require: true },
});

export default models?.Criatura || model<ICriatura>('Criatura', CriaturaSchema);
