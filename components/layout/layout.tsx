import { Fragment, ReactNode } from 'react';
import MainHeader from './main-header';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<Fragment>
			<MainHeader />
			<main>{children}</main>
		</Fragment>
	);
}
