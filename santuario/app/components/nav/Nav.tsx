'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './nav.module.scss';

const links = [
	{ name: 'Mis criaturas', href: '/criaturas' },
	{
		name: 'Mi perfil',
		href: '/perfil',
	},
];

export default function Nav() {
	const pathname = usePathname();

	return (
		<nav className={style.nav}>
			<h1>El Santuario</h1>
			<div className={style.links}>
				{links.map((link) => {
					return (
						<Link
							key={link.name}
							href={link.href}>
							<p
								className={`${style.item} ${
									pathname === link.href && style.active
								}`}>
								{link.name}
							</p>
						</Link>
					);
				})}
				<form
				// action={async () => {
				//   'use server';
				//   await signOut();
				// }}
				>
					<Link href='/'>
						<p className={style.item}>Cerrar sesión</p>
					</Link>
				</form>
			</div>
		</nav>
	);
}
