import { ICriatura } from '@/lib/db/models/criatura.model';
import { ITipoCriatura } from '@/lib/db/models/tipoCriatura.model';
import { DeleteCreature, UpdateCreature } from '../buttons/ButtonsCriaturas';
import FilterForm from '../forms/FilterForm';
import Search from '../search/Search';
import style from './criaturas-table.module.scss';

export default function CriaturasTabla({
	criaturas,
	tiposCriatura,
}: {
	criaturas: ICriatura[] | undefined;
	tiposCriatura: ITipoCriatura[];
}) {

	const tipos = tiposCriatura.map(tipo => tipo.name);

	return (
		<div className={style.container}>
			<FilterForm tiposCriatura={tipos} />
			<div className={style.containerSearchTable}>
				<Search placeholder='Nombre' />
				<table className={style.table}>
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Tipo</th>
							<th>Nivel</th>
							<th>Entrenado</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{criaturas?.map((criatura) => {
							return (
								<tr key={criatura.id}>
									<td>{criatura.name}</td>
									<td>{criatura.tipo}</td>
									<td>{criatura.nivel}</td>
									<td>{criatura.entrenado ? 'Sí' : 'No'}</td>
									<td>
										<div>
											<UpdateCreature id={criatura.id} />
											<DeleteCreature id={criatura.id} />
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
