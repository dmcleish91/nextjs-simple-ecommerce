import { ReactNode } from 'react';

const Apple = () => <span>🍎🍏</span>;
const Kiwi = () => <span>🥝</span>;
const Cherry = () => <span>🍒</span>;
const Grape = () => <span>🍇</span>;

type Fruit = 'apple' | 'kiwi' | 'cherry' | 'grape';

export default function ConditionalFruitFacts({ fruit }: { fruit: Fruit }) {
	const fact: Record<Fruit, string> = {
		apple: 'Apples ripen up to 10 times faster at room temperature than if they are refrigerated.',
		kiwi: 'Kiwi fruits contain about as much potassium as Bananas and a high amount of Vitamin C, more than Oranges.',
		cherry: 'Cherries are rich in vitamin A, B and C, mineral salts and dietary minerals (zinc, copper, manganese, cobalt).',
		grape: 'Grapes come in many colors, including green, red, black, yellow, pink, and purple. "White" grapes are actually green.',
	};

	const icon: Record<Fruit, ReactNode> = {
		apple: <Apple />,
		kiwi: <Kiwi />,
		cherry: <Cherry />,
		grape: <Grape />,
	};

	return (
		<div className='inline-block'>
			<span className='flex flex-col text-center'>
				{icon[fruit]}
				{fact[fruit]}
			</span>
		</div>
	);
}
