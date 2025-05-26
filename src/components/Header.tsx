// components/Header.tsx
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            Mavericks Draft Hub
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
