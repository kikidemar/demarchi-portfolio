"use client";

import { useEffect, useState } from "react";
import { SliceSimulator } from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

export default function SliceSimulatorPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Establecer isClient a true solo en el cliente
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Evita el renderizado en el servidor
  }

  return (
    <SliceSimulator
      sliceZone={(props) => <SliceZone {...props} components={components} />}
    />
  );
}
