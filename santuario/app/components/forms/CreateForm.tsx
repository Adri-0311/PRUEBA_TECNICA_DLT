import ArrowDownIcon from '@/icons/ArrowDownIcon';
import { addCreature } from '@/lib/action';
import Button from '../buttons/Button';
import style from './crate-edit-form.module.scss';

const tipos = ['Dragón', 'Fénix', 'Golem', 'Grifo', 'Vampiro'];

export default function CreateForm() {
	return (
		<form
			action={addCreature}
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
							maxLength={20}
							required
						/>
					</div>
				</div>

				{/* TIPO */}
				<div className='form-element'>
					<label htmlFor='tipo'>Tipo de criatura</label>
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
					<label htmlFor='nivel'>Nivel de poder</label>
					<div>
						<input
							id='nivel'
							type='number'
							name='nivel'
							placeholder='1'
							min={1}
							max={10}
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
								type='radio'
								name='entrenado'
								value={1}
								required
							/>
							<span>Sí</span>
						</div>
						<div>
							<input
								id='entrenado'
								type='radio'
								name='entrenado'
								value={0}
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
					Registrar criatura
				</Button>
			</div>
		</form>
	);
}
