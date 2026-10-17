import { Icon } from "@iconify/react";
import ProductCard from "./ProductCard";
import { Product } from "@/types";

const PriceRaised = async ({ topRaisedProducts }: { topRaisedProducts: Product[] }) => {
	return (
		<section className="container pb-6 md:pb-10 space-y-4">
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
