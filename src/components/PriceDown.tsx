import { Product } from "@/types";
import { Icon } from "@iconify/react";
import React from "react";
import ProductCard from "./ProductCard";

const PriceDown = ({ topDownProducts }: { topDownProducts: Product[] }) => {
	return (
		<section className="container pb-6 md:pb-10 space-y-4">
			<div className="text-primary flex items-center justify-center md:justify-start gap-2">
				<Icon icon="bxs:down-arrow" />
				<h2 className="text-secondary font-bold text-lg">আজ দাম কমেছে</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{topDownProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default PriceDown;
