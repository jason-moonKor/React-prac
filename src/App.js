/* eslint-disable*/
import logo from "./logo.svg";
import "./App.css";
import React, {useState} from "react";

function App() {
	let [글제목, 글제목변경] = useState(["useState1", "useState2", "useState3"]); //state는 웹앱처럼 재렌더링됨. 새로고침없이 스무스

	let [aa, aaa] = useState(0);

	// function 제목바꾸기() {
	// 	let arr = [...글제목]; //state data 변경하는법
	// 	arr[0] = "arr 로 글제목바꾸기";
	// 	글제목변경(arr);
	// }

	return (
		<div className="App">
			<div className="black-nav">
				<div style={{color: "red"}}>개발 Blog</div>
			</div>
			{/* <button
				// onClick={() => {
				// 	글제목변경(["글자가바뀐다1", "useState2", "useState3"]);
				// }}
				onClick={제목바꾸기}
			>
				글제목 바꾸기 버튼
			</button> */}
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

			<Modal />
		</div>
	);
}

function Modal() {
	return (
		<div className="modal">
			<h2>제목</h2>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	);
}

export default App;
