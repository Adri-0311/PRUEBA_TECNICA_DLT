import Nav from '@/components/nav/Nav';
import './criaturas-perfil.scss';
import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className='flex'>
				<Image
					className='imgLeft'
					src='/master.png'
					width={2048}
					height={2048}
					alt='Mythological deer'
				/>
				<div className='w-100'>
					<Nav />
					<main>{children}</main>
				</div>
			</div>
		</>
	);
}
