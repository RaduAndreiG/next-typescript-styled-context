import type { AppProps } from 'next/app'
import Layout from '../utils/Layout'
import { GlobalStyle } from '../utils/GlobalStyle'
import { ContextProvider } from '../utils/todosProvider'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ContextProvider>
				<Layout>
					<GlobalStyle />
					<Component {...pageProps} />
				</Layout>
			</ContextProvider>
		</>
	)
}

export default MyApp
