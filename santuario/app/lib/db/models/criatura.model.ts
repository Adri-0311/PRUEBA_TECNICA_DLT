import { Document, model, models, Schema } from 'mongoose';

export interface ICriatura extends Document {
	name: string;
	tipo: string;
	nivel: number;
	entrenado: boolean;
}

const CriaturaSchema = new Schema<ICriatura>({
	name: { type: String, maxlength: 20, require: true },
	tipo: {
		type: String,
		require: true,
	},
	nivel: { type: Number, min: 1, max: 10, require: true },
	entrenado: { type: Boolean, require: true },
});

export default models?.Criatura || model<ICriatura>('Criatura', CriaturaSchema);
