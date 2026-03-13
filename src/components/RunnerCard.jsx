export default function RunnerCard({ data }) {
  return (
    <div className="card">
      <h2>{data.runner}</h2>
      <p>{data.challenge}</p>
      <span className="tier">{data.tier}</span>
    </div>
  );
}