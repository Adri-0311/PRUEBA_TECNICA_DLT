import ArrowDownIcon from '@/icons/ArrowDownIcon';
import Button from '../buttons/Button';
import style from './crate-edit-form.module.scss';

const tipos = ['Dragón', 'Fénix', 'Golem', 'Grifo', 'Vampiro'];

export default function CreateForm() {
	return (
		<form
			action=''
			// className={`${style.loginForm} `}
		>
			<h3 className={`title ${style.textCenter}`}>
				Creador de criaturas mágicas
			</h3>

			<div className={style.formContent}>
				{/* NAME */}
				<div className='form-element'>
					<label htmlFor='name'>Nombre mágico de la criatura</label>
					<div>
						<input
							id='name'
							type='text'
							name='name'
							placeholder='Introduce el nombre de la criatura'
							required
						/>
					</div>
				</div>

				{/* TIPO */}
				<div className='form-element'>
					<label htmlFor='tipo'>Rol</label>
					<div className='relative'>
						<ArrowDownIcon className='icon-style icon-position' />
						<select
							id='tipo'
							name='tipo'
							defaultValue='cuidador'>
							{tipos.map((tipo, key) => {
								return (
									<option
										key={key}
										value={tipo}>
										{tipo}
									</option>
								);
							})}
						</select>
					</div>
				</div>

				{/* NIVEL */}
				<div className='form-element'>
					<label htmlFor='nivel'>Correo Mágico</label>
					<div>
						<input
							id='nivel'
							type='number'
							name='nivel'
							placeholder='1'
							required
						/>
					</div>
				</div>

				{/* TRAINED */}
				<div className={`form-element ${style.end}`}>
					<label htmlFor='entrenado'>¿Entrenada?</label>
					<div className={style.checkboxContainer}>
						<div>
							<input
								id='entrenado'
								type='checkbox'
								name='entrenado'
								required
							/>
							<span>Sí</span>
						</div>
						<div>
							<input
								id='entrenado'
								type='checkbox'
								name='entrenado'
								required
							/>
							<span>No</span>
						</div>
					</div>
				</div>
			</div>

			<div className={style.center}>
				<Button
					// aria-disabled={isPending}
					type='submit'>
					Editar criatura
				</Button>
			</div>
		</form>
	);
}
