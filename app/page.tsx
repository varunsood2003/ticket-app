import Image from "next/image";
import TicketCard from "./(components)/TicketCard";

interface Ticket {
  _id: string;        
  title: string;     
  description: string; 
  category: string;   
  priority: number;   
  progress: number;    
  status: string;      
  active: boolean;     
  createdAt: string;   
  updatedAt: string;   
  __v: number;         
}

const getTickets = async () =>{
  const res = await fetch("http://localhost:3000/api/Tickets",{
    cache: "no-store"
  });
  return res.json();
}

export default async function Home() {
  const { tickets } = await getTickets();
//@ts-ignore
  const uniqueCategories = [...new Set(tickets?.map(ticket => ticket.category.trim()))];

  return (
    <div className="p-5">
      <div>
        {uniqueCategories.map((uniqueCat, index) => (
          <div key={index} className="mb-4">
            <h2>{uniqueCat}</h2>
            {tickets.filter((tic: Ticket) => tic.category === uniqueCat).length > 0 ? (
              <div className="grid lg:grid-cols-2 xl:grid-cols-4">
                {tickets.filter((tic: Ticket) => tic.category === uniqueCat).map((tics: Ticket) => (
                  <TicketCard ticket={tics} key={tics._id} />
                ))}
              </div>
            ) : (
              <p>No tickets available in this category.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
