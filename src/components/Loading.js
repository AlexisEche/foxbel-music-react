function Loading() {
	return (
		<span className="pb-32">
			<div className="loader bg-red-400 w-32 p-5 rounded-full flex space-x-3">
				<div className="w-5 h-5 bg-white rounded-full animate-bounce" />
				<div className="w-5 h-5 bg-white rounded-full animate-bounce" />
				<div className="w-5 h-5 bg-white rounded-full animate-bounce" />
			</div>
		</span>
	);
}
export default Loading;
