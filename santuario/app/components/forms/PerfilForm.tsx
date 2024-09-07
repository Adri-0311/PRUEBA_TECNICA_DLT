import ArrowDownIcon from '@/icons/ArrowDownIcon';
import style from './perfil-form.module.scss';

export default function PerfilForm() {
	return (
		<form
			action=''
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
						defaultValue='cuidador'
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
						placeholder='Añade tu descripción'></textarea>
				</div>
			</div>
		</form>
	);
}
