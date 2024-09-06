import Image from "next/image";
import LoginForm from "@/components/forms/login-form";

export default function LoginPage() {
  return (
    <main className='loginRegister'>
      <div className='imageContainer'>
        <Image
          className='imageLeft'
          src="/login.png"
          fill
          alt="Mythological deer"
        />
      </div>
      <div className='formContainer'>
        <LoginForm />
      </div>
    </main>
  )
}