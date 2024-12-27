"use client";

import React, { useEffect, useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("I'll run on each render");
  }, []);

  return (
    <div className="flex justify-center items-center h-screen flex-col bg-gray-100">
      <h1 className="text-center text-black text-3xl font-medium font-mono mb-10">
        SIMPLE COUNTER FOR COUNTING STUDENTS:
      </h1>
      <div className="flex text-center justify-center w-96 py-8 text-3xl rounded-2xl border-black outline-1 bg-slate-300 text-black gap-6">
        <button
          onClick={() => setCount(count + 1)}
          className="text-center justify-center bg-slate-500 rounded-full w-8 h-8 text-white"
        >
          +
        </button>
        {count}
        <button
          onClick={() => setCount(count - 1)}
          className="text-center justify-center bg-slate-500 rounded-full w-8 h-8 text-white"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Page;
