import { DIRECTION_MAP, UNIT_MAP } from "@/constants";
import { Product } from "@/types";
import { Icon } from "@iconify/react";
import Link from "next/link";
import MarqueeText from "react-marquee-text";

const getProducts = async () => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`);
		return response.json();
	} catch (e) {
		console.error("Error fetching products: ", e);
		throw new Error("Failed to fetch products");
	}
};

const Marquee = async () => {
	const products: Product[] = await getProducts();
	return (
		<MarqueeText direction="right" textSpacing="36px" duration={10} className="py-1">
			{products.map((product) => (
				<Link
					href={`/categories/${product.category}/${product.id}`}
					key={product.id}
					className="flex items-center gap-2">
					<span className="font-bold">
						{product.categoryIcon} {product.nameBn}
					</span>

					<span>
						{product.today} টাকা/{UNIT_MAP[product.unit as keyof typeof UNIT_MAP]}
					</span>

					<div
						className={`${DIRECTION_MAP[product.change.dir as keyof typeof DIRECTION_MAP].color} flex items-center gap-1`}>
						<Icon icon={DIRECTION_MAP[product.change.dir as keyof typeof DIRECTION_MAP].icon} />
						<span>{product.change.pct} %</span>
					</div>
				</Link>
			))}
		</MarqueeText>
	);
};

export default Marquee;
