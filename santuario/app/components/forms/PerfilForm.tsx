import ArrowDownIcon from '@/icons/ArrowDownIcon';
import { updateUser } from '@/lib/action';
import { IUsuario } from '@/lib/db/models/usuario.model';
import style from './perfil-form.module.scss';

export default function PerfilForm({ user }: { user: IUsuario | undefined }) {
	const updateUserByID = updateUser.bind(null, user?.id);

	const handleKeyDownTextArea = (
		e: React.KeyboardEvent<HTMLTextAreaElement>
	) => {
		if (
			(e.ctrlKey || e.metaKey) &&
			(e.key === 'Enter' || e.key === 'NumpadEnter')
		) {
			e.preventDefault();
			e.currentTarget.form?.requestSubmit();
		}
	};
	const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (
			(e.ctrlKey || e.metaKey) &&
			(e.key === 'Enter' || e.key === 'NumpadEnter')
		) {
			e.preventDefault();
			e.currentTarget.form?.requestSubmit();
		}
	};
	const handleKeyDownSelect = (e: React.KeyboardEvent<HTMLSelectElement>) => {
		if (
			(e.ctrlKey || e.metaKey) &&
			(e.key === 'Enter' || e.key === 'NumpadEnter')
		) {
			e.preventDefault();
			e.currentTarget.form?.requestSubmit();
		}
	};

	return (
		<form
			action={updateUserByID}
			className={style.perfilForm}>
			{/* NAME */}
			<div className='form-element'>
				<label htmlFor='name'>Nombre Mágico</label>
				<div>
					<input
						id='name'
						type='name'
						name='name'
						placeholder='Introduce tu nombre mágico'
						value={user?.name}
						onKeyDown={handleKeyDownInput}
						required
					/>
				</div>
			</div>

			{/* MAIL */}
			<div className='form-element'>
				<label htmlFor='email'>Correo Mágico</label>
				<div>
					<input
						id='email'
						type='email'
						name='email'
						placeholder='tunombre@santuario.com'
						value={user?.email}
						onKeyDown={handleKeyDownInput}
						required
					/>
				</div>
			</div>

			{/* ROL */}
			<div className='form-element'>
				<label htmlFor='rol'>Rol</label>
				<div className='relative'>
					<ArrowDownIcon className='icon-style icon-position' />
					<select
						id='rol'
						name='rol'
						className=''
						defaultValue={user ? user.rol : 'cuidador'}
						onKeyDown={handleKeyDownSelect}
						aria-describedby=''>
						<option value='cuidador'>Cuidador</option>
						<option value='maestro'>Maestro</option>
					</select>
				</div>
			</div>

			{/* DESCRIPTION */}
			<div className='form-element'>
				<label htmlFor='description'>Descripción</label>
				<div>
					<textarea
						id='description'
						name='description'
						placeholder='Añade tu descripción'
						onKeyDown={handleKeyDownTextArea}>
						{user?.descripcion}
					</textarea>
				</div>
			</div>
		</form>
	);
}
