import React from "react";
import { SidebarContainer, SidebarHeader, SidebarInfo } from "./Sidebar.styled";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import { SidebarOption } from "./SidebarOption";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Sidebar = () => {
	const [channels] = useCollection(db.collection("rooms"));
	const [user] = useAuthState(auth);

	return (
		<SidebarContainer>
			<SidebarHeader>
				<SidebarInfo>
					<h2>Yomi HQ</h2>
					<h3>
						<FiberManualRecordIcon />
						{user.displayName}
					</h3>
				</SidebarInfo>
				<CreateIcon />
			</SidebarHeader>

			<SidebarOption Icon={InsertCommentIcon} title="Threads" />
			<SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
			<SidebarOption Icon={DraftsIcon} title="Saved items" />
			<SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
			<SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
			<SidebarOption Icon={AppsIcon} title="Apps" />
			<SidebarOption Icon={FileCopyIcon} title="File browser" />
			<SidebarOption Icon={ExpandLessIcon} title="Show less" />
			<hr />
			<SidebarOption Icon={ExpandMoreIcon} title="Channels" />
			<hr />
			<SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

			{channels?.docs.map((doc) => (
				<SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
			))}
		</SidebarContainer>
	);
};
