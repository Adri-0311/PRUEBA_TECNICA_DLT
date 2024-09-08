import dbConnect from './db/dbConnect';
import criaturaModel, { ICriatura } from './db/models/criatura.model';
import tipoCriaturaModel, {
	ITipoCriatura,
} from './db/models/tipoCriatura.model';

export async function fetchTiposCriaturas() {
	// Connect with MongoDB
	await dbConnect();

	try {
		const tipos = await tipoCriaturaModel.find<ITipoCriatura>();
		console.log('Get tipos criaturas from DB:', tipos);

		return tipos;
	} catch (error) {
		console.log('Data base error:', error);
		throw new Error('Failed to fetch tipos criatures data.');
	}
}

export async function fetchCriaturas() {
	// Connect with MongoDB
	await dbConnect();

	try {
		const criaturas = await criaturaModel.find<ICriatura>();
		console.log('Get criaturas from DB:', criaturas);

		return criaturas;
	} catch (error) {
		console.log('Data base error:', error);
		throw new Error('Failed to fetch criatures data.');
	}
}

export async function fetchCriaturaByID(id: string) {
	// Connect with MongoDB
	await dbConnect();

	try {
		const criatura = await criaturaModel.findOne<ICriatura>({ _id: id });

		console.log('fetchCriaturaByID:', criatura);

		return criatura as ICriatura;
	} catch (error) {
		console.log('Data base error:', error);
		// throw new Error('Failed to fetch criature data by id.');
	}
}

export async function fetchCountCriaturas() {
	// Connect with MongoDB
	await dbConnect();

	try {
		const count = await criaturaModel.countDocuments({});

		console.log('fetchCountCriaturas:', count);

		return count;
	} catch (error) {
		console.log('Data base error:', error);
		// throw new Error('Failed to fetch criatures count.');
	}
}

// export async function fetchCriaturaByName(name: string) {
// 	// Connect with MongoDB
// 	await dbConnect();

// 	try {
// 		const criaturas = await criaturaModel.find<ICriatura>({ name: name });

// 		return criaturas;
// 	} catch (error) {
// 		console.log('Data base error:', error);
// 		throw new Error('Failed to fetch criature data by name.');
// 	}
// }
