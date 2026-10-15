import { Icon } from "@iconify/react";

const getRaisedProducts = async () => {
	const response = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
	const products = await response.json();
	const sortedProducts = products;
};

const PriceRaised = () => {
	return (
		<section className="container pb-6 md:pb-10">
			<div className="text-error flex items-center justify-center md:justify-start gap-2">
				<Icon icon="bxs:up-arrow" />
				<h2 className="text-secondary font-bold text-lg">আজ দাম বেড়েছে</h2>
			</div>
			<div></div>
		</section>
	);
};
export default PriceRaised;
