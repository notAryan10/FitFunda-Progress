export default function LeaderboardCard({ data }) {

  return (
    <div className="card">

      <div className="sectionTitle">Leaderboard</div>

      <div className="leaderboardRow">
        <span>Your Rank</span>
        <strong>#{data.rank}</strong>
      </div>

      <div className="divider" />

      <div className="leaderboardRow">
        <span>Top Runner</span>
        <span>{data.top_runner_distance} KM</span>
      </div>

      <div className="divider" />

      <div className="leaderboardRow">
        <span>Distance to Next Rank</span>
        <span>{data.distance_to_next_rank} KM</span>
      </div>

    </div>
  );
}