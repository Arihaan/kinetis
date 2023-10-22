"use client";

import React, { useState } from "react";
import { uintCV, PostConditionMode } from "@stacks/transactions";
import { openContractCall } from "@stacks/connect";
import { stringUtf8CV } from "@stacks/transactions";
import { StacksMocknet, StacksTestnet } from "@stacks/network";

export default function ProjectUploadForm() {
  const [funding, setFunding] = useState();
  const [projectname, setProjectname] = useState("");
  const [projectdesc, setProjectdesc] = useState("");

  const handleUpload = async () => {
    const functionArgs = [
        stringUtf8CV(projectname),
        stringUtf8CV(projectdesc),
        uintCV(funding) 
    ];

    const contractAddress = "f2f69eb891a18834b58173d5a164a5290696b6bb7f335b05468a8baf6d462f86"; // Replace with your contract address
    const contractName = "project-upload"; // Replace with your contract name
    const functionName = "create-project"; // Function for deposit

    const options = {
      contractAddress,
      contractName,
      functionName,
      functionArgs,
      network: new StacksTestnet(),
      // network: new StacksMocknet(),
      postConditionMode: PostConditionMode.Allow,
      appDetails: {
        name: "Kinetis",
        icon: "https://freesvg.org/img/bitcoin.png", // You can provide an icon URL for your application
      },
      onFinish: (data) => {
        console.log(data);
      },
    };

    await openContractCall(options);
  };

  return (
    <form
      className="flex flex-col items-center space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpload();
      }}
    >
    <input
        type="text"
        placeholder="Project Name"
        className="w-1/3 px-4 py-2 text-gray-300 bg-gray-700 rounded  focus:outline-none focus:border-orange-500"
        value={projectname}
        onChange={(e) => setProjectname(e.target.value)}
    />
    <input
        type="text"
        placeholder="Project Description"
        className="w-1/3 h-52 px-4 py-2 text-gray-300 bg-gray-700 rounded  focus:outline-none focus:border-orange-500"
        value={projectdesc}
        onChange={(e) => setProjectdesc(e.target.value)}
    />
        <input
            type="number"
            placeholder="Funding Goals (in USD)"
            className="w-1/3 px-4 py-2 text-gray-300 bg-gray-700 rounded  focus:outline-none focus:border-orange-500"
            value={funding}
            onChange={(e) => setFunding(e.target.value)}
        />
        <button
            type="submit"
            className="w-1/3 px-6 py-2 bg-blue-500 rounded hover:bg-green-700 focus:outline-none"
        >
            Upload Project to the Stacks Blockchain
        </button>        
    </form>
  );
}
