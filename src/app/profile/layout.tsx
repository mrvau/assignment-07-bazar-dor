import { Spinner } from "@heroui/react";
import React, { Suspense } from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section>
			<div>
				<h3>আমার প্রোফাইল</h3>
				<p>আপনার প্রোফাইলর তথ্য এখানে দেখুন।</p>
			</div>
			<Suspense
				fallback={
					<div className="flex items-center justify-center">
						<Spinner color="success" />
					</div>
				}>
				<div>{children}</div>
			</Suspense>
		</section>
	);
};

export default ProfileLayout;
