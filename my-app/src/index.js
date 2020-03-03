
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Dropdown, Image, Grid, List, Input, Label } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="twitter"/></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest"/></Menu.Item>
            <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home"/></Menu.Item>
            <Menu.Item fitted><Icon name="search"/></Menu.Item>
            <Menu.Item fitted><Icon name="user"/></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <img className="ui centered image" src="http://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/experience-islandsnow-logo.png">
        </img>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Grid centered container>
            <Dropdown item text="MEN">
              <Dropdown.Menu>
                <Dropdown.Item>Tank tops</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>Tank tops</Dropdown.Item>
                <Dropdown.Item>Shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>KIDS</Menu.Item>
            <Dropdown item text="BRANDS">
              <Dropdown.Menu>
                <Dropdown.Item>Never Lucky JP</Dropdown.Item>
                <Dropdown.Item>Don't mind me just plugging my street team brand here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SEARCH</Menu.Item>
          </Grid>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <img class src="http://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/experience-islandsnow-video-snapshot.png"></img>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer">
          <Container>
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <List>
                    <List.Item>About us</List.Item>
                    <List.Item>Store locations</List.Item>
                    <List.Item>Employment</List.Item>
                    <List.Item>Videos</List.Item>
                    <List.Item>Shipping & Returns</List.Item>
                    <List.Item>Terms & Conditions</List.Item>
                    <List.Item>Privacy Policy</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <List>
                    <List.Item>Men</List.Item>
                    <List.Item>Women</List.Item>
                    <List.Item>Kids</List.Item>
                    <List.Item>Brands</List.Item>
                    <List.Item>Sale</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <List>
                    <List.Item>Join our mailing list for updates</List.Item>
                    <List.Item>Sign up to receive our email updates!</List.Item>
                    <Input item label="Join!" labelPosition="right" placeholder="Enter email address"/>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));