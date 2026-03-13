import RunnerCard from "./components/RunnerCard";
import ProgressSection from "./components/ProgressSection";
import WeeklyChart from "./components/WeeklyChart";
import LeaderboardCard from "./components/LeaderboardCard";
import { runnerData } from "./data/runnerData";

function App() {
  return (
    <div className="container">
      <h1>India Running League</h1>
      <RunnerCard data={runnerData} />
      <ProgressSection data={runnerData} />
      <WeeklyChart runs={runnerData.weekly_runs} />
      <LeaderboardCard data={runnerData} />
    </div>
  )
}

export default App