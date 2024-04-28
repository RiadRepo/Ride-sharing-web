import DriveFooter from "@/Components/DriveFooter";
import DriveNavBar from "@/Components/DriveNavBar";
import DrivingMode from "@/Components/DrivingMode";

export default function drivingmode() {
  return (
    <>
      <DriveNavBar />
      <div>
        <DrivingMode />
      </div>
      <DriveFooter />
    </>
  );
}
