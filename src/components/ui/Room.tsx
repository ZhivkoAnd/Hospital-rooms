import bed from "../../assets/bed.svg";
import PatientInfoModal from "./PatientInfoModal";

const Room = ({ id, patients }: any) => {
  return (
    <div className="room__container">
      <div className="room__info">
        <div>Room {id}</div>
        <div>Edit</div>
      </div>
      <div
        className={`room ${
          patients?.length === 1
            ? "room__variant-one"
            : patients?.length === 2
            ? "room__variant-two"
            : "room__variant-three"
        }`}
      >
        {patients?.map((patient: any, index: any) => (
          <div className="room__content" key={index}>
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
