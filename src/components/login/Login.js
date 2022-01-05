import { Button } from "@mui/material";
import React from "react";
import { LoginContainer, LoginInnerContainer } from "./Login.styled";
import image from "../../slack-new-logo.jpg";
import { auth, provider } from "../../firebase";

export const Login = () => {
	const signIn = (e) => {
		e.preventDefault();

		auth.signInWithPopup(provider).catch((error) => alert(error.message));
	};

	return (
		<LoginContainer>
			<LoginInnerContainer>
				<img src={image} alt="" />
				<h1>Sign in to Slack</h1>
				<p>yoms.slack.com</p>

				<Button onClick={signIn}>Sign in with Google</Button>
			</LoginInnerContainer>
		</LoginContainer>
	);
};
