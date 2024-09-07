import EditIcon from '@/icons/EditIcon';
import TrashIcon from '@/icons/TrashIcon';
import Link from 'next/link';
import style from './buttons-criaturas.module.scss';

export function UpdateCreature({ id }: { id: string }) {
	return (
		<Link href={`/criaturas/${id}/edit`}>
			<EditIcon className='icon-style' />
		</Link>
	);
}

export function DeleteCreature({ id }: { id: string }) {
	// const deleteCreatureWithId = deleteCreature.bind(null, id);
	return (
		<form
		// action={deleteCreatureWithId}
		>
			<button className={`${style.transparent} ${style.cursor}`}>
				<TrashIcon className='icon-style' />
			</button>
		</form>
	);
}
