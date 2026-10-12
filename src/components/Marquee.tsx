import { Icon } from "@iconify/react";
import Link from "next/link";
import MarqueeText from "react-marquee-text";

interface Marquee {
	id: number;
	slug: string;
	nameBn: string;
	category: string;
	categoryNameBn: string;
	categoryIcon: string;
	unit: string;
	today: number;
	change: {
		dir: string;
		pct: number;
	};
}

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
	const products: Marquee[] = await getProducts();
	const unitMap = {
		kg: "কেজি",
		litre: "লিটার",
		dozen: "ডজন",
		piece: "পিছ",
	};
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
						{product.today} টাকা/{unitMap[product.unit as keyof typeof unitMap]}
					</span>

					<div
						className={`${product.change.dir === "up" ? "text-error" : "text-primary"} flex items-center gap-1`}>
						<Icon icon={`bxs:${product.change.dir}-arrow`} />
						<span>{product.change.pct} %</span>
					</div>
				</Link>
			))}
		</MarqueeText>
	);
};

export default Marquee;
