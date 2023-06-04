import Room from "./ui/Room";

const RoomGrid = () => {
  const urology = [
    {
      id: 1,
      patients: [
        { id: 1, name: "John Doe", diseases: ["sick", "well"] },
        { id: 2, name: "Jane Smith", diseases: ["sick", "well"] },
        { id: 1, name: "John Doe", diseases: ["sick", "well"] },
      ],
    },
    {
      id: 2,
      patients: [
        { id: 3, name: "Sam Wilson", diseases: ["sick", "well"] },
        { id: 4, name: "Emily Johnson", diseases: ["sick", "well"] },
      ],
    },
    {
      id: 3,
      patients: [
        { id: 5, name: "Sam Wilson", diseases: ["sick", "well"] },
        { id: 6, name: "Emily Johnson", diseases: ["sick", "well"] },
        { id: 1, name: "John Doe", diseases: ["sick", "well"] },
      ],
    },
  ];

  return (
    <div className="rooms">
      {urology.map((room) => (
        <Room key={room.id} {...room} />
      ))}
    </div>
  );
};

export default RoomGrid;
