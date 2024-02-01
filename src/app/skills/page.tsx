"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SkillChart from "@/components/ui/SkillChart";

const logoIcons = [
	{ src: "/Logos/html.png", alt: "html", percentage: 90 },
	{ src: "/Logos/css.svg", alt: "css", percentage: 80 },
	{ src: "/Logos/js.png", alt: "javascript", percentage: 60 },
	{ src: "/Logos/bootstrap.png", alt: "bootstrap", percentage: 40 },
	{ src: "/Logos/tailwind.svg", alt: "tailwind", percentage: 70 },
	{ src: "/Logos/react.svg", alt: "react js", percentage: 60 },
	{ src: "/Logos/next.svg", alt: "next js", percentage: 50 },
	{ src: "/Logos/framer.svg", alt: "framer motion", percentage: 40 },
	{ src: "/Logos/figma.svg", alt: "figma", percentage: 80 },
];

export default function Skills() {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isAnimated, setIsAnimated] = useState(false);
	const handleFlip = () => {
		if (!isAnimated) {
			setIsFlipped(!isFlipped);
			setIsAnimated(true);
		}
	};
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="container flex flex-col items-center gap-14">
				<div className="space-y-6">
					<h1 className="text-4xl md:text-5xl font-bold uppercase">
						skills{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-tr from-accentColor to-white">
							&
						</span>{" "}
						technologies
					</h1>
					<p className="w-full md:w-8/12 mx-auto text-center text-textColor">
						A Closer Look at My Skill Set and Mastery in Leading-edge
						Technologies.
					</p>
				</div>
				<div className="w-full md:w-8/12 lg:w-6/12 mx-auto flex flex-wrap justify-center gap-6 lg:gap-10">
					{logoIcons.map((logo, index) => (
						<div
							key={index}
							onClick={handleFlip}
							className="flip-icon w-20 h-20 cursor-pointer"
						>
							<AnimatePresence>
								<motion.div
									initial={false}
									whileHover={{ rotateY: isFlipped ? 180 : 360 }}
									transition={{
										duration: 0.5,
										animationDirection: "normal",
									}}
									onAnimationComplete={() => setIsAnimated(false)}
									className="flip-icon-inner w-full h-full"
								>
									<div className="flip-icon-front w-full h-full grid place-items-center p-4 rounded-xl bg-bgColor shadow-lg shadow-textColor/80">
										<Image
											src={logo.src}
											alt={logo.alt}
											width={50}
											height={50}
										/>
									</div>
									<div className="flip-icon-back text-white w-full h-full grid place-items-center p-4 rounded-xl bg-bgColor shadow-lg shadow-textColor/80">
										<SkillChart percentage={logo.percentage} />
									</div>
								</motion.div>
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
