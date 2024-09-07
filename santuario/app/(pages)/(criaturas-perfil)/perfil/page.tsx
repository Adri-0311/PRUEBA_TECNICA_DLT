import PerfilForm from '@/components/forms/PerfilForm';
import Image from 'next/image';

export default function PerfilPage() {
	return (
		<>
			<div className='header'>
				<h2 className='title'>Mi Perfil</h2>
				<p>
					Este es el lugar donde podrás gestionar, actualizar y personalizar la
					información de tu perfil.
				</p>
			</div>
			<PerfilForm />
		</>
	);
}
