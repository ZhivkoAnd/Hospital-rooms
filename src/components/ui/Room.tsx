import { useState } from "react";
// import bed from "../../assets/bed.svg";

const Room = ({ id, patients }: any) => {
  const [info, setInfo] = useState(Array(patients.length).fill(false));

  const showInfo = (index: any) => {
    setInfo((prevInfo) => {
      const updatedInfo = [...prevInfo];
      updatedInfo[index] = !updatedInfo[index];
      return updatedInfo;
    });
  };

  console.log(info);

  return (
    <div className="room__container">
      <div className="lol">
        <div>Room Number:{id}</div>
        <div>Edit room</div>
      </div>
      <div className="room">
        {patients.map((e: any, index: any) => (
          <div className="room-info" key={index}>
            <div>
              <img className="room-bed" onClick={() => showInfo(index)} />
            </div>
            <div>{e.name}</div>
            {info[index] && (
              <div>{e.diseases.map((disease: any) => disease)}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Room;
