import BigBoard from '../components/BigBoard';
import data from '../data/intern_project_data.json';

export default function Home() {
  return <BigBoard data={data} />;
}
