import {BarChart,Bar,XAxis, YAxis,Tooltip,ResponsiveContainer} from "recharts";

export default function WeeklyChart({ runs }) {
  return (
    <div className="card">
      <h3>Weekly Activity</h3>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={runs}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="km" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}