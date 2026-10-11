"use client";

import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

const SignUpPage = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSignUp = async () => {};

	return (
		<div className="bg-white px-4 py-6 rounded-lg">
			<div className="text-center space-y-2">
				<h2 className="text-3xl text-secondary font-bold">অ্যাকাউন্ট তৈরি করুন</h2>
				<p>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
			</div>
			<Form className="flex flex-col gap-4" onSubmit={handleSignUp}>
				<TextField isRequired name="name" type="text">
					<Label>নাম</Label>
					<Input placeholder="যেমন: রহিম উদ্দিন" />
				</TextField>

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

				<div>
					<div>
						<Button type="submit" className={"w-full bg-primary text-white font-semibold"}>
							অ্যাকাউন্ট তৈরি করুন
						</Button>
					</div>
					<div>
						<div className="border border-secondary/40" />
						<span>অথবা</span>
						<div className="border border-secondary/40" />
					</div>
					<div>
						<Button className="w-full" variant="tertiary">
							<Icon icon="devicon:google" />
							Google দিয়ে চালিয়ে যান
						</Button>
						<Button className="w-full" variant="tertiary">
							<Icon icon="mdi:github" />
							GitHub দিয়ে চালিয়ে যান
						</Button>
					</div>
					<div>
						অ্যাকাউন্ট আছে?{" "}
						<Link href={"/sign-in"} className="text-primary/70">
							সাইন ইন করুন
						</Link>
					</div>
				</div>
			</Form>
		</div>
	);
};

export default SignUpPage;
