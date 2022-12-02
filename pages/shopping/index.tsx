import { useContext } from 'react';
import { Item, ShoppingContext } from '../../store/cartContext';

export default function ShoppingCart() {
	const shoppingCtx = useContext(ShoppingContext);

	const cartTotal = shoppingCtx.cart.reduce((sum, item) => {
		return sum + item.product.price * item.amount;
	}, 0);

	const list = shoppingCtx.cart.map((item) => (
		<li key={item.product.id}>
			{item.product.title} - {item.amount} - ${(item.product.price * item.amount).toFixed(2)} -{' '}
			<button onClick={() => shoppingCtx.removeHandler(item.product)}>REMOVE</button> <button onClick={() => shoppingCtx.addHandler(item.product)}>ADD</button>{' '}
			<button onClick={() => shoppingCtx.amountHandler(item.product)}>SUBSTRACT</button>
		</li>
	));

	if (list.length === 0) {
		return (
			<div className='flex items-start justify-center h-screen p-3 text-white'>
				<h1 className='text-white text-3xl'>Your cart is empty</h1>
			</div>
		);
	}

	return (
		<div className='flex flex-col items-center justify-start h-screen p-3 gap-6 text-white'>
			<h1 className='text-white text-3xl'>Product List</h1>
			<ul className='list-none'>{list}</ul>
			<h1 className='text-white text-3xl'>Total ${cartTotal.toFixed(2)}</h1>
		</div>
	);
}
