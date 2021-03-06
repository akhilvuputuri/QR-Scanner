import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import DataTable from "./DataTable";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import { visibleGridRowCountSelector } from "@material-ui/data-grid";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  text: {
    color: "white",
  },
  icon: {
    color: "white",
  },
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "#0496FF",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  profileButton: {
    cursor: "pointer",
    float: "right",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#0496FF",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function HomePage(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [vouchers, setVouchers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/vouchers/all")
      .then((res) => {
        getRedeemed(res.data.vouchers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getRedeemed = (vouchers) => {
    let redeem, total;
    const n = vouchers.map((voucher) => {
      const name = voucher.name;
      return axios
        .get(`http://localhost:8080/api/totalRedeem/${name}`)
        .then((res) => {
          redeem = res.data.redeem;
          total = res.data.total;
          voucher.redeem = `${redeem} / ${total}`;
          return voucher;
        });
    });
    Promise.all(n).then((res) => {
      setVouchers(res);
    });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List padding="50">
        {["Analytics", "Vouchers"].map((text, index) => (
          <ListItem button key={text} className={classes.text}>
            <ListItemIcon>
              {index % 2 === 0 ? (
                <ShowChartIcon className={classes.icon} />
              ) : (
                <ConfirmationNumberIcon className={classes.icon} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap>
            Value Dollar
          </Typography>
          <AccountCircleIcon
            onClick={handleClick}
            className={classes.profileButton}
          ></AccountCircleIcon>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Log out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <DataTable vouchers={vouchers}></DataTable>
      </main>
    </div>
  );
}

HomePage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HomePage;
