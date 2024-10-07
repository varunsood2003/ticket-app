import TicketForm from '@/app/(components)/TicketForm'
import React from 'react'

interface Params{
    params: {
        id: string
    }
}

const getTicket = async (id: string) =>{
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: "no-store",
    });
    if(!res.ok){
      throw new Error("Failed to get Data");
    }
    return res.json();
  }

const page = async ({params}:Params) => {
  const EDITMODE = params.id === "new" ? false : true;
  let updatedData = {};
  if(EDITMODE){
    updatedData = await getTicket(params.id);
  }
  return (
    <TicketForm editMode={EDITMODE} updatedData={updatedData} />
  )
}

export default page