"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";

interface IdInterface {
  id: string;
}

const DeleteBlock = ({ id }: IdInterface) => {
  const router = useRouter();
  const handleClick = async () => {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <FontAwesomeIcon
      onClick={handleClick}
      icon={faX}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
    />
  );
};

export default DeleteBlock;
