import React from 'react';
import Button from '../buttons/Button';
import style from './filter-form.module.scss';

const tipos = ['Dragón', 'Fénix', 'Golem', 'Grifo', 'Vampiro'];

export default function FilterForm() {
	return (
		<div>
			<h3 className='title'>Filtrar</h3>
			<h4 className={style.subtitle}>Buscar por tipo</h4>
			<form
				action=''
				className={style.filterContainer}>
				<ul>
					{tipos.map((tipo, key) => {
						const tipoLowerCase = tipo.toLowerCase();
						return (
							<li key={key}>
								<input
									type='checkbox'
									id={tipoLowerCase}
									name={tipoLowerCase}
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
