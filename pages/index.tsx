import { useState } from 'react';
import ProductFilter from '../components/ui/product-filter';
import ProductList from '../components/ui/product-list';
import { productData } from '../store/data';

export default function Home() {
	const [filterName, setFilterName] = useState('');
	const data = productData;

	return (
		<div>
			<ProductFilter filterName={filterName} onFilterTextChange={setFilterName} />
			<ProductList productlist={data} filterName={filterName} />
		</div>
	);
}
