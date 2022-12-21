import styled from 'styled-components'
import { COLORS } from '../../utils/constants'

const PhoneMenu = ({ opened }: { opened: boolean }) => {
	return (
		<Container>
			<MainMenu style={{ left: opened ? '0px' : '-20%' }}>Main</MainMenu>
			<ProductsMenu style={{ left: opened ? '100%' : '0px' }}>
				Products
			</ProductsMenu>
		</Container>
	)
}

const Container = styled.div`
	display: block;
	position: fixed;
	z-index: 1;
	right: 0;
	top: 0;
	width: 250px;
	height: 100%;
	background-color: blue;
	overflow: hidden;
`

const Menu = styled.div`
	top: 0;
	display: block;
	position: absolute;
	transition: 1s cubic-bezier(0.215, 0.61, 0.355, 1) left;
	border: 10px solid purple;
	background-color: blue;
`

const MainMenu = styled(Menu)`
	z-index: 2;
	left: 0;
	width: 100%;
	height: 100%;
`

const ProductsMenu = styled(Menu)`
	display: block;
	position: absolute;
	z-index: 2;
	left: 100%;
	width: 100%;
	height: 100%;
`

export default PhoneMenu
