import RunnerCard from "./components/RunnerCard";
import ProgressSection from "./components/ProgressSection";
import WeeklyChart from "./components/WeeklyChart";
import LeaderboardCard from "./components/LeaderboardCard";
import { runnerData } from "./data/runnerData";

function App() {

  const remaining = runnerData.target_distance - runnerData.completed_distance;

  return (
    <div className="container">

      <h1 className="title"> India Running League </h1>
      <RunnerCard data={runnerData}/>
      <ProgressSection data={runnerData}/>
      <WeeklyChart runs={runnerData.weekly_runs}/>
      <LeaderboardCard data={runnerData}/>
      <div className="card motivation">
        Only {remaining} KM left to finish your challenge.
      </div>

    </div>
  );
}

export default App;