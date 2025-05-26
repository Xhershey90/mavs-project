// src/components/PlayerProfile.tsx
import { useState } from "react";
import type { PlayerFull, ScoutingReport } from "../types/player";
import { Typography, Box, Tabs, Tab, Avatar, Divider } from "@mui/material";

import Measurables from "./Measurables";
import RankingsTable from "./RankingsTable";
import ScoutingReportForm from "./ScoutingReportForm";
import ReportList from "./ReportList";
import StatTable from "./StatTable";

interface Props {
  player: PlayerFull;
}

const PlayerProfile: React.FC<Props> = ({ player }) => {
  const [tab, setTab] = useState(0);
  const [reports, setReports] = useState<ScoutingReport[]>([]);
  const handleNewReport = (comment: string) => {
    setReports((prev) => [
      ...prev,
      { comment, date: new Date().toISOString() },
    ]);
  };

  return (
    <Box>
      {/* Header */}
      <Typography variant="h4" sx={{ mb: 1 }}>
        {player.bio.name}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        {player.bio.photoUrl && (
          <Avatar
            alt={player.bio.name}
            src={player.bio.photoUrl}
            sx={{ width: 80, height: 80, mr: 2 }}
          />
        )}
        <Box>
          <Typography>
            {player.bio.currentTeam} – {player.bio.league}
          </Typography>
          <Typography variant="body2">Height: {player.bio.height}"</Typography>
          <Typography variant="body2">
            Weight: {player.bio.weight} lbs
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Tabs */}
      <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 2 }}>
        <Tab label="Measurements" />
        <Tab label="Scout Rankings" />
        <Tab label="Stats" />
        <Tab label="Reports" />
      </Tabs>

      {/* Tab Content */}
      <Box>
        {tab === 0 && <Measurables data={player.measurements} />}
        {tab === 1 && <RankingsTable rankings={player.scoutRankings} />}
        {tab === 2 && (
          <>
            {player.statsPerGame && (
              <StatTable stats={player.statsPerGame} label="Per Game" />
            )}
            {player.statsSeasonTotal && (
              <StatTable stats={player.statsSeasonTotal} label="Season Total" />
            )}
          </>
        )}
        {tab === 3 && (
          <>
            <ScoutingReportForm onSubmit={handleNewReport} />
            <ReportList reports={reports} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default PlayerProfile;
