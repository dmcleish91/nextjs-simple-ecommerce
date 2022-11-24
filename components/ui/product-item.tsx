import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Product } from '../../store/data';

export default function ProductItem({ product }: { product: Product }) {
	return (
		<Card sx={{ width: 345 }}>
			<CardMedia component='img' height='140' image={product.image} alt='green iguana' />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{product.title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					${product.price}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>ADD TO CART</Button>
				<Button size='small'>
					<MdFavoriteBorder />
				</Button>
			</CardActions>
		</Card>
	);
}
