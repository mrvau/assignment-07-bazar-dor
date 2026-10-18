import { cacheLife } from "next/cache";

export const date = async () => {
	"use cache";
	cacheLife("days");
	return new Date().toLocaleDateString("bn-BD", {
		dateStyle: "full",
	});
};

export const convertToBangla = (number: string | number) => {
	const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

	return number.toString().replace(/\d/g, (digit) => banglaDigits[Number(digit)]);
};
