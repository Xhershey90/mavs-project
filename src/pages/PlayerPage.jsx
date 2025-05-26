import { useParams } from 'react-router-dom';
import PlayerProfile from '../components/PlayerProfile';
import data from '../data/intern_project_data.json';

export default function PlayerPage() {
  const { id } = useParams();
  return <PlayerProfile playerId={parseInt(id)} data={data} />;
}
