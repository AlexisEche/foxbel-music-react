import Icon from "./Icons";
import Range from "./Range";
import SongCover from "./SongCover";
import imgDefault from "../../assets/images/default.png";

function FooterNoData() {
	return (
		<div className="w-full m-auto h-24 bg-red-500 flex box-border box-content fixed bottom-0 left-0">
			<span className="sm:block hidden">
				<SongCover src={imgDefault} width="100px" height="100px" />
			</span>
			<div className="flex justify-between w-11/12 items-center pt-6 pr-8 pb-4 pl-5">
				<div className="space-y-2">
					<p className="text-white text-sm">Song</p>
					<p className="text-white text-xs	">Artist - Album</p>
				</div>
				<div className="flex items-center space-x-5">
					<Icon type="previous" color="white" size="36px"></Icon>
					<Icon type="circlePlay" color="#F7A4A5" size="60px"></Icon>
					<Icon type="next" color="white" size="36px"></Icon>
				</div>
				<div className="flex items-center w-36 justify-between">
					<Range />
					<Icon type="volume" color="white" size="36px"></Icon>
				</div>
			</div>
		</div>
	);
}

export default FooterNoData;
