import Button from '@/components/buttons/Button';
import ArrowUturnLeftIcon from '@/icons/ArrowUturnLeftIcon';
import Link from 'next/link';

export default function NotFound() {
	return (
		<section>
			<h2 className='title'>404 Not Found</h2>
			<p>La criatura que buscas no existe</p>
			<Button>
				<Link href='/criaturas'>
					Volver
					<ArrowUturnLeftIcon className='icon-style-alternative'/>
				</Link>
			</Button>
		</section>
	);
}
