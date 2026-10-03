import { Suspense } from 'react';
import ProductsClient from './ProductsClient';

export const metadata = {
  title: 'Our Products | Old Spice Agro Fresh LLP - Certified Organic Exports',
  description:
    'Comprehensive catalogue of export-grade certified organic vegetables, fresh fruits, greenhouse exotics, and leafy greens from Otur, Maharashtra.',
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-24 text-center">Loading products...</div>}>
      <ProductsClient />
    </Suspense>
  );
}
