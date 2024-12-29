import React from "react";
import { Pet, columns } from "./components/columns";
import { DataTable } from "./components/data-table";

async function getData(): Promise<Pet[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: 1,
      petImage: null,
      Name: "Fido",
      Breed: "Labrador",
      Age: 5,
      Weight: 50,
    },
    {
      id: 2,
      petImage: null,
      Name: "Rex",
      Breed: "German Shepherd",
      Age: 3,
      Weight: 75,
    },
    {
      id: 3,
      petImage: null,
      Name: "Spot",
      Breed: "Dalmatian",
      Age: 2,
      Weight: 40,
    },
    {
      id: 4,
      petImage: null,
      Name: "Buddy",
      Breed: "Golden Retriever",
      Age: 4,
      Weight: 60,
    },
    {
      id: 5,
      petImage: null,
      Name: "Max",
      Breed: "Poodle",
      Age: 1,
      Weight: 30,
    },
    {
      id: 6,
      petImage: null,
      Name: "Duke",
      Breed: "Doberman",
      Age: 6,
      Weight: 80,
    },
  ];
}

async function PetsPage() {
  const data = await getData();
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default PetsPage;
