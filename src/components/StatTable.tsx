// src/components/StatTable.tsx
import type { PlayerStats } from "../types/player";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";

interface Props {
  stats: PlayerStats;
  label?: string;
}

const StatTable: React.FC<Props> = ({ stats, label }) => {
  return (
    <>
      {label && <Typography variant="h6">{label}</Typography>}
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell>Points</TableCell>
            <TableCell>{stats.points}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Assists</TableCell>
            <TableCell>{stats.assists}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rebounds</TableCell>
            <TableCell>{stats.rebounds}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Steals</TableCell>
            <TableCell>{stats.steals}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Blocks</TableCell>
            <TableCell>{stats.blocks}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default StatTable;
