"use client"
import Heading from "../components/Heading";
import Filters from "../components/Filters/Filters";
import ToursTable from "../components/ToursTable";



export default function Home() {
  return (
    <>
      <Heading variant="1">Доступні тури</Heading>
      <Filters />
      <ToursTable />
    </>
  )
}
