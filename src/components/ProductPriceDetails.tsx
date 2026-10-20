import { Market } from "@/types";
import KPICard from "./KPICard";
import {
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableContent,
	TableHeader,
	TableRow,
	TableScrollContainer,
} from "@heroui/react";
import { convertToBangla } from "@/lib/utility";

const ProductPriceDetails = ({ markets, unit }: { markets: Market[]; unit: string }) => {
	const { min: lowestPrice } = markets.toSorted((a, b) => a.min - b.min)[0];
	const { max: highestPrice } = markets.toSorted((a, b) => b.max - a.max)[0];
	const averagePrice = (lowestPrice + highestPrice) / 2;

	return (
		<div className="bg-white px-6 py-4 rounded-2xl space-y-8">
			<div className="space-y-2">
				<h4 className="text-xl font-medium">দামের সারসংক্ষেপ</h4>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
					<KPICard
						price={lowestPrice}
						title="সর্বনিম্ন দাম"
						description="সবচেয়ে কম দামের বাজার"
						type="low"
					/>
					<KPICard
						price={highestPrice}
						title="সর্বাধিক দাম"
						description="সবচেয়ে বেশি দামের বাজার"
						type="high"
					/>
					<KPICard
						price={averagePrice}
						title="গড় দাম"
						description={`প্রতি ${unit}-এর হিসাবে`}
						type="low"
						className="col-span-2 md:col-span-1"
					/>
				</div>
			</div>
			<div className="space-y-2">
				<h4 className="text-xl font-medium">বাজারভিত্তিক আজকের দাম</h4>
				<Table variant="secondary" className="border border-secondary/10 rounded-2xl">
					<TableScrollContainer>
						<TableContent>
							<TableHeader>
								<TableColumn isRowHeader className={"font-semibold border-b rounded-none bg-white"}>
									বাজার
								</TableColumn>
								<TableColumn className={"font-semibold border-b rounded-none bg-white"}>
									বিভাগ
								</TableColumn>
								<TableColumn className={"font-semibold border-b rounded-none bg-white"}>
									সর্বনিম্ন
								</TableColumn>
								<TableColumn className={"font-semibold border-b rounded-none bg-white"}>
									সর্বাধিক
								</TableColumn>
								<TableColumn className={"font-semibold border-b rounded-none bg-white"}>
									গড়
								</TableColumn>
							</TableHeader>
							<TableBody>
								{markets.map((market, idx) => (
									<TableRow key={idx} className={"even:bg-secondary/20 group"}>
										<TableCell
											className={
												"group-even:border-t group-last:border-b-0 group-even:border-secondary/70"
											}>
											{market.market}
										</TableCell>
										<TableCell
											className={
												"group-even:border-t group-last:border-b-0 group-even:border-secondary/70"
											}>
											{market.division}
										</TableCell>
										<TableCell
											className={
												"group-even:border-t group-last:border-b-0 group-even:border-secondary/70"
											}>
											{convertToBangla(market.min)} টাকা
										</TableCell>
										<TableCell
											className={
												"group-even:border-t group-last:border-b-0 group-even:border-secondary/70"
											}>
											{convertToBangla(market.max)} টাকা
										</TableCell>
										<TableCell
											className={
												"group-even:border-t group-last:border-b-0 group-even:border-secondary/70 font-semibold"
											}>
											{convertToBangla(Math.round((market.min + market.max) / 2))} টাকা
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</TableContent>
					</TableScrollContainer>
				</Table>
			</div>
		</div>
	);
};

export default ProductPriceDetails;
