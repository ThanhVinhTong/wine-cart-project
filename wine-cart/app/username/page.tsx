import { Category, NewArrivals, SliderBanner, SliderFlash, TopPick, Combine } from '@/components';

export default function Home() {
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
