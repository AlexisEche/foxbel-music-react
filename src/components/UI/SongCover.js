function SongCover({ src, minWidth, height, width, children }) {
	const ComponentToRender = "div";
  
	return (
		<ComponentToRender
			style={{
				background: `url(${src})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				minWidth: `${minWidth ? "100%" : "auto"}`,
				width: `${width}`,
				height: `${height}`,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				objectFit: "cover !important",
			}}
		>
			{children}
		</ComponentToRender>
	);
}

export default SongCover;
