import ProductSearchBar from './product-searchbar';

export default function ProductFilter() {
	return (
		<div className='flex flex-col items-center justify-center p-3 gap-6'>
			<h1 className='text-white text-3xl'>Product List</h1>
			<ProductSearchBar />
		</div>
	);
}
