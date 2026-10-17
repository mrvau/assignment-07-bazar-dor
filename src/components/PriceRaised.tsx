import { Product } from "@/types";
import { Icon } from "@iconify/react";
import ProductCard from "./ProductCard";

const getTopRaisedProducts = async () => {
	const response = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
	const products: Product[] = await response.json();
	const sortedProducts = products.sort((a, b) => {
		const aRaised = a.today - a.yesterday;
		const bRaised = b.today - b.yesterday;
		return bRaised - aRaised;
	});

	console.log(sortedProducts);

	return sortedProducts.slice(0, 6);
};

const PriceRaised = async () => {
	const topRaisedProducts = await getTopRaisedProducts();
	return (
		<section className="container pb-6 md:pb-10">
			<div className="text-error flex items-center justify-center md:justify-start gap-2">
				<Icon icon="bxs:up-arrow" />
				<h2 className="text-secondary font-bold text-lg">আজ দাম বেড়েছে</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{topRaisedProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};
export default PriceRaised;
