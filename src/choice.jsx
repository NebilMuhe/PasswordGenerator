import React, { useEffect, useState } from "react";
import Address from "./components/address";
import CopyButton from "./components/copyButton";
import passwordGenerator from "./password";
import address from "./components/links";
import Labels from "./components/Labels";

const Choice = () => {
  const [password, setPassword] = useState("");
  const [range, setRange] = useState(11);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [weak, setWeak] = useState(false);
  const [medium, setMedium] = useState(false);
  const [strong, setStrong] = useState(false);

  useEffect(() => {
    if (uppercase && lowercase && number && symbol) {
      setStrong(true);
      setWeak(false);
      setMedium(false);
      return;
    }
    if (
      (uppercase && lowercase && number && symbol) ||
      (uppercase && lowercase && number) ||
      (uppercase && lowercase && symbol) ||
      (uppercase && symbol && number) ||
      (symbol && lowercase && number)
    ) {
      setStrong(true);
      setWeak(false);
      setMedium(false);
      return;
    }

    if (
      (uppercase && lowercase) ||
      (uppercase && number) ||
      (uppercase && symbol) ||
      (number && lowercase) ||
      (symbol && lowercase) ||
      (symbol && number)
    ) {
      setStrong(false);
      setWeak(false);
      setMedium(true);
      return;
    }
    if (
      uppercase ||
      lowercase ||
      number ||
      symbol ||
      (!uppercase && !lowercase && !number && !symbol)
    ) {
      setWeak(true);
      setMedium(false);
      setStrong(false);
      return;
    }
  }, [uppercase, lowercase, number, symbol]);

  const handleGenerate = () => {
    let pass = passwordGenerator(range, {
      uppercase,
      lowercase,
      symbol,
      number,
    });
    if (!pass) return;
    setPassword(pass);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen font-sans text-white">
      <div>
        <h1 className="text-4xl underline decoration-green-300 decoration-3 font-semibold mt-3 font-urbanist">
          Password Generator
        </h1>
      </div>
      <div className="mt-5 flex gap-2 bg-slate-800 shadow-2xl px-2">
        <input
          className="w-80 h-12 bg-inherit text-2xl font-urbanist p-3"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="p-2">
          {" "}
          <CopyButton password={password} />
        </span>
      </div>
      <div className="mt-1 bg-slate-800 shadow-2xl w-96 flex flex-col">
        <div className="flex flex-col gap-2 p-2 ">
          <div className="flex justify-center px-2">
            <input
              className="w-full accent-green-400 cursor-pointer h-2 rounded"
              type="range"
              name=""
              id=""
              min={8}
              max={16}
              value={range}
              onChange={(e) => setRange(e.target.value)}
            />
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-xl">Character Length</p>
            <div className="bg-slate-500 rounded">
              <p className="py-1 px-2">{range}</p>
            </div>
          </div>
        </div>

        <Labels
          setUppercase={setUppercase}
          setLowercase={setLowercase}
          setSymbol={setSymbol}
          setNumber={setNumber}
          uppercase={uppercase}
          lowercase={lowercase}
          symbol={symbol}
          number={number}
        />

        <div className="flex justify-between mb-2 bg-slate-500 mx-2 py-4 rounded">
          <div className="pl-2">
            <p className="text-xl">
              Strength:
              {weak && (
                <span className="text-lg inline pl-2 opacity-50">Weak</span>
              )}
              {medium && (
                <span className="text-lg inline pl-2 opacity-50">Medium</span>
              )}
              {strong && (
                <span className="text-lg inline pl-2 opacity-50">Strong</span>
              )}
            </p>
          </div>
          <div className="mr-4">
            {weak && (
              <span>
                <span className="border-1 border-solid bg-red-500 px-2 mx-1"></span>
                <span className="border-1 border-solid bg-red-500 px-2 mr-1"></span>
                <span className="border-1 border-solid bg-red-500 px-2"></span>
              </span>
            )}
            {medium && (
              <span>
                <span className="border-1 border-solid bg-yellow-500 px-2 mx-1"></span>
                <span className="border-1 border-solid bg-yellow-500 px-2 mr-1"></span>
                <span className="border-1 border-solid bg-yellow-500 px-2"></span>
              </span>
            )}
            {strong && (
              <span>
                <span className="border-1 border-solid bg-green-500 px-2 mx-1"></span>
                <span className="border-1 border-solid bg-green-500 px-2 mr-1"></span>
                <span className="border-1 border-solid bg-green-500 px-2"></span>
              </span>
            )}
          </div>
        </div>
        <div className="bg-green-500 hover:bg-blue-400 flex justify-center p-3 mt-2 cursor-pointer mx-2 rounded">
          <button className="text-2xl font-bold" onClick={handleGenerate}>
            Generate
          </button>
        </div>
      </div>
      <div className="mt-1 bg-slate-800 w-96 p-3 shadow-2xl">
        <Address address={address} />
      </div>
    </div>
  );
};

export default Choice;
