import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
	HeaderContainer,
	HeaderLeft,
	HeaderAvatar,
	HeaderSearch,
	HeaderRight,
} from "./Header.styled";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

export const Header = () => {
	const [user] = useAuthState(auth);

	console.log(user.photoURL);

	return (
		<HeaderContainer>
			<HeaderLeft>
				<HeaderAvatar
					onClick={() => auth.signOut()}
					alt={user?.displayName}
					src={user?.photoURL}
				/>
				<AccessTimeIcon />
			</HeaderLeft>

			<HeaderSearch>
				<SearchIcon />
				<input placeholder="Search Yoms" />
			</HeaderSearch>

			<HeaderRight>
				<HelpOutlineIcon />
			</HeaderRight>
		</HeaderContainer>
	);
};
