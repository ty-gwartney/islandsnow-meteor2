import React from 'react';
import { Grid, List } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <Grid columns={3} className="footer-background">
          <Grid.Row>
            <Grid.Column className="footer-column">
              <List>
                <List.Item>NAVIGATION</List.Item>
                <hr/>
                <List.Item>About us</List.Item>
                <List.Item>Videos</List.Item>
                <List.Item>Store Locations</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column className="footer-column">
              <List>
                <List.Item>MAIN MENU</List.Item>
                <hr/>
                <List.Item>Men</List.Item>
                <List.Item>Women</List.Item>
                <List.Item>Kids</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column className="footer-column">
              <List>
                <List.Item>CONNECT</List.Item>
                <hr/>
                <List.Item>Sign up for the latest updates</List.Item>
                <div className="ui labeled input">
                  <input type="text" placeholder="Enter email address"/>
                  <div className="ui black label">
                    Join
                  </div>
                </div>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}
