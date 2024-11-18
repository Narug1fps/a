"use client";

import { motion } from "framer-motion";

export default function Template({ children }) {
	return (
		<motion.div
		initial={{ y: -200, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
		transition={{ ease: "easeInOut", duration: 1 }}
		>
			{children}
		</motion.div>
	);
}
