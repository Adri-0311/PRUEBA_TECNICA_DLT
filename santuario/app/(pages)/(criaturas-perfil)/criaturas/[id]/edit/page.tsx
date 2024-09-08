import EditForm from '@/components/forms/EditForm';
import { fetchCriaturaByID, fetchTiposCriaturas } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function EditPage({ params }: { params: { id: string } }) {
	const [criatura, tiposCriatura] = await Promise.all([
		fetchCriaturaByID(params.id),
		fetchTiposCriaturas(),
	]);

	if (!criatura) {
		notFound();
	}

	return (
		<EditForm
			criatura={criatura}
			tiposCriatura={tiposCriatura}
		/>
	);
}
