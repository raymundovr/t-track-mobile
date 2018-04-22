import React from 'react';
import { List, ListItem, Left, Body, Text, H3, Right, View, H1 } from 'native-base';

export default class ActivitiesList extends React.Component {
    render() {
        let activitiesItems = this.props.activities.map((activity, index) => {
            return(
            <ListItem key={'activity-'+index}>
                <Left>
                    <H1>{activity.date}</H1>
                    <Text>{'\n'}</Text>
                    <Text>{activity.month}</Text>
                </Left>
                <Body><Text>{activity.spent}</Text></Body>      
                <Right />                  
            </ListItem>
            );
        });
        return(
            <View>
            <H3>History</H3>
            <List>
                {activitiesItems}         
            </List>
            </View>
        );
    }
}