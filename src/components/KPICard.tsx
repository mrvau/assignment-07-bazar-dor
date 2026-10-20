import { convertToBangla } from "@/lib/utility";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@heroui/react";

const KPICard = ({
	price,
	title,
	description,
	type,
	className,
}: {
	price: number;
	title: string;
	description: string;
	type: "high" | "low";
	className?: string;
}) => {
	return (
		<Card
			className={`border border-secondary/10 items-center md:items-start text-center md:text-left ${className}`}>
			<CardHeader>
				<CardTitle className="text-lg">{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className={type === "high" ? "text-error" : "text-primary"}>
					<span className="font-bold text-3xl">{convertToBangla(price)}</span> টাকা
				</p>
			</CardContent>
			<CardFooter>
				<p>{description}</p>
			</CardFooter>
		</Card>
	);
};

export default KPICard;
