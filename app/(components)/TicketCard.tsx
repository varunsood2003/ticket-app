import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

const TicketCard = ({ticket}:any) => {
  const formattedDate = new Date(ticket.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const formattedTime = new Date(ticket.createdAt).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority}/>
        <div className="ml-auto">
          <DeleteBlock id={ticket._id}/>
        </div>
      </div>
      <Link href={`/TicketPage/${ticket._id}`} style={{display: "contents"}}>
        <h4>{ticket.title}</h4>
        <hr className="h-px border-0 bg-page mb-2"/>
        <p className="whitespace-pre-wrap">
          {ticket.description}
        </p>
        <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col ">
              <p className="text-sm my-1">
                {formattedDate} {formattedTime}
              </p>
              <ProgressBar progress={ticket.progress} />
          </div>
          <div className="ml-auto flex items-end">
              <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
