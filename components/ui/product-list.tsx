import { Product } from '../../store/data';
import ProductItem from './product-item';

export default function ProductList({ productlist }: { productlist: Product[] }) {
	const productCards = productlist.map((product) => {
		return <ProductItem product={product} key={product.id} />;
	});
	return <div className='m-auto max-w-7xl flex flex-wrap justify-center gap-12 p-12'>{productCards}</div>;
}
