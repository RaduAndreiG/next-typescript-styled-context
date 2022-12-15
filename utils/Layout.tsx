import React, { ReactNode } from 'react'
import Footer from '../features/Footer/Footer'
import Header from '../features/Header/Header'
import Hamburger from '../features/Menu/Hamburger'

interface Props {
	children: ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<>
			{/* <Header></Header> */}
			<Hamburger />
			{children}
			{/* <Footer></Footer> */}
		</>
	)
}

export default Layout
