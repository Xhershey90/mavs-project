import type { ScoutingReport } from "../types/player";
import { Typography } from "@mui/material";

interface Props {
  reports: ScoutingReport[];
}

const ReportList: React.FC<Props> = ({ reports }) => (
  <div>
    <Typography variant="h6">Scouting Reports</Typography>
    {reports.map((r, i) => (
      <div key={i}>
        <Typography>{new Date(r.date).toLocaleString()}</Typography>
        <Typography>{r.comment}</Typography>
      </div>
    ))}
  </div>
);

export default ReportList;
