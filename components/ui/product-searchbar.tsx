import { MdSearch } from 'react-icons/md';

export default function ProductSearchBar() {
	return (
		<form className='flex items-center gap-2'>
			<input type='text' placeholder='Search..' name='search' />
		</form>
	);
}
