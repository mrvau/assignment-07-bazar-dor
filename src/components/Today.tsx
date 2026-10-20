import { cacheLife } from "next/cache";

const Today = async () => {
	"use cache";
	cacheLife("days");
	const date = new Date().toLocaleDateString("bn-BD", {
		dateStyle: "full",
	});

	return <>{date}</>;
};

export default Today;
