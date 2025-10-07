import { useEffect, useState } from "react";
import "./App.css";

type Video = {
	name: string;
	video_url: string;
};
function App() {
	const [data, setData] = useState<Video[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch("https://orangevalleycaa.org/api/videos").then(
				(response) => response.json()
			);
			setData(result);
		};
		fetchData();
	}, []);
	return (
		<>
			<div>
				<header>
					<h1>Videos</h1>
				</header>
				<main>
					{data.map((video) => (
						<div>
							<h2>{video.name}</h2>
							<video height={200} controls src={video.video_url} />
						</div>
					))}
				</main>
			</div>
		</>
	);
}

export default App;
