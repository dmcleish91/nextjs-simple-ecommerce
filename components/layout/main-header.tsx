import Link from 'next/link';
import { MdPayment, MdShoppingCart } from 'react-icons/md';

export default function MainHeader() {
	return (
		<header className='flex flex-row justify-between items-center bg-slate-800 text-white h-20 px-12'>
			<Link href={'/'} className='text-3xl flex items-center'>
				<MdPayment />
				NextShop
			</Link>

			<ul>
				<Link href={'/'} className='text-3xl'>
					<MdShoppingCart />
				</Link>
			</ul>
		</header>
	);
}
