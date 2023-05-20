import React, { useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { ThemeProvider, makeStyles } from "@mui/styles";
import { AuthContext } from "../helpers/AuthContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 5,
    padding: 2,
  },
  avatar: {
    width: 100,
    height: 100,
    margin: "auto",
  },
  paper: {
    padding: 10,
    marginBottom: 10,
  },
  divider: {
    margin: 3,
  },
  button: {
    marginRight: 5,
  },
  iconButton: {
    marginLeft: 5,
  },
}));

function ProfilePage() {
  const classes = useStyles();
  const {user} = useContext(AuthContext);

  return (
    <ThemeProvider>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Avatar
                className={classes.avatar}
                src={user.avatar}
              />
              <Typography variant="h5" component="h2" align="center">
                {`${user.user} ${user.lastName}`}
              </Typography>
              <Typography color="textSecondary" align="center">
                {user.birthday}
              </Typography>
              
            </Paper>
            <Paper className={classes.paper}>
              <Typography variant="h6" component="h3">
                Contact Info
              </Typography>
              <Divider className={classes.divider} />
              <Typography>Email: {user.email}</Typography>
              <Typography>isMaried: {user.isMaried?"YES":"NO"}</Typography>
              <Typography>Address: 123 Main St, Anytown USA</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6" component="h3">
                  About Me
                </Typography>
                <IconButton className={classes.iconButton}>
                  <EditIcon />
                </IconButton>
              </Box>
              <Divider className={classes.divider} />
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nunc vel bibendum tincidunt, velit elit tincidunt
                tellus, vel lacinia enim sapien vel velit. Sed euismod, nunc vel
                bibendum tincidunt, velit elit tincidunt tellus, vel lacinia
                enim sapien vel velit.
              </Typography>
            </Paper>
            <Paper className={classes.paper}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h6" component="h3">
                  Skills
                </Typography>
                <IconButton className={classes.iconButton}>
                  <SettingsIcon />
                </IconButton>
              </Box>
              <Divider className={classes.divider} />
              <Typography>
                ReactJS, NodeJS, HTML, CSS, JavaScript, SQL, MongoDB
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default ProfilePage;
