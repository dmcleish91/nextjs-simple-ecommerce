import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useContext } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { ShoppingContext } from '../../store/cartContext';
import { Product } from '../../store/data';

export default function ProductItem({ product }: { product: Product }) {
	const shoppingCtx = useContext(ShoppingContext);
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
				<Button size='small' onClick={() => shoppingCtx.addHandler(product)}>
					ADD TO CART
				</Button>
				<Button size='small'>
					<MdFavoriteBorder />
				</Button>
			</CardActions>
		</Card>
	);
}
