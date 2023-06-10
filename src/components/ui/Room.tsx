import bed from "../../assets/empty-bed.svg";
import PatientInfoModal from "./PatientInfoModal";
import RoomInfoModal from "./RoomInfoModal";
import { RiHotelBedFill } from "react-icons/ri";
import { RiHotelBedLine } from "react-icons/ri";

const Room = ({ id, beds, patients }: any) => {
  return (
    <div className="room__container">
      <div className="room__info">
        <div className="room__info-number">Room {id}</div>
        <RoomInfoModal id={id} patients={patients} />
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
              <RiHotelBedFill className="room__content-bed-icon-full" />
            </div>
            <div className="room__content-name">{patient.name}</div>
            <div>
              <PatientInfoModal {...patient} />
            </div>
          </div>
        ))}
        {/* The expression [...Array(3 - patients.length)] creates an array with a
        length equal to the number of empty spaces. Then, the .map() function is
        used to iterate over this array and generate the empty bed icons. Each
        empty bed icon is assigned a unique key prop. */}
        <div className="room__content-empty-beds">
          {[...Array(3 - patients.length)].map((_, index) => (
            <RiHotelBedLine
              key={index}
              className="room__content-bed-icon-empty"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Room;
