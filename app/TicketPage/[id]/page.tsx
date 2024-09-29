import TicketForm from '@/app/(components)/TicketForm'
import React from 'react'

interface Params{
    params: {
        id: string
    }
}

const page = ({params}:Params) => {
  return (
    <TicketForm/>
  )
}

export default page