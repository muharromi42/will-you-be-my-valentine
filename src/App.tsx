"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Beneran?",
      "Are you sure?",
      "Yakinnnnn???",
      "Coklatt lohhh",
      "Nanti nyesellllll",
      "Udah di depan btw",
      "Aokaowoawawk",
      "Gk bisa nolak ya :v",
      "Dah ambil aja depan rumah",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media1.tenor.com/m/_yUy24JPU7MAAAAd/suga-finger-hearts-yoongi-finger-hearts.gif" />
          <div className="my-4 text-4xl font-bold">Nihh depan rumah hehe</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media1.tenor.com/m/NzRsT9jd374AAAAC/bts-suga.gif"
          />
          <h1 className="my-4 text-4xl">Mau coklat?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
