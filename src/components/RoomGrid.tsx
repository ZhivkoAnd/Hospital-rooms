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

  const [rooms, setRooms] = useState(data);

  const inputData = data
    ?.map((e: any) =>
      e.patients.filter((patient: any) =>
        patient.name.toLowerCase().includes(inputQuery.toLowerCase())
      )
    )
    .flat();

  useEffect(() => {
    if (inputData && inputData.length && inputQuery) {
      setRooms(inputData);
    } else {
      setRooms(data);
    }
  }, [inputQuery, data]);

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
        {/* If there as something written in the input, show only the names, otherwise show the rooms */}
        {rooms?.map((patient: any) =>
          inputQuery ? (
            <div key={patient.id}>{patient.name}</div>
          ) : (
            <div key={patient.id}>
              <Room {...patient} />
            </div>
          )
        )}
      </div>
    </>
  );
};

export default RoomGrid;
