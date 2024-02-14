"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import ContactIcons from "@/components/ui/ContactIcons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inputStyle =
	"text-sm lg:text-base p-2 lg:px-4 lg:py-2 col-span-2 rounded-md bg-bgColor/80 backdrop-blur-md shadow-md shadow-textColor/40 dark:shadow-accentColor/80";

export default function Contact() {
	const nameRef = useRef();
	const phoneRef = useRef();
	const emailRef = useRef();
	const subjectRef = useRef();
	const messageRef = useRef();

	const submitHandler = async (e: any) => {
		const notify = (msg: string) => toast(msg);
		const userData = {
			name: nameRef.current.value,
			phone: phoneRef.current.value,
			email: emailRef.current.value,
			subject: subjectRef.current.value,
			message: messageRef.current.value,
		};
		e.preventDefault();
		console.log(nameRef.current.value);

		try {
			const data = await axios.post(
				"http://localhost:4000/contact",
				userData
			);

			notify(data.data.message);

			console.log(data.data);
			nameRef.current.value = "";
			phoneRef.current.value = "";
			emailRef.current.value = "";
			subjectRef.current.value = "";
			messageRef.current.value = "";
		} catch (error) {
			console.error("Something Wrong", error);
		}
	};
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="w-full h-screen flex items-center justify-center"
		>
			<ToastContainer />
			<div className="container mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20">
				<div className="space-y-3 lg:space-y-8">
					<h2 className="text-3xl lg:text-5xl font-extrabold leading-9 tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-textColor dark:from-accentColor dark:to-bgColor to-accentColor duration-300">
						I&apos;m avaliable for freelance <br /> or fulltime positions.{" "}
						<br />
						Contact me and let&apos;s talk.
					</h2>
					<ContactIcons />
				</div>
				<form
					onSubmit={submitHandler}
					className="grid grid-cols-2 gap-2 lg:gap-4"
				>
					<input
						placeholder="Name"
						required
						ref={nameRef}
						className="col-span-1 text-sm lg:text-base p-2 lg:px-4 lg:py-2 rounded-md bg-bgColor/80 backdrop-blur-md shadow-md shadow-textColor/40 dark:shadow-accentColor/80"
					/>
					<input
						placeholder="Phone"
						type="number"
						required
						ref={phoneRef}
						className="col-span-1 text-sm lg:text-base p-2 lg:px-4 lg:py-2 rounded-md bg-bgColor/80 backdrop-blur-md shadow-md shadow-textColor/40 dark:shadow-accentColor/80"
					/>
					<input
						placeholder="Email"
						type="email"
						required
						ref={emailRef}
						className={inputStyle}
					/>

					<input
						placeholder="Subject"
						required
						ref={subjectRef}
						className={inputStyle}
					/>
					<textarea
						rows={4}
						placeholder="Message"
						required
						ref={messageRef}
						className={inputStyle}
					/>
					<div className="w-full col-start-2 flex justify-end">
						<Button>
							<button type="submit" className="text-white">
								Send Message
							</button>
						</Button>
					</div>
				</form>
			</div>
		</motion.div>
	);
}
