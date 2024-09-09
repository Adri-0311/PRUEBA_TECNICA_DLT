'use client';

import { useSearchParams } from 'next/navigation';
import Button from '../buttons/Button';
import style from './filter-form.module.scss';

export default function FilterForm({
	tiposCriatura,
}: {
	tiposCriatura: string[];
}) {
	const params = new URLSearchParams(useSearchParams());
	const paramTipos = params.getAll('tipo');

	console.log('FilterForm paramsTipos:', paramTipos);

	return (
		<div>
			<h3 className='title'>Filtrar</h3>
			<h4 className={style.subtitle}>Buscar por tipo</h4>
			<form
				action=''
				className={style.filterContainer}>
				<ul>
					{tiposCriatura.map((tipo, key) => {
						const tipoLowerCase = tipo.toLowerCase();
						return (
							<li key={key}>
								<input
									type='checkbox'
									id={tipoLowerCase}
									name='tipo'
									value={tipo}
									// checked={paramTipos.includes(tipo)}
								/>
								<label htmlFor={tipoLowerCase}>{tipo}</label>
							</li>
						);
					})}
				</ul>
				<Button type='submit'>Confirmar</Button>
			</form>
		</div>
	);
}
