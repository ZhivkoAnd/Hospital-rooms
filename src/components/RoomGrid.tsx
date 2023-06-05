import Room from "./ui/Room";
import { fetchRooms } from "../utils/API";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import LoadingSpinners from "./ui/LoadingSpinners";
import ErrorUI from "./ui/ErrorUI";
import ActionBar from "./ui/ActionBar";
import AdminProductList from "./AdminProductList";

const RoomGrid = () => {
  const [inputQuery, setInputQuery] = useState("");

  const { data, isLoading, isError } = useQuery(["rooms"], fetchRooms, {
    onSuccess(data) {
      setRooms(data);
    },
    refetchOnWindowFocus: false,
  });

  const [rooms, setRooms] = useState(data);

  // The map() function is used to iterate over the data array.
  // Within each iteration, the filter() function is used to keep only the patients whose names include the inputQuery.
  //  The flat() function is then used to flatten the resulting array of arrays into a single array of filtered values.
  const inputData = /^[a-zA-Z]+$/.test(inputQuery)
    ? data
        ?.map((e: any) =>
          e.patients.filter((patient: any) =>
            patient.name.toLowerCase().includes(inputQuery.toLowerCase())
          )
        )
        .flat()
    : /^\d+$/.test(inputQuery)
    ? data?.filter((patient: any) => patient.id === parseInt(inputQuery))
    : "";

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

  console.log(rooms);

  return (
    <>
      <ActionBar inputQuery={inputQuery} setInputQuery={setInputQuery} />
      <div className="rooms">
        {/* If there as something written in the input, show only the names, otherwise show the rooms */}

        {inputQuery && /^[a-zA-Z]+$/.test(inputQuery) && (
          <AdminProductList data={rooms} />
        )}
        {inputQuery &&
          /^\d+$/.test(inputQuery) &&
          inputData.map((patient: any) => (
            <div key={patient.id}>
              <Room {...patient} />
            </div>
          ))}
        {!inputQuery &&
          rooms?.map((patient: any) => (
            <div key={patient.id}>
              <Room {...patient} />
            </div>
          ))}
      </div>
    </>
  );
};

export default RoomGrid;
