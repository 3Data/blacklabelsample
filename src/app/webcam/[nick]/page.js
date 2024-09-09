"use client";

import Link from "next/link";
import Script from "next/script";
import { useRef } from "react";

export default function Home({ params }) {
  const { nick } = params;
  const hybridClientRef = useRef(null);

  return (
    <div>
      <Script
        src="https://blacklabel.icfcdn.com/stable/player.js"
        async="true"
        strategy="afterInteractive"
      />

      <h1>{nick} Webcam</h1>
      <div className="h-2" />
      <Link href="/" className="bg-black text-white rounded-md p-2">
        Go back
      </Link>
      <div className="h-2" />

      <div
        ref={hybridClientRef}
        id="hybrid-client"
        data-name={nick}
        data-whitelabel="olecams.com"
        data-esf={true}
        data-lang="es"
        data-hidebiotab={true}
        data-hidephotostab={true}
      ></div>
    </div>
  );
}
