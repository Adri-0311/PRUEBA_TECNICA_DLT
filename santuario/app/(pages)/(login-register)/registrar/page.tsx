import RegisterForm from '@/components/forms/RegisterForm';
import Image from 'next/image';

export default function RegisterPage() {
	return (
		<div className='loginRegister'>      
			<Image
				className='imgLeft invertir'
				src='/register.png'
				width={2048}
        height={2048}
				alt='Mythological grypho'
			/>
			<main className='formContainer'>
				<RegisterForm />
			</main>
		</div>
	);
}
