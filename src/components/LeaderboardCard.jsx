export default function LeaderboardCard({ data }) {
  return (
    <div className="card">
      <h3>Leaderboard</h3>
      <p>Your Rank: #{data.rank}</p>
      <p>Top Runner Distance: {data.top_runner_distance} KM</p>
      <p>Distance to Next Rank: {data.distance_to_next_rank} KM</p>

    </div>
  );
}