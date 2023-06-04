import Room from "./ui/Room";
import { fetchRooms } from "../utils/API";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import LoadingSpinners from "./ui/LoadingSpinners";
import ErrorUI from "./ui/ErrorUI";

const RoomGrid = () => {
  const { data, isLoading, isError } = useQuery(["rooms"], fetchRooms);

  if (isLoading) {
    return <LoadingSpinners magnifying_glass />;
  }
  if (isError) {
    return <ErrorUI />;
  }

  return (
    <div className="rooms">
      {data?.map((room: any) => (
        <Room key={room.id} {...room} />
      ))}
    </div>
  );
};

export default RoomGrid;
