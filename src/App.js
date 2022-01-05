import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { Chat } from "./components/chat/Chat";
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { Login } from "./components/login/Login";
import image from "./slack-new-logo.jpg";
import Spinner from "react-spinkit";

function App() {
	const [user, loading] = useAuthState(auth);

	if (loading) {
		return (
			<AppLoading>
				<AppLoadingContents>
					<img src={image} alt="" />
					<Spinner name="ball-spin-fade-loader" color="green" fadeIn="none" />
				</AppLoadingContents>
			</AppLoading>
		);
	}

	return (
		<div className="app">
			<Router>
				{!user ? (
					<Login />
				) : (
					<>
						<Header />
						<AppBody>
							<Sidebar />
							<Routes>
								<Route path="/" exact element={<Chat />} />
							</Routes>
						</AppBody>
					</>
				)}
			</Router>
		</div>
	);
}

export default App;

const AppBody = styled.div`
	display: flex;
	height: 100vh;
`;

const AppLoading = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	width: 100%;
`;

const AppLoadingContents = styled.div`
	text-align: center;
	padding-bottom: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	> img {
		object-fit: center;
		height: 100px;
		padding: 20px;
		margin-bottom: 40px;
	}
`;
