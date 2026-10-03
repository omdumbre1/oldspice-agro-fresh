import { redirect } from 'next/navigation';

export default function VegetablesRedirect() {
  redirect('/products?category=vegetables');
}
