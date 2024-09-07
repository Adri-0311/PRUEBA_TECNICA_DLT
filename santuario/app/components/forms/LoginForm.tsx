import Link from 'next/link';
import Button from '@/components/buttons/Button';
import style from './login-register-form.module.scss';

export default function LoginForm() {
	return (
		<form
			action=''
			className={style.loginForm}>
			<h3 className='title'>Inicia sesión</h3>
			<p>
				Para acceder a la colección de criaturas mágicas. Solo los maestros y
				cuidadores reconocidos pueden entrar
			</p>
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
				// aria-disabled={isPending}
				type='submit'>
				Acceder al santuario
			</Button>
			<div className='footer-form m-auto'>
				¿No tienes cuenta?{' '}
				<Link href='/registrar'>Regístrate como maestro o como cuidador</Link>
			</div>
		</form>
	);
}
