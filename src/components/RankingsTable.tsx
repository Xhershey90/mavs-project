import type { ScoutRanking } from "../types/player";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { getScoutRankOutliers } from "../utils/RankingUtils";

interface Props {
  rankings?: ScoutRanking;
}

const RankingsTable: React.FC<Props> = ({ rankings }) => {
  if (!rankings) return null;

  const outliers = getScoutRankOutliers(rankings);

  return (
    <div>
      <Typography variant="h6">Scout Rankings</Typography>
      <Table>
        <TableBody>
          {Object.entries(outliers).map(([scout, { rank, status }]) => (
            <TableRow key={scout}>
              <TableCell>{scout}</TableCell>
              <TableCell>
                {rank} {status === "high" && "↑"} {status === "low" && "↓"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RankingsTable;
