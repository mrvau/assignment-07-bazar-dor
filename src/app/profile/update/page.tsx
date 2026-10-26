"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Form, Input, Label, TextField, toast } from "@heroui/react";
import { FormEvent } from "react";

const UpdatePage = () => {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData.entries());

		const { data: resData, error } = await authClient.updateUser({
			name: data.name as string,
		});

		if (resData?.status) toast.success("তথ্য আপডেট করা হয়েছে।");
		else toast.warning("তথ্য আপডেট করা হয়নি।");

		if (error) toast.danger("তথ্য আপডেট করার সময় একটি সমস্যা হয়েছে!");
	};
	return (
		<div className="space-y-4 bg-white px-4 py-6 rounded-lg">
			<h5 className="text-xl font-bold">তথ্য</h5>
			<Form className="space-y-2 px-6" onSubmit={handleSubmit}>
				<TextField name="name" type="text">
					<Label>নাম</Label>
					<Input className={"border border-secondary/10"} />
				</TextField>
				<Button fullWidth className={"bg-primary rounded-lg"} type="submit">
					আপডেট
				</Button>
			</Form>
		</div>
	);
};

export default UpdatePage;
