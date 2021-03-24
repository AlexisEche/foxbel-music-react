function PrimaryButton({ children }) {
	return (
		<button className="w-28	bg-red-600 h-8 rounded-2xl text-white text-sm focus:outline-none hover:bg-red-700">
			{children}
		</button>
	);
}

function SecondaryButton({ children }) {
	return (
		<button className="w-28	bg-none h-8 rounded-2xl text-red-600 text-sm border-2 border-red-600 focus:outline-none hover:text-white hover:bg-red-600">
			{children}
		</button>
	);
}

export { PrimaryButton, SecondaryButton };
