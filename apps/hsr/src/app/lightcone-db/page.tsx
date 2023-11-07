import getQueryClient from "@hsr/lib/queryClientHelper";
import { optionsLightConeList } from "@hsr/hooks/queries/useLightConeList";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import LightConeCatalogue from "./LightConeCatalogue";

export const metadata = {
  title: "Light Cone Database",
  description: "Honkai Star Rail Light Cone Database",
};

export default async function LightConeDb() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(optionsLightConeList());
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className="px-2 py-4 md:container md:px-0">
      {/* <HydrationBoundary state={dehydratedState}> */}
      <LightConeCatalogue />
      {/* </HydrationBoundary> */}
    </main>
  );
}
