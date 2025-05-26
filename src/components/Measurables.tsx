import type { Measurement } from "../types/player";
import { Typography } from "@mui/material";

interface Props {
  data?: Measurement;
}

const Measurables: React.FC<Props> = ({ data }) => {
  if (!data) return null;
  return (
    <div>
      <Typography variant="h6">Measurements</Typography>
      <Typography>Height (Shoes): {data.heightShoes}"</Typography>
      <Typography>Wingspan: {data.wingspan}"</Typography>
      <Typography>Reach: {data.reach}"</Typography>
      <Typography>Vertical: {data.maxVertical}"</Typography>
    </div>
  );
};

export default Measurables;
