import Button from '@/components/buttons/Button';
import ArrowDownIcon from '@/icons/ArrowDownIcon';
import Link from 'next/link';
import style from './login-register-form.module.scss';

export default function RegisterForm() {
	return (
		<form
			action=''
			className={style.loginForm}>
			<h3 className='title'>Únete al santuario</h3>
			<p>
				Elige siserás cuidador o maestro de criaturas.
				Completa los detalles para comenzar
			</p>

			{/* NAME */}
			<div className='form-element'>
				<label htmlFor='name'>Nombre Mágico</label>
				<div>
					<input
						id='name'
						type='text'
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
				<label
					htmlFor='rol'>
					Rol
				</label>
				<div className='relative'>
					<ArrowDownIcon className='icon-style icon-position' />
					<select
						id='rol'
						name='rol'
						defaultValue='cuidador'
						aria-describedby=''>
						<option value='cuidador'>Cuidador</option>
						<option value='maestro'>Maestro</option>
					</select>
				</div>
			</div>

			{/* PASSWORD */}
			<div className='form-element'>
				<label htmlFor='password'>Palabra Mágica</label>
				<div>
					<input
						id='password'
						type='password'
						name='password'
						placeholder='Introduce tu contraseña'
						required
					/>
				</div>
			</div>
			<Button
				className='m-auto'
        type='submit'
				// aria-disabled={isPending}
			>
				Registrarme en el santuario
			</Button>
			<div className='footer-form m-auto'>
				¿Tienes cuenta?{' '}
				<Link href='/login'>Inicia sesión en el refugio</Link>
			</div>
		</form>
	);
}
