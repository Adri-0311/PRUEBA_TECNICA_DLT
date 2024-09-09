import PerfilForm from '@/components/forms/PerfilForm';
import { fetchUserByID } from '@/lib/data';

export default async function PerfilPage() {
	const user = await fetchUserByID('id');
	return (
		<>
			<div className='header'>
				<h2 className='title'>Mi Perfil</h2>
				<p>
					Este es el lugar donde podrás gestionar, actualizar y personalizar la
					información de tu perfil.
				</p>
			</div>
			<PerfilForm user={user} />
		</>
	);
}
