// comp
import {
  Banner,
  Footer,
  Header,
  HeadTitle,
  LargeCard,
  MediumCard,
  SmallCard,
} from "@/components";

type Props = {
  exploreData: IExploreData[];
  cardsData: ICardsData[];
};

export default function Home({ exploreData, cardsData }: Props) {
  return (
    <div>
      <HeadTitle title="Next Airbnb | Home" />

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item: IExploreData) => (
              <SmallCard key={item.location} {...item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((item: ICardsData) => (
              <MediumCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Whishlists curated by Airbnb"
          buttonText="Get Inspired"
        />

        <Footer />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G")
    .then((res) => res.json())
    .catch((err: any) => {
      alert(err.message);
    });

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT")
    .then((res) => res.json())
    .catch((err: any) => {
      alert(err.message);
    });

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
