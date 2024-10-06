import TicketForm from '@/app/(components)/TicketForm'
import React from 'react'

interface Params{
    params: {
        id: string
    }
}

const page = ({params}:Params) => {
  const EDITMODE = params.id === "new" ? false : true;
  if(EDITMODE){

  }
  return (
    <TicketForm/>
  )
}

export default page