// src/components/BigBoard.tsx
// src/components/BigBoard.tsx
import type { PlayerFull } from "../types/player";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { getAverageRank } from "../utils/RankingUtils";

interface Props {
  players: PlayerFull[];
}

const BigBoard: React.FC<Props> = ({ players }) => {
  const sortedPlayers = [...players].sort((a, b) => {
    return getAverageRank(a.scoutRankings) - getAverageRank(b.scoutRankings);
  });

  return (
    <Box>
      <Typography variant="h4" sx={{ my: 2 }}>
        Mavericks Big Board
      </Typography>

      {sortedPlayers.map((p) => (
        <Card key={p.bio.playerId} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{p.bio.name}</Typography>
            <Typography variant="body2">
              {p.bio.currentTeam} — {p.bio.league}
            </Typography>
            <Typography variant="body2">
              Avg Scout Rank: {getAverageRank(p.scoutRankings).toFixed(1)}
            </Typography>
            <Link to={`/player/${p.bio.playerId}`}>
              <Button variant="outlined" sx={{ mt: 1 }}>
                View Profile
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default BigBoard;
