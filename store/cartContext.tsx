import { createContext, ReactNode, useState } from 'react';
import { Product } from './data';

export const ShoppingContext = createContext({} as ShoppingContext);

export function ShoppingContextProvider(props: { children: ReactNode }) {
	const [shoppingCart, updateShoppingCart] = useState<Item[]>([]);

	function addItemToCart(product: Product) {
		const itemToAdd: Item = { product: product, amount: 1 };
		const cartIndex = checkCart(product);

		if (cartIndex !== -1) {
			let tempCart = shoppingCart;
			tempCart[cartIndex].amount++;
			updateShoppingCart([...tempCart]);
		} else {
			updateShoppingCart([...shoppingCart, itemToAdd]);
		}
	}

	function decreaseCartAmount(product: Product) {
		const cartIndex = checkCart(product);
		if (cartIndex === -1) return;

		let temporaryCart = shoppingCart;
		if (temporaryCart[cartIndex].amount === 0) return;
		temporaryCart[cartIndex].amount--;

		updateShoppingCart([...temporaryCart]);
	}

	function removeItemFromCart(product: Product) {
		const filterToRemove = shoppingCart.filter((item) => {
			if (item.product.id !== product.id) return item;
		});
		updateShoppingCart(filterToRemove);
	}

	function checkCart(product: Product) {
		return shoppingCart.findIndex((item) => {
			return item.product.id === product.id;
		});
	}

	const context: ShoppingContext = {
		cart: shoppingCart,
		addHandler: addItemToCart,
		amountHandler: decreaseCartAmount,
		removeHandler: removeItemFromCart,
	};

	return <ShoppingContext.Provider value={context}>{props.children}</ShoppingContext.Provider>;
}

export default ShoppingContextProvider;

type ShoppingContext = {
	cart: Item[];
	addHandler: (product: Product) => void;
	amountHandler: (product: Product) => void;
	removeHandler: (product: Product) => void;
};

export type Item = { product: Product; amount: number };
