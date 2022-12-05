import styled from 'styled-components'
import { COLORS, FONT } from './constants'

export const Container = styled.div`
	display: block;
	position: relative;
	width: 1200px;
	margin: 0 auto;

	@media only screen and (max-width: 1220px) {
		width: 90%;
	}
`

export const Main = styled.main`
	display: block;
	min-height: 100vh;

	@media only screen and (max-width: 600px) {
		padding-top: 30px;
	}
`

export const Bold = styled.span`
	font-weight: ${FONT.weight.bold};
`
