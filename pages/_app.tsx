import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import ShoppingContextProvider from '../store/cartContext';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ShoppingContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ShoppingContextProvider>
	);
}
