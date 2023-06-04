import Room from "./ui/Room";
import { fetchRooms } from "../utils/API";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const RoomGrid = () => {
  const { data, isLoading, isError } = useQuery(["rooms"], fetchRooms);

  return (
    <div className="rooms">
      {data?.map((room: any) => (
        <Room key={room.id} {...room} />
      ))}
    </div>
  );
};

export default RoomGrid;
