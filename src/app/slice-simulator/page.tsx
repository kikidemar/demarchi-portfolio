import {
  SliceSimulator,
  SliceSimulatorParams,
  getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

export async function getServerSideProps(context: any) {
  const { state } = context.query;
  const slices = await getSlices(state);

  return {
    props: {
      slices,
    },
  };
}

export default function SliceSimulatorPage({ slices }: { slices: any[] }) {
  return (
    <SliceSimulator background="#121b2f">
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  );
}
