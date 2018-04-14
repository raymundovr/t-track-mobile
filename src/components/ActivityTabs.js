import React from 'react';
import { Tabs, Tab } from 'native-base';
import DetailedActivityTab from './DetailedActivityTab.js';

export default class ActivityTabs extends React.Component {
    render() {
        const activities = this.props.activities;

        return(
        <Tabs initialPage={1}>
            <Tab heading="Daily Activity">
            </Tab>
            <Tab heading="Detailed Activity">
                <DetailedActivityTab activities={activities} />
            </Tab>
        </Tabs>
        );
    }
}