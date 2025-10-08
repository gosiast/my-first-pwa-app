import "./App.css";
import video from "./videos/sculpture.mp4";

function App() {
	return (
		<>
			<div>
				<header>
					<h1>Art Videos</h1>
				</header>
				<main>
					<div>
						{" "}
						<video src={video} controls height={200} />
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
