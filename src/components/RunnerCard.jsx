export default function RunnerCard({ data }) {
  return (
    <div className="card">

      <div className="runnerName">
        {data.runner}
      </div>

      <div className="challenge">
        {data.challenge}
      </div>

      <div className="tier">
        {data.tier}
      </div>

    </div>
  );
}