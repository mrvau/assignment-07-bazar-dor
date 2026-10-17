import { UNIT_MAP } from "@/constants";
import { Product } from "@/types";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";

const ProductCard = ({ product }: { product: Product }) => {
	return (
		<Card>
			<CardHeader className="flex-row items-center gap-2">
				<div className="bg-gray-200 text-2xl p-2 rounded-xl">{product.image}</div>
				<div>
					<CardTitle className="text-lg font-semibold">{product.nameBn}</CardTitle>
					<CardDescription>{`প্রতি ${UNIT_MAP[product.unit as keyof typeof UNIT_MAP]}`}</CardDescription>
				</div>
			</CardHeader>
			<CardFooter>
				<div>
					<span>আজকের দাম</span>
					<span>{product.today} টাকা</span>
				</div>
				<Chip color="danger">
					<Icon icon={"dxs:arrow-up"} />
					{product.change.pct} %
				</Chip>
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
