function SongInfo({ src, children }) {
	const ComponentToRender = "div";

	return (
		<ComponentToRender
			className="sm:pt-10 sm:pl-8 sm:pb-5 p-4	sm:pr-8 flex z-10 bg-red-400 bg-opacity-25 flex-col justify-between sm:m-0 m-auto"
			style={{
				background: `url(${src})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				width: "642px",
				height: "100%",
				display: "flex",
				justifyContent: "space-between",
				position: "relative",
				boxShadow: "inset 0 0 0 1000px rgba(167, 0, 0, 0.7)",
				opacity: "0.5",
			}}
		>
			{children}
		</ComponentToRender>
	);
}

export default SongInfo;
