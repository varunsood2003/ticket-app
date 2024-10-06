import React from "react";

interface Status {
  status: string;
}

const StatusDisplay = ({ status }: Status) => {
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-black ${
        (status == "Done" && "bg-green-200") ||
        (status == "Not yet started" && "bg-red-200") ||
        (status == "Started" && "bg-yellow-200")
      } `}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
