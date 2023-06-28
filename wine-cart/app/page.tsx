import { CustomFilter, Hero, SearchBar, ShowMore, WineCard } from "@/components"
import getWines from "./api/products"
import { vintages, wine_type } from "@/constants";

export default async function Home({ searchParams } : any) {

  const allWines = await getWines({
    producer: searchParams.producer ||'',
    country: searchParams.country || '',
    vintage: searchParams.vintage || '',
    wine_type: searchParams.wine_type || '',
    limit: searchParams.limit || 10,
  });

  const isDataEmpty = !Array.isArray(allWines) || allWines.length < 1 || !allWines;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Wine Catalogue</h1>
          <p>Explore your desired wines</p>
        </div>
        
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="vintage" options={vintages} />
            <CustomFilter title="wine_type" options={wine_type} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__wines-wrapper">
              {allWines?.map((wine) => <WineCard wine={wine}/>)}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allWines.length}
            />
          </section>
        ): (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">What have we here? NOTHING!!!</h2>
          </div>
        )}

      </div>
    </main>
  )
}