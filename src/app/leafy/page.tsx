import { redirect } from 'next/navigation';

export default function LeafyRedirect() {
  redirect('/products?category=leafy');
}
