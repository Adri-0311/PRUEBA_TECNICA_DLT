'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import dbConnect from './db/dbConnect';
import criaturaModel from './db/models/criatura.model';

/**
 * Insert new creature in santuario DB
 *
 * @param formData
 * @returns
 */
export async function addCreature(formData: FormData) {
	// Connect with MongoDB
	await dbConnect();

	// Extracting content from formData
	const name = formData.get('name');
	const tipo = formData.get('tipo');
	const nivel = formData.get('nivel');
	const entrenado = formData.get('entrenado');

	try {
		// Creating a new creature using Criatura model
		const newCriatura = new criaturaModel({
			name,
			tipo,
			nivel,
			entrenado,
		});

		// Saving the new todo
		await newCriatura.save();
	} catch (error) {
		console.log(error);
		return { message: 'Error creating creature in the DB' };
	}

	revalidatePath('/criaturas');
	redirect('/criaturas');
}

/**
 * Update one creature data from santuario DB
 *
 * @param id
 * @param formData
 * @returns
 */
export async function updateCreature(id: string, formData: FormData) {
	// Connect with MongoDB
	await dbConnect();

	// Extracting content from formData
	const name = formData.get('name');
	const tipo = formData.get('tipo');
	const nivel = formData.get('nivel');
	const entrenado = formData.get('entrenado');

	console.log('updateCreature: ', formData);

	try {
		// Update creature by id
		const res = await criaturaModel.updateOne(
			{ _id: id },
			{ name, tipo, nivel, entrenado }
		);

		console.log('Creature updated: ', res.acknowledged ? 'YES' : 'NO');
	} catch (error) {
		console.log(error);
		return { message: 'Error creating creature in the DB' };
	}

	revalidatePath('/criaturas');
	redirect('/criaturas');
}

export async function deleteCreature(id: string) {
	try {
		const result = await criaturaModel.deleteOne({ _id: id });

		console.log('Delete creature:', result.deletedCount ? 'Yes' : 'NO');
	} catch (error) {
		console.log(error);
		return { message: 'Error deleting creature in the DB' };
	}

	revalidatePath('/criaturas');
}
