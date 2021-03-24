import { useContext } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "../../assets/styles/range.css";
import { DataContext } from "../../context/Context";

function Range() {
	const { volume, setVolume } = useContext(DataContext);

	return (
		<div className="w-24">
			<InputRange
				maxValue={100}
				minValue={0}
				value={volume}
				onChange={(value) => setVolume(value)}
				formatLabel={(value) => ` `}
			/>
		</div>
	);
}

export default Range;
