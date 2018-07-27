import React, {Component} from 'react';
import logo from './img/logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Notifications from '@material-ui/icons/Notifications';
import Search from '@material-ui/icons/Search';
import Dashboard from '@material-ui/icons/Dashboard';
import Settings from '@material-ui/icons/Settings';
import FormatAlignLeft from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenter from '@material-ui/icons/FormatAlignCenter';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import TextField from '@material-ui/core/TextField';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1,
    height: '85px',
    display: 'flex',
    alignItems: 'center'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: '#727272',
    background: 'transparent !important',
    transition: '0.3s ease',
    padding: '0 9px',
    height: '85px'
  },
  appBar: {
    position: 'static',
    boxShadow: '0 2px 38px rgba(0, 0, 0, 0.1)',
    border: 'none',
    marginBottom: '0',
    minHeight: '85px',
    padding: '0 15px 0 0',
    background: '#fff',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  avatar: {
    width: 40,
    height: 40,
    margin: 10
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  hide: {
    display: 'none',
  },
  iconSearch: {
    color: '#727272',
    fontSize: '33px'
  },
  userOnlineStatus: {
    background: '#4dad44',
    borderRadius: '50%',
    bottom: '21px',
    height: '10px',
    border: '2px solid #fff',
    position: 'absolute',
    right: 0,
    width: '10px'
  },
  textField: {
    marginBottom: '30px',
    marginLeft: '5px',
    marginTop: 0
  },
  logoImg: {
    marginRight: '20px',
    marginLeft: '15px'
  },
  margin: {
    margin: 'theme.spacing.unit * 5'
  }
});

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    open: false,
  };

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  };

  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const {auth, anchorEl} = this.state;
    const open = Boolean(anchorEl);
    return (<div>
      <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
        <Toolbar>
          <img src="./src/img/logo.png" className={classNames(classes.logoImg, this.state.open && classes.hide)}/>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleDrawerOpen}
            className={classes.menuButton}
          >
            <FormatAlignCenter />
          </IconButton>
          <div className={classes.flex}>
            <Search className={classes.iconSearch}/>
            <TextField id="name" label="search" className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin="normal"/>
          </div>
          <Settings className={classes.menuButton}/>
          <div>
            <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }} transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }} open={open} onClose={this.handleClose}>
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
            </Menu>
          </div>
          <div>
            <IconButton className={classes.menuButton} aria-owns={open
                ? 'menu-appbar'
                : null} aria-haspopup="true" onClick={this.handleMenu} color="inherit">
              <FormatAlignCenter/>
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }} transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }} open={open} onClose={this.handleClose}>
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
            </Menu>
          </div>
          <Dashboard className={classes.menuButton}/>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <Badge className={classes.margin} badgeContent={10} color="secondary">
              <Notifications/>
            </Badge>
          </IconButton>
          <IconButton className={classes.menuButton} aria-owns={open
              ? 'menu-appbar'
              : null} aria-haspopup="true" onClick={this.handleMenu} color="inherit">
            <Avatar src='https://www.fillmurray.com/500/900' className={classes.avatar}/>
            <span className={classes.userOnlineStatus}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
        }}
        open={this.state.open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </Drawer>
    </div>);
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MenuAppBar);
