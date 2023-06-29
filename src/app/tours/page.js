"use client"
import Heading from "/components/Heading";
import ToursTable from "/components/ToursTable/ToursTable";

export default function Home() {
  return <>
    <Heading variant="1">Доступні тури</Heading>
    <ToursTable />
  </>
}
