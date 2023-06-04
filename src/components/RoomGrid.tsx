import Room from "./ui/Room";
import { fetchRooms } from "../utils/API";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import LoadingSpinners from "./ui/LoadingSpinners";
import ErrorUI from "./ui/ErrorUI";
import ActionBar from "./ui/ActionBar";

const RoomGrid = () => {
  const [inputQuery, setInputQuery] = useState("");

  const { data, isLoading, isError } = useQuery(["rooms"], fetchRooms, {
    onSuccess(data) {
      setRooms(data);
    },
    refetchOnWindowFocus: false,
  });

  const [rooms, setRooms] = useState<any>(data);

  console.log(rooms);

  // console.log(data?.flatMap((e: any) => e.patients));
  const inputData = data
    ?.map((e: any) =>
      e.patients.filter((patient: any) =>
        patient.name.toLowerCase().includes(inputQuery.toLowerCase())
      )
    )
    .flat();
  console.log(inputData);

  useEffect(() => {
    if (inputData && inputData.length) {
      setRooms(inputData);
    } else {
      setRooms(data);
    }
  }, [inputQuery]);

  console.log(inputData);

  if (isLoading) {
    return <LoadingSpinners magnifying_glass />;
  }
  if (isError) {
    return <ErrorUI />;
  }

  return (
    <>
      <ActionBar inputQuery={inputQuery} setInputQuery={setInputQuery} />

      <div className="rooms">
        {rooms?.map((patient: any) => (
          <div>{patient.name}</div>
        ))}
      </div>
    </>
  );
};

export default RoomGrid;
