import { Product } from '../../store/data';
import ProductItem from './product-item';

export default function ProductList({ productlist, filterName }: { productlist: Product[]; filterName?: string }) {
	const productCards = productlist.map((product) => {
		if (product.title.toLowerCase().indexOf(filterName!.toLowerCase()) === -1) {
			return;
		}
		return <ProductItem product={product} key={product.id} />;
	});
	return <div className='m-auto max-w-7xl flex flex-wrap justify-center gap-12 p-12'>{productCards}</div>;
}
