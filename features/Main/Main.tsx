import styled from 'styled-components'
import { useState } from 'react'

const Main = () => {
	const [opened, setOpened] = useState(true)

	return (
		<>
			{/* <StyledButton onClick={() => setOpened((prev) => !prev)}>
				Toggle
			</StyledButton>
			<MainContainer>
				<Left style={{ width: opened ? '70%' : '100%' }}>
					<Title>Conditionally render dropdown menu using APIs</Title>
				</Left>
				<Right style={{ right: opened ? '0px' : '-30%' }}></Right>
			</MainContainer> */}
		</>
	)
}

const StyledButton = styled.button`
	display: block;
	position: fixed;
	z-index: 20;
	top: 50px;
	right: 50px;
	padding: 10px;
`

const MainContainer = styled.div`
	display: flex;
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 100vh;
	background-color: green;
`

const Left = styled.div`
	display: block;
	width: 100%;
	height: 400px;
	background-color: yellow;
	transition: 0.5s cubic-bezier(0.25, 0.75, 0.5, 1.25);
`

const Right = styled.div`
	display: block;
	position: absolute;
	right: -30%;
	width: 30%;
	height: 300px;
	background-color: red;
	transition: 0.5s cubic-bezier(0.25, 0.75, 0.5, 1.25);
`

const Title = styled.h1`
	display: block;
	font-size: 3em;
	text-align: center;
`

export default Main
