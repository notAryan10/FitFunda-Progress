import { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ProgressSection({ data }) {

  const targetProgress = (data.completed_distance / data.target_distance) * 100

  const remaining = data.target_distance - data.completed_distance

  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(targetProgress), 200)
    return () => clearTimeout(timer)
  }, [targetProgress])

  return (
    <div className="card">
      <div className="sectionTitle">Progress</div>
      <div className="progressRing">
        <CircularProgressbar value={progress} text={`${targetProgress.toFixed(0)}%`} strokeWidth={14} styles={{ path: { stroke: "#007AFF" }, trail: { stroke: "#E5E5EA" }, text: { fill: "#1d1d1f", fontSize: "20px", fontWeight: "600" }}} />
      </div>
      <p className="progressLabel">Challenge Completion</p>
      <div className="stats">
        <div className="statBox">
          <div className="statValue">{data.completed_distance} KM</div>
          <div className="statLabel">Completed</div>
        </div>
        <div className="statBox">
          <div className="statValue">{data.target_distance} KM</div>
          <div className="statLabel">Target</div>
        </div>
      </div>
      <div className="progressBar">
        <div className="progressFill" style={{ "--progress": `${targetProgress}%` }} />
      </div>
      <p>{remaining} KM remaining</p>
    </div>
  );
}