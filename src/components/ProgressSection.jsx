import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressSection({ data }) {

  const progress = (data.completed_distance / data.target_distance) * 100;

  return (
    <div className="card">
      <h3>Challenge Progress</h3>
      <div style={{ width: 120, margin: "20px auto" }}>
        <CircularProgressbar value={progress} text={`${progress.toFixed(0)}%`} />
      </div>
      <p> {data.completed_distance} / {data.target_distance} KM </p>
      <div className="progressBar">
        <div className="progressFill" style={{ width: `${progress}%` }}/>
      </div>
      <p> Remaining: {data.target_distance - data.completed_distance} KM </p>
    </div>
  );
}