import ProductFilter from '../components/ui/product-filter';
import ProductList from '../components/ui/product-list';
import { productData } from '../store/data';

export default function Home() {
	const data = productData;
	return (
		<div>
			<ProductFilter />
			<ProductList productlist={data} />
		</div>
	);
}
