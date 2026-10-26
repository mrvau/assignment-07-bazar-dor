"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Form, Input, Label, TextField } from "@heroui/react";
import { FormEvent } from "react";

const UpdatePage = () => {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData.entries());

		const response = await authClient.updateUser({
			name: data.name as string,
		});

		console.log(response);
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
