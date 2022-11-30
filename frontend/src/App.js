import data from "./data";

function App() {
	return (
		<div>
			<header>
				<a href="/">MyFunnyPet</a>
			</header>
			<main>
				<h1>Рекомендовані товари</h1>
				{
					data.products.map(product => (<div>
						<img src={product.image} alt={product.name} />
						<p>
							{product.name}
						</p>
						<p>
							{product.price}
						</p>
					</div>))
				}
			</main>
		</div>
	);
}

export default App;