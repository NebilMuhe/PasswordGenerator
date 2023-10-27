import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";

const CopyButton = ({ password }) => {
  const [isCopied, setCopied] = useState(false);

  const copyText = () => {
    const textToCopy = password;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => (textToCopy ? setCopied(true) : alert("Nothing to copy")))
      .catch((err) => console.error("Failed to copy text: ", err));

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <button
      className={`text-white ${
        password.length === 0 && "cursor-not-allowed opacity-50"
      }`}
      onClick={copyText}
    >
      {isCopied ? (
        <p>Copied</p>
      ) : (
        <FaCopy className="mr-1 my-2 w-5 h-5 fill-green-400 hover:fill-blue-400" />
      )}
    </button>
  );
};

export default CopyButton;
