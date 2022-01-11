/* eslint-disable*/
import logo from "./logo.svg";
import "./App.css";
import React, {useState} from "react";

function App() {
	let [글제목, 글제목변경] = useState(["useState1", "useState2", "useState3"]); //state는 웹앱처럼 재렌더링됨. 새로고침없이 스무스

	let [aa, aaa] = useState(0);

	return (
		<div className="App">
			<div className="black-nav">
				<div style={{color: "red"}}>개발 Blog</div>
			</div>
			<button
				onClick={() => {
					글제목변경(["글자가바뀐다1", "useState2", "useState3"]);
				}}
			>
				글제목 바꾸기
			</button>
			<div className="list">
				{/* <h2>{aa}</h2>
				<h2>{bb()}</h2>
         <img src={logo} /> */}
				<h3>
					{글제목[0]}
					<span
						style={{cursor: "pointer"}}
						onClick={() => {
							aaa(aa + 1);
						}}
					>
						👍
					</span>
					{aa}
				</h3>
				<p>테스트p태그1</p>
				<hr />
			</div>
			<div className="list">
				<h3>{글제목[1]}</h3>
				<p>테스트p태그2</p>
				<hr />
			</div>
			<div className="list">
				<h3>{글제목[2]}</h3>
				<p>테스트p태그3</p>
				<hr />
			</div>
		</div>
	);
}

export default App;
