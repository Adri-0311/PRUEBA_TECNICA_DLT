import Link from "next/link";
import Button from "@/components/buttons/Button";
import style from './form.module.scss';

export default function RegisterForm() {
  return (
    <form action="" className={style.loginForm}>
      <h3 className="title">Únete al santuario</h3>
      <p>Elige siserás cuidador o maestro de criaturas. <br />
        Completa los detalles para comenzar
      </p>

      {/* NAME */}
      <div>
        <label
          className=""
          htmlFor="name"
        >
          Nombre Mágico
        </label>
        <div className="relative">
          <input
            className=""
            id="name"
            type="name"
            name="name"
            placeholder="Introduce tu nombre mágico"
            required
          />
        </div>
      </div>

      {/* MAIL */}
      <div>
        <label
          className=""
          htmlFor="email"
        >
          Correo Mágico
        </label>
        <div className="">
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

      {/* ROL */}
      <div>
        <label
          className=""
          htmlFor="rol"
        >
          Rol
        </label>
        <div className="relative">
          <select
            id="rol"
            name="rol"
            className=""
            defaultValue='cuidador'
            aria-describedby=''
          >
            <option value="cuidador">
              Cuidador
            </option>
            <option value='maestro'>
              Maestro
            </option>
          </select>
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
        Registrarme en el santuario
      </Button>
      <div className="footer-form m-auto">
        ¿Tienes cuenta? <Link href='/register'>Inicia sesión en el refugio</Link>
      </div>
    </form>
  );

}