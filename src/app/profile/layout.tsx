import React from "react";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className="space-y-6">
			<div className="text-center md:text-left">
				<h3 className="text-2xl font-bold">আমার প্রোফাইল</h3>
				<p className="text-secondary/70">আপনার প্রোফাইলর তথ্য এখানে দেখুন।</p>
			</div>
			{children}
		</section>
	);
};

export default ProfileLayout;
