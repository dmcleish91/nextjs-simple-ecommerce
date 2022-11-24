export const productData: Product[] = [
	{ id: '1', image: 'https://www.foodbev.com/wp-content/gallery/food-releases-march-2019/Hazelnut-Spread-M-and-Ms.jpg', title: 'Hazelnut Spread', price: 5.59 },
	{ id: '2', image: 'https://www.tasteofhome.com/wp-content/uploads/2022/06/oreo-neapolitan-flavor-courtesy-oreo.jpg', title: 'Neapolitan Oreo', price: 6.44 },
	{
		id: '3',
		image: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/fec4b0c2-b741-4066-b77e-fd868bf7776c-43-kit-kat.jpg',
		title: 'KitKat Bar',
		price: 2.33,
	},
	{ id: '4', image: 'https://cdn.trendhunterstatic.com/phpthumbnails/321/321306/321306_1_600.jpeg?auto=webp', title: 'Beat Chips', price: 6.66 },
	{
		id: '5',
		image: 'https://static.wixstatic.com/media/f9d43e_4809a85ad8d74efc9c78049733967435~mv2.jpg/v1/fill/w_476,h_318,al_c,lg_1,q_80,enc_auto/f9d43e_4809a85ad8d74efc9c78049733967435~mv2.jpg',
		title: 'Three Kings',
		price: 1.33,
	},
	{ id: '6', image: 'http://del.h-cdn.co/assets/15/31/2560x1693/gallery-1438266198-copkecokecoke.jpg', title: '2 Liter Coke', price: 2.11 },
];

export type Product = {
	id: string;
	image: string;
	title: string;
	price: number;
};
