import { Icon } from "@iconify/react";
import ProductCard from "./ProductCard";
import { Product } from "@/types";

interface ContentProps {
	products: Product[];
	direction?: string;
	title: string;
}

const Content = ({ products, direction, title }: ContentProps) => {
	let sortedProducts = [...products];
	if (direction) {
		sortedProducts = sortedProducts.slice(0, 6).sort((a, b) => {
			if (direction === "up") {
				return b.change.pct - a.change.pct;
			}
			return a.change.pct - b.change.pct;
		});
	}
	return (
		<section className="container pb-6 md:pb-10 space-y-4">
			<div
				className={`${direction === "up" ? "text-error" : "text-primary"} flex items-center justify-center md:justify-start gap-2`}>
				{direction && <Icon icon={`bxs:${direction}-arrow`} />}
				<div>
					<h2 className="text-secondary font-bold text-lg">{title}</h2>
					{!direction && (
						<>
							<span className="text-secondary/70 text-sm">
								মোট {products.length}টি পণ্য দেখান হচ্ছে
							</span>
						</>
					)}
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{sortedProducts.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default Content;
