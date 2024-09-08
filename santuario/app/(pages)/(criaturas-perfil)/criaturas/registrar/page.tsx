import CreatureForm from '@/components/forms/CreateForm';
import { fetchTiposCriaturas } from '@/lib/data';

export default async function CreatePage() {
	const tiposCriatura = await fetchTiposCriaturas();
	
	return <CreatureForm tiposCriatura={tiposCriatura} />;
}
