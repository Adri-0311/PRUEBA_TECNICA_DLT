import style from './perfil-form.module.scss';

export default function PerfilForm() {
	return (
		<form
			action=''
			className={style.perfilForm}>
			{/* NAME */}
			<div>
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
			<div>
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
			<div>
				<label htmlFor='rol'>Rol</label>
				<div>
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
			<div>
				<label htmlFor='description'>Descripción</label>
				<div>
					<input
						id='description'
						type='empasswordail'
						name='description'
						placeholder='Añade tu descripción'
					/>
				</div>
			</div>
		</form>
	);
}
