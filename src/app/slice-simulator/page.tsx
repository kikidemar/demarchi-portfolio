'use client'

import { useEffect, useState } from "react";
import {
  SliceSimulator,
  SliceSimulatorParams,
  getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

export default function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams) {
  const [slices, setSlices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlices = async () => {
      try {
        // Resolver la promesa searchParams y obtener el state
        const resolvedSearchParams = await searchParams;
        const state = resolvedSearchParams.state;

        // Obtener los slices si state está presente
        if (state) {
          const fetchedSlices = await getSlices(state);
          setSlices(fetchedSlices);
        } else {
          console.error("State parameter is missing.");
        }
      } catch (error) {
        console.error("Error fetching slices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSlices();
  }, [searchParams]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <SliceSimulator background="#121b2f">
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  );
}
