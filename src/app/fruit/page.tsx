import { redirect } from 'next/navigation';

export default function FruitRedirect() {
  redirect('/products?category=fruit');
}
