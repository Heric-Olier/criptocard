"use client";

import { CardProfileProvider } from "../context/cardProfileContext";
import { ApplyUI } from "./ApplyUI";

export default function Apply() {
  return (
    <CardProfileProvider>
      <ApplyUI />
    </CardProfileProvider>
  );
}
