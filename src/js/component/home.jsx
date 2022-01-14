import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//hooks
	//let [color, setColor] = useState("red");
	const [selectedColor, setSelectedColor] = useState("red");

	//logic

	/*const colors = ["red", "yellow", "green"];
	const redChangeColor = () => {
		setColor(colors[0]);
	};
	const yellowChangeColor = () => {
		setColor(colors[1]);
	};
	const greenChangeColor = () => {
		setColor(colors[2]);
	};*/

	return (
		<Container>
			<Row>
				<Col xs={4}></Col>
				<Col>
					<row>
						<button
							onClick={() => setSelectedColor("red")}
							className={
								"button" +
								(selectedColor === "red" ? " redbutton" : "")
							}></button>
					</row>
					<row>
						<button
							onClick={() => setSelectedColor("yellow")}
							className={
								"button" +
								(selectedColor === "yellow"
									? " yellowbutton"
									: "")
							}></button>
					</row>
					<row>
						<button
							onClick={() => setSelectedColor("green")}
							className={
								"button" +
								(selectedColor === "green"
									? " greenbutton"
									: "")
							}></button>
					</row>
				</Col>
				<Col xs={4}></Col>
			</Row>
		</Container>
	);
};

export default Home;
