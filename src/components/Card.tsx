import { Card } from '../interfaces';

type CardProps = {
  card: Card;
};

export default function PersonComponent({ card }: CardProps) {
  return <li>card</li>;
}
