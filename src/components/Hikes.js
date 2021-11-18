import React from "react";
import Hike from "./Hike";
import Row from "react-bootstrap/Row";
import MapContainer from './GoogleMapComponent';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function Hikes(props) {
  const { hikes, list = null } = props;
  const hikeList = hikes.map((hike) => {
    return <Hike key={hike.id} hike={hike} list={list} />;
  });

  return (
    <>
      <Tabs>
        <TabList className="nav nav-tabs">
          <Tab className="border nav-link nav-item color-dark react-tabs__tab--selected" selectedClassName="active font-weight-bolder">Map View</Tab>
          <Tab className="border nav-link nav-item color-dark react-tabs__tab--selected" selectedClassName="active font-weight-bolder">List View</Tab>
        </TabList>
        <TabPanel>
          <MapContainer hikes={hikes} />
          <br></br>
        </TabPanel>
        <TabPanel>
          <Row className="hike-cards-row">
            {hikeList}
          </Row>
        </TabPanel>
      </Tabs>
    </>
  );
}
