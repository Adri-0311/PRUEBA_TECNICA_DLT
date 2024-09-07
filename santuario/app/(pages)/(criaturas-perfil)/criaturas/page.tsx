import Button from '@/components/buttons/Button';
import CriaturasTabla from '@/components/table/CriaturasTable';
import { Criatura } from '@/lib/definitions';
import Link from 'next/link';

// Mok
const criaturas: Criatura[] = [
	{
		id: '0',
		nombre: 'Hulolo',
		tipo: 'Dragón',
		nivel: 1,
		entrenado: false,
	},
	{
		id: '1',
		nombre: 'Hulolo2',
		tipo: 'Fénix',
		nivel: 5,
		entrenado: true,
	},
];

export default function CriaturasPage() {
	return (
		<>
			<Button className='mb-30'>
				<Link href='/criaturas/registrar'>Añadir nueva criatura</Link>
			</Button>
			<CriaturasTabla criaturas={criaturas} />
		</>
	);
}
