import styled from "styled-components";

export const SidebarContainer = styled.div`
	color: white;
	background-color: var(--slack-color);
	flex: 0.3;
	border-top: 1px solid #49274b;
	max-width: 260px;
	margin-top: 40px;
	overflow-y: scroll;
	-webkit-overflow-scrolling: touch;
	scrollbar-width: none;

	> hr {
		margin: 10px 0;
		border: 1px solid #49274b;
	}

	::-webkit-scrollbar {
  display: none;
}
`;

export const SidebarHeader = styled.div`
	display: flex;
	border-bottom: 1px solid #49274b;
	padding: 13px;

	> .MuiSvgIcon-root {
		padding: 8px;
		color: #49274b;
		font-size: 18px;
		background-color: white;
		border-radius: 999px;
	}
`;

export const SidebarInfo = styled.div`
	flex: 1;

	> h2 {
		font-size: 15px;
		font-weight: 900;
		margin-bottom: 5px;
	}

	> h3 {
		display: flex;
		font-size: 13px;
		font-weight: 400;
		align-items: center;
	}

	> h3 > .MuiSvgIcon-root {
		font-size: 14px;
		margin-top: 1px;
		margin-right: 2px;
		color: green;
	}
`;
