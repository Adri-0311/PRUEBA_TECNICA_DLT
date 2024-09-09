import Button from '@/components/buttons/Button';
import CriaturasTabla from '@/components/table/CriaturasTable';
import {
	fetchCountCriaturas,
	fetchFilteredCriaturas,
	fetchTiposCriaturas,
} from '@/lib/data';
import Link from 'next/link';

export default async function CriaturasPage({
	searchParams,
}: {
	searchParams?: { query?: string, tipo?: string };
}) {
	const query = searchParams?.query || '';
	const tipos = searchParams?.tipo || '';
	console.log('searchParams tipo: ', tipos);
	
	const [criaturasCount, criaturas, tiposCriatura] = await Promise.all([
		fetchCountCriaturas(),
		fetchFilteredCriaturas(query, tipos),
		fetchTiposCriaturas(),
	]);

	if (criaturasCount === 0) {
		return (
			<div>
				<p>
					Aún no has añadido ninguna criatura al santuario <br />
					¡Empieza tu colección ahora!
				</p>
				<Button>
					<Link href='/criaturas/registrar'>Añadir nueva criatura</Link>
				</Button>
			</div>
		);
	}

	return (
		<>
			<div className='flex align-center mb-30'>
				<Button>
					<Link href='/criaturas/registrar'>Añadir nueva criatura</Link>
				</Button>
				<p className='m-0'>
					Número de Criaturas: <span>{criaturasCount}</span>
				</p>
			</div>
			<CriaturasTabla
				criaturas={criaturas}
				tiposCriatura={tiposCriatura}
			/>
		</>
	);
}
