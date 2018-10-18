import React from 'react';
import { Dropdown, Grid, Menu, Icon } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Grid className="middle">
          <Grid.Row centered className="middleRow">
            <Menu borderless>

              <Dropdown pointing item text="MENS">
                <Dropdown.Menu>
                  <Dropdown.Item text="TANK TOPS"/>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown pointing item text="WOMENS">
                <Dropdown.Menu>
                  <Dropdown.Item text="TANK TOPS"/>
                </Dropdown.Menu>
              </Dropdown>

              <Menu.Item name="KIDS"/>

              <Dropdown pointint item text="BRANDS">
                <Dropdown.Menu>
                  <Dropdown.Item text="GUCCI"/>
                </Dropdown.Menu>
              </Dropdown>

              <Menu.Item name="SEARCH"/>
              <Icon name="search" id="midIcon"/>

            </Menu>
          </Grid.Row>
        </Grid>
    );
  }
}
