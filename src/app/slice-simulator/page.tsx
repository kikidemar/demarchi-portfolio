import {
  SliceSimulator,
  SliceSimulatorParams,
  getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

export default async function SliceSimulatorPage({
  searchParams,
}: SliceSimulatorParams) {
  // Esperar que la promesa se resuelva antes de obtener el valor de 'state'
  const resolvedParams = await searchParams;

  // Acceder al valor de 'state' después de resolver la promesa
  const slices = getSlices(resolvedParams.state);

  return (
    <SliceSimulator background="#121b2f">
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  );
}