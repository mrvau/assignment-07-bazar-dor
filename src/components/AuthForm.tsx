"use client";

import { authClient } from "@/lib/auth-client";
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	FieldError,
	Form,
	Input,
	Label,
	TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { FormEvent, useState } from "react";

interface AuthFormProps {
	authType?: "sign-in" | "sign-up";
}

const AuthForm = ({ authType = "sign-up" }: AuthFormProps) => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData.entries());

		const { data: resData, error } = await authClient.signUp.email({
			email: data.email as string,
			name: data.name as string,
			password: data.password as string,
			callbackURL: "/",
		});

		console.log(resData, error);
	};

	const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData.entries());

		const { data: resData, error } = await authClient.signIn.email({
			email: data.email as string,
			password: data.password as string,
			callbackURL: "/",
		});

		console.log(resData, error);
	};

	const handleGitHubAuthentication = async () => {
		const data = await authClient.signIn.social({
			provider: "github",
		});

		console.log(data);
	};

	const handleGoogleAuthentication = async () => {
		const data = await authClient.signIn.social({
			provider: "google",
		});

		console.log(data);
	};

	return (
		<Card className="bg-white px-4 py-6 rounded-lg w-full md:w-fit gap-4">
			<CardHeader className="text-center space-y-4">
				<CardTitle className="text-3xl text-secondary font-bold">
					{authType === "sign-up" ? "অ্যাকাউন্ট তৈরি করুন" : "সাইন ইন করুন"}
				</CardTitle>
				<CardDescription className="text-secondary">
					{authType === "sign-up"
						? "বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।"
						: "বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।"}
				</CardDescription>
			</CardHeader>
			<Form
				className="flex flex-col gap-4"
				onSubmit={authType === "sign-up" ? handleSignUp : handleSignIn}>
				<CardContent>
					{authType === "sign-up" && (
						<TextField isRequired name="name" type="text">
							<Label>নাম</Label>
							<Input placeholder="যেমন: রহিম উদ্দিন" />
						</TextField>
					)}

					<TextField
						isRequired
						name="email"
						type="email"
						validate={(value) => {
							if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
								return "অনুগ্রহ করে একটি সঠিক ইমেইল দিন";
							}
							return null;
						}}>
						<Label>ইমেইল</Label>
						<Input placeholder="john@example.com" />
						<FieldError />
					</TextField>

					<TextField
						isRequired
						minLength={8}
						name="password"
						type="password"
						value={password}
						onChange={setPassword}
						validate={(value) => {
							if (value.length < 8) {
								return "পাসওয়ার্ডটি অবশ্যই ৮ অক্ষরের হতে হবে";
							}
							return null;
						}}>
						<Label>পাসওয়ার্ড</Label>
						<Input placeholder="কমপক্ষে ৮ অক্ষর" />
						<FieldError />
					</TextField>

					{authType === "sign-up" && (
						<TextField
							isRequired
							minLength={8}
							name="confirmPassword"
							type="password"
							value={confirmPassword}
							onChange={setConfirmPassword}
							validate={(value) => {
								if (value.length < 8 || value !== password) {
									return "পাসওয়ার্ড ভুল, উপরের পাসওয়ার্ডটির সাথে মিলিয়ে দেখুন";
								}
								return null;
							}}>
							<Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
							<Input placeholder="আবার লিখুন" />
							<FieldError />
						</TextField>
					)}
				</CardContent>
				<CardFooter className="flex flex-col w-full">
					<Button type="submit" className={"w-full bg-primary text-white font-semibold"}>
						{authType === "sign-up" ? "অ্যাকাউন্ট তৈরি করুন" : "সাইন ইন"}
					</Button>
					<div className="flex items-center justify-between mt-4 w-full">
						<div className="border border-secondary/60 flex-1" />
						<span className="px-4 text-secondary/60">অথবা</span>
						<div className="border border-secondary/60 flex-1" />
					</div>
					<div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-4 w-full">
						<Button className="w-full" variant="tertiary" onClick={handleGoogleAuthentication}>
							<Icon icon="devicon:google" />
							Google দিয়ে চালিয়ে যান
						</Button>
						<Button className="w-full" variant="tertiary" onClick={handleGitHubAuthentication}>
							<Icon icon="mdi:github" />
							GitHub দিয়ে চালিয়ে যান
						</Button>
					</div>
					<div className="text-center mt-4">
						{authType === "sign-up" ? (
							<>
								অ্যাকাউন্ট আছে?{" "}
								<Link href={"/sign-in"} className="text-primary/70">
									সাইন ইন করুন
								</Link>
							</>
						) : (
							<>
								অ্যাকাউন্ট নেই?{" "}
								<Link href={"/sign-up"} className="text-primary/70">
									সাইন আপ করুন
								</Link>
							</>
						)}
					</div>
				</CardFooter>
			</Form>
		</Card>
	);
};

export default AuthForm;
