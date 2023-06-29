import { Category, NewArrivals, SliderBanner, SliderFlash, TopPick, Combine } from '@/components';
import getWines from '../api/products';

export default async function Home() {
  return (
    <main>
      <SliderBanner />
      <SliderFlash />
      <Category />
      <NewArrivals />
      <TopPick />
      <Combine />
    </main>
  );
}
