import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";
import BigBoard from "./components/BigBoard";
import PlayerProfile from "./components/PlayerProfile";
import rawData from "./data/intern_project_data.json";
import type {
  PlayerBio,
  ScoutRanking,
  Measurement,
  PlayerFull,
} from "./types/player";
import { mergePlayerData } from "./utils/PlayerUtils";
import Header from "./components/Header";

const data = rawData as {
  bio: PlayerBio[];
  scoutRankings: ScoutRanking[];
  measurements: Measurement[];
  seasonLogs: any[];
};

const players = mergePlayerData(
  data.bio,
  data.scoutRankings,
  data.measurements,
  data.seasonLogs
);

function App() {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<BigBoard players={players} />} />
          <Route
            path="/player/:id"
            element={<PlayerProfileWrapper players={players} />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

function PlayerProfileWrapper({ players }: { players: PlayerFull[] }) {
  const id = window.location.pathname.split("/").pop();
  const player = players.find((p) => String(p.bio.playerId) === id);
  return player ? <PlayerProfile player={player} /> : <p>Player not found</p>;
}

export default App;
