// components/PlayerCard.tsx
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import type { PlayerFull } from "../types/player";

interface Props {
  player: PlayerFull;
}

const PlayerCard: React.FC<Props> = ({ player }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{player.bio.name}</Typography>
        <Typography variant="body2">{player.bio.currentTeam}</Typography>
        <Link to={`/player/${player.bio.playerId}`}>
          <Button variant="outlined" sx={{ marginTop: 1 }}>
            View Profile
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
