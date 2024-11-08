import {
  SliceSimulator,
  SliceSimulatorParams,
  getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

import dynamic from 'next/dynamic';

const SliceSimulatorClient = dynamic(
  () => import('@slicemachine/adapter-next/simulator').then(mod => mod.SliceSimulator),
  { ssr: false } // Desactivar el rendering en el servidor
);

export default async function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams) {
  const resolvedParams = await searchParams;
  const slices = getSlices(resolvedParams.state);

  return (
    <SliceSimulatorClient background="#121b2f">
      <SliceZone slices={slices} components={components} />
    </SliceSimulatorClient>
  );
}
