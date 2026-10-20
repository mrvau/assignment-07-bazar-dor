import { Spinner } from "@heroui/react";

const loading = () => {
	return (
		<div className="flex flex-col items-center mt-10">
			<Spinner color="success" size="xl" />
			<span className="text-secondary/70">Loading...</span>
		</div>
	);
};

export default loading;
