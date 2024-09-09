import dbConnect from './db/dbConnect';
import criaturaModel, { ICriatura } from './db/models/criatura.model';
import tipoCriaturaModel, {
	ITipoCriatura,
} from './db/models/tipoCriatura.model';
import usuarioModel, { IUsuario } from './db/models/usuario.model';

export async function fetchTiposCriaturas() {
	// Connect with MongoDB
	await dbConnect();

	try {
		const tipos = await tipoCriaturaModel.find<ITipoCriatura>();

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

		return count;
	} catch (error) {
		console.log('Data base error:', error);
		// throw new Error('Failed to fetch criatures count.');
	}
}

export async function fetchFilteredCriaturas(query: string, tipos: string) {
	await dbConnect();

	try {
		const filtered = await criaturaModel.find<ICriatura>({
			name: new RegExp(query, 'i'),
			// tipo: tipos === '' ? new RegExp(query, 'i') : tipos,
		});

		console.log('fetchFilteredCriaturas:', { query, tipos: tipos, filtered });

		return filtered;
	} catch (error) {
		console.log('Data base error:', error);
		// throw new Error('Failed to fetch filtered criatures.');
	}
}

export async function fetchUserByID(id: string) {
	// Connect with MongoDB
	await dbConnect();

	try {
		const usuario = await usuarioModel.findOne<IUsuario>({ _id: id });

		return usuario as IUsuario;
	} catch (error) {
		console.log('Data base error:', error);
		// throw new Error('Failed to fetch criature data by id.');
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
