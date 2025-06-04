import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../Contexts/AuthContext.jsx";

function Navbar() {
  const { token, removeCookie } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className="navbar-bg">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography
              variant="h6"
              noWrap
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Amatic SC",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#ffff",
                textDecoration: "none",
                fontSize: "30px",
              }}
            >
              REBOOKEA
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {!token ? (
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      Iniciar sesión
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/register"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      Crear cuenta
                    </Typography>
                  </Link>
                </MenuItem>
              </Menu>
            ) : (
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    to="/upload"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <Typography sx={{ textAlign: "center" }}>Vender</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    to="/wall"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      Comprar
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      Mis libros
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    removeCookie();
                  }}
                >
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "#000" }}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      Cerrar sesión
                    </Typography>
                  </Link>
                </MenuItem>
              </Menu>
            )}
          </Box>
          <Typography
            variant="h5"
            noWrap
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            REBOOKEA
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            {!token ? (
              <>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Typography>Iniciar sesión</Typography>
                </Link>
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  <Typography>Crear cuenta</Typography>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/upload"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Vender
                </Link>
                <Link
                  to="/wall"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  Comprar
                </Link>
                <Link
                  to="/dashboard"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                >
                  Mis libros
                </Link>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    marginRight: "1rem",
                  }}
                  onClick={removeCookie}
                >
                  Cerrar sesión
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
