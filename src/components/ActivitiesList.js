import React from 'react';
import { List, ListItem, Left, Body, Text, H3, Right, View } from 'native-base';

export default class ActivitiesList extends React.Component {
    render() {
        let activitiesItems = this.props.activities.map((activity, index) => {
            return(
            <ListItem key={'activity-'+index}>
                <Left><Text note>{activity.date}</Text></Left>
                <Body><Text>{activity.spent}</Text></Body>      
                <Right />                  
            </ListItem>
            );
        });
        return(
            <View>
            <H3>Activity</H3>
            <List>
                {activitiesItems}         
            </List>
            </View>
        );
    }
}