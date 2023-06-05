import bed from "../../assets/bed.svg";
import PatientInfoModal from "./PatientInfoModal";

const Room = ({ id, patients }: any) => {
  return (
    <div className="room__container">
      <div className="lol">
        <div>Room Number: {id}</div>
        <div>Edit room</div>
      </div>
      <div className="room">
        {patients?.map((patient: any, index: any) => (
          <div className="room__info" key={index}>
            <div>
              <img className="room__bed-svg" src={bed} />
            </div>
            <div>{patient.name}</div>
            <div>
              <PatientInfoModal {...patient} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Room;
