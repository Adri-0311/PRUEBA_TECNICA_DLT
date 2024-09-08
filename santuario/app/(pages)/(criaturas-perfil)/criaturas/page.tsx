import Button from '@/components/buttons/Button';
import CriaturasTabla from '@/components/table/CriaturasTable';
import { fetchCountCriaturas, fetchCriaturas } from '@/lib/data';
import Link from 'next/link';

export default async function CriaturasPage() {
	const [criaturasCount, criaturas] = await Promise.all([
		fetchCountCriaturas(),
		fetchCriaturas(),
	]);

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
			<CriaturasTabla criaturas={criaturas} />
		</>
	);
}
