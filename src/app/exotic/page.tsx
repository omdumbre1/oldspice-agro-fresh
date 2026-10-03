import { redirect } from 'next/navigation';

export default function ExoticRedirect() {
  redirect('/products?category=exotic');
}
