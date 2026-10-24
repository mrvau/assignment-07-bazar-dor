import { DIRECTION_MAP, UNIT_MAP } from "@/constants";
import { convertToBangla } from "@/lib/utility";
import { Product } from "@/types";
import { Icon } from "@iconify/react";
import Link from "next/link";
import MarqueeText from "react-marquee-text";

const getProducts = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`);
	return response.json();
};

const Marquee = async () => {
	const products: Product[] = await getProducts();
	return (
		<MarqueeText direction="right" duration={10} className="border-b border-secondary/10">
			{products.map((product) => (
				<Link
					href={`/product/${product.id}`}
					key={product.id}
					className="flex items-center gap-2 border-r border-secondary/10 px-4 py-1">
					<span className="font-bold">
						{product.categoryIcon} {product.nameBn}
					</span>

					<span>
						{convertToBangla(product.today)} টাকা/{UNIT_MAP[product.unit as keyof typeof UNIT_MAP]}
					</span>

					<div
						className={`${DIRECTION_MAP[product.change.dir as keyof typeof DIRECTION_MAP].color} flex items-center gap-1`}>
						<Icon icon={DIRECTION_MAP[product.change.dir as keyof typeof DIRECTION_MAP].icon} />
						<span>{convertToBangla(product.change.pct)} %</span>
					</div>
				</Link>
			))}
		</MarqueeText>
	);
};

export default Marquee;
