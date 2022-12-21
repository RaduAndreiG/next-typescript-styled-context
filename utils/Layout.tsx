import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'
import Footer from '../features/Footer/Footer'
import Header from '../features/Header/Header'
import Hamburger from '../features/Menu/Hamburger'
import PhoneMenu from '../features/PhoneMenu/PhoneMenu'

interface Props {
	children: ReactNode
}

const Layout = ({ children }: Props) => {
	const [opened, setOpened] = useState(true)

	return (
		<>
			{/* <Header></Header> */}
			{/* <Hamburger /> */}
			<PhoneMenu opened={opened} />
			<Toggle onClick={() => setOpened((prev) => !prev)}>Toggle</Toggle>
			{children}
			{/* <Footer></Footer> */}
		</>
	)
}

const Toggle = styled.button`
	display: block;
`

export default Layout
