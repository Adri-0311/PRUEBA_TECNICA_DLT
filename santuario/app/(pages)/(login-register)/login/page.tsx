import Image from 'next/image';
import LoginForm from '@/components/forms/LoginForm';

export default function LoginPage() {
	return (
		<div className='loginRegister'>
			<Image
				className='imgLeft'
				src='/login.png'
				width={2048}
				height={2048}
				alt='Mythological deer'
			/>
			<main className='formContainer'>
				<LoginForm />
			</main>
		</div>
	);
}
