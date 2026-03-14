import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function WeeklyChart({ runs }) {

  return (
    <div className="card">
      <div className="sectionTitle">
        Weekly Activity
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={runs}>
          <CartesianGrid stroke="#e5e5ea" vertical={false} />
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius:"12px", border:"none", boxShadow:"0 6px 20px rgba(0,0,0,0.08)" }} />
          <Bar dataKey="km" fill="#0A84FF" radius={[12,12,0,0]} animationDuration={1200} />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}