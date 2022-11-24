import { MdSearch } from 'react-icons/md';

export default function ProductFilter({ filterName, onFilterTextChange }: { filterName: string; onFilterTextChange: (value: string) => void }) {
	return (
		<div className='flex flex-col items-center justify-center p-3 gap-6'>
			<h1 className='text-white text-3xl'>Product List</h1>
			<form className='flex items-center gap-2'>
				<MdSearch className='text-white text-3xl' />
				<input type='text' placeholder='Search..' name='search' value={filterName} onChange={(e) => onFilterTextChange(e.target.value)} />
			</form>
		</div>
	);
}
