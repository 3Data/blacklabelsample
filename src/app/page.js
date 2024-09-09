"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [modelName, setModelName] = useState("");
  const { push } = useRouter();

  const submit = (e) => {
    e.preventDefault();
    push(`/webcam/${modelName}`);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label>
          <span>Model name</span>
          <input
            type="text"
            name="modelName"
            value={modelName}
            className="border-2 border-black rounded-md p-2"
            onChange={(e) => setModelName(e.target.value)}
          />
        </label>
        <button className="bg-black text-white rounded-md p-2">
          Go to /webcam/{modelName}
        </button>
      </form>
    </div>
  );
}
