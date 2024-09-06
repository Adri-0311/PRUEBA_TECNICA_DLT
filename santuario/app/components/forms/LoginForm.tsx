import Link from "next/link";
import Button from "@/components/buttons/Button";
import style from './form.module.scss';

export default function LoginForm() {
  return (
    <form action="" className={style.loginForm}>
      <h3 className="title">Inicia sesión</h3>
      <p>Para acceder a la colección de criaturas mágicas. Solo los maestros y cuidadores reconocidos pueden entrar</p>
      {/* MAIL */}
      <div>
        <label
          className=""
          htmlFor="email"
        >
          Correo Mágico
        </label>
        <div className="relative">
          <input
            className=""
            id="email"
            type="email"
            name="email"
            placeholder="tunombre@santuario.com"
            required
          />
        </div>
      </div>
      {/* PASSWORD */}
      <div>
        <label
          className="mb-3 mt-5 block text-xs font-medium text-gray-900"
          htmlFor="password"
        >
          Palabra Mágica
        </label>
        <div className="relative">
          <input
            className=""
            id="password"
            type="empasswordail"
            name="password"
            placeholder="Introduce tu contraseña"
            required
          />
        </div>
      </div>
      <Button className="m-auto"
      // aria-disabled={isPending} 
      >
        Acceder al santuario
      </Button>
      <div className="footer-form m-auto">
        ¿No tienes cuenta? <Link href='/register'>Regístrate como maestro o como cuidador</Link>
      </div>
    </form>
  );

}