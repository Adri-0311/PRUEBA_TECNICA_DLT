export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className='header'>
				<h2 className='title'>Mis Criaturas</h2>
				<p>
					Explora y gestiona todas las criaturas mágicas que has recolectado.
					Cada una tiene habilidades únicas y características especiales.
				</p>
			</div>
			<>{children}</>
		</>
	);
}
