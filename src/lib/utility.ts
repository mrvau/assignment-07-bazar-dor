export const convertToBangla = (number: string | number) => {
	const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

	return number.toString().replace(/\d/g, (digit) => banglaDigits[Number(digit)]);
};
