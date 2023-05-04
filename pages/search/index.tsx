import { Footer, HeadTitle, Header, InfoCard } from "@/components";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  searchResults: ILocation[];
};

const Search = ({ searchResults }: Props) => {
  const { query } = useRouter();
  const startedDate: any = query?.startDate;
  const endedDate: any = query?.endDate;
  const formattedStartDate = format(
    new Date(startedDate ?? null),
    "dd MMMM yyyy"
  );
  const formattedEndDate = format(new Date(endedDate ?? null), "dd MMMM yyyy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <HeadTitle title={`Next Airbnb | Search - ${query?.location}`} />
      <Header
        placeholder={`${query?.location} | ${range} | ${query?.noOfGuests}`}
      />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} for {query?.noOfGuests} number of guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {query?.location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults?.map((location: ILocation) => (
              <InfoCard {...location} />
            ))}
          </div>
        </section>

        {/* <section className="hidden xl:inline-flex xl:min-w-[600px] h-[180px]">
          <Map />
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS")
    .then((response) => response.json())
    .catch((err: any) => alert(err?.message));

  return {
    props: {
      searchResults,
    },
  };
}
