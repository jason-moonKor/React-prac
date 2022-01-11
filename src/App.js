import logo from "./logo.svg";
import "./App.css";

function App() {
	let aa = "테스트 변수";

	function bb() {
		return 200;
	}

	return (
		<div className="App">
			<div className="black-nav">
				<div style={{color: "red"}}>개발 Blog</div>
			</div>
			<div>
				<h2>{aa}</h2>
				<h2>{bb()}</h2>
				<img src={logo} />
			</div>
		</div>
	);
}

export default App;
