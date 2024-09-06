import Image from "next/image";
import LoginForm from "@/components/forms/register-form";

export default function RegisterPage() {
  return (
    <main className='loginRegister'>
      <div className='imageContainer'>
        <Image
          className='imageLeft'
          src="/register.png"
          fill
          alt="Mythological grypho"
        />
      </div>
      <div className='formContainer'>
        <LoginForm />
      </div>
    </main>
  )
}