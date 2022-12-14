import React, { ReactNode } from 'react'
import Footer from '../features/Footer/Footer'
import Header from '../features/Header/Header'

interface Props {
	children: ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<>
			{/* <Header></Header> */}
			{children}
			{/* <Footer></Footer> */}
		</>
	)
}

export default Layout
