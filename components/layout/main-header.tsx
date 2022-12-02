import Link from 'next/link';
import { useContext } from 'react';
import { MdPayment, MdShoppingCart } from 'react-icons/md';
import { ShoppingContext } from '../../store/cartContext';

export default function MainHeader() {
	const shoppingCtx = useContext(ShoppingContext);
	return (
		<header className='flex flex-row justify-between items-center bg-slate-800 text-white h-20 px-12'>
			<Link href={'/'} className='text-3xl flex items-center'>
				<MdPayment />
				NextShop
			</Link>

			<Link href={'/shopping'} className='flex items-center text-3xl'>
				<MdShoppingCart /> <p>{shoppingCtx.cart.length === 0 ? null : shoppingCtx.cart.length}</p>
			</Link>
		</header>
	);
}
