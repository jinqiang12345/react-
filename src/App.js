import React, { Component } from 'react';
import logo from './logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import Popover from 'material-ui/Popover/Popover';
import {Menu, MenuItem} from 'material-ui/Menu';
import Notification from 'material-ui/svg-icons/social/notifications-none';
import Event from 'material-ui/svg-icons/notification/event-note';
import Palette from 'material-ui/svg-icons/image/palette';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    return (
      <div className="App" style={{position: 'relative'}}>
        <MuiThemeProvider>
          <AppBar
            title="Title"
            style={{zIndex: '5'}}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <div style={{position: 'absolute', top: '8px', right: '20px', zIndex: '1000', width: '300px', height: '48px'}}>
            <span style={{position: 'absolute', top: '9px', right: '150px'}} onClick={this.handleClick}>
            <Avatar
              src="https://ss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/9f6f847c.jpg"
              size={35}
              style={{marginRight: '10px', cursor: 'pointer'}}
            />
            <span style={{marginRight: '10px', color: '#fff', cursor: 'pointer'}}>loginname</span>
            </span>
            <Popover
              style={{width: '224px'}}
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}
            >
              <div>
                <div style={{width: '100%', background: 'rgb(0, 188, 212)', height: '81px', textAlign: 'center', padding: '23px 0'}}>
                  <Avatar
                    src="https://ss0.bdstatic.com/7Ls0a8Sm1A5BphGlnYG/sys/portrait/item/9f6f847c.jpg"
                    size={35}
                    style={{marginRight: '10px', cursor: 'pointer'}}
                  />
                  <span style={{color: '#fff', cursor: 'pointer'}}>loginname</span>
                </div>
                <div style={{width: '100%', height: '40px', textAlign: 'center', padding: '5px 0'}}>
                  <Avatar
                    src="https://pan.baidu.com/box-static/disk-header/header/img/capacity-5t.png?t=1521599641001"
                    size={30}
                    style={{marginRight: '10px', cursor: 'pointer'}}
                  />
                  <Avatar
                    src="https://pan.baidu.com/box-static/disk-header/header/img/download-speed-raising.png?t=1521599641001"
                    size={30}
                    style={{marginRight: '10px', cursor: 'pointer'}}
                  />
                  <Avatar
                    src="https://pan.baidu.com/box-static/disk-header/header/img/cloud-unzip.png?t=1521599641001"
                    size={30}
                    style={{marginRight: '10px', cursor: 'pointer'}}
                  />
                  <Avatar
                    src="https://pan.baidu.com/box-static/disk-header/header/img/file-limit-5000@2x.png?t=1521599641001"
                    size={30}
                    style={{marginRight: '10px', cursor: 'pointer'}}
                  />
                  <Avatar
                    src="https://pan.baidu.com/box-static/disk-header/header/img/know-more@2x.png?t=1521599641001"
                    size={30}
                    style={{marginRight: '10px', cursor: 'pointer'}}
                  />
                </div>
                <Menu>
                  <MenuItem primaryText="个人资料" />
                  <MenuItem primaryText="帮助中心" />
                  <MenuItem primaryText="修改密码" />
                  <MenuItem primaryText="退出" />
                </Menu>
              </div>
            </Popover>
            <span style={{position: 'absolute', top: '0px', right: '0px'}}>
            <IconButton iconStyle={{color: '#fff'}}><Notification /></IconButton>
            <IconButton iconStyle={{color: '#fff'}}><Event /></IconButton>
            <IconButton iconStyle={{color: '#fff'}}><Palette /></IconButton>
            </span>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
