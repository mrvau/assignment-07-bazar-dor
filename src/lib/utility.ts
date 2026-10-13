import { cacheLife } from "next/cache";

export const date = async () => {
	"use cache";
	cacheLife("days");
	return new Date().toLocaleDateString("bn-BD", {
		dateStyle: "full",
	});
};
