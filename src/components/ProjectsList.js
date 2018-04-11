import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Card, CardItem, Icon, Text, Left, Right, Button, List, ListItem, Body, H3 } from 'native-base';
import TimeUtils from '../utils/TimeUtils';

export default class ProjectsList extends React.Component {
    render() {        
        var items = this.props.items.map(
            (item, index) => { 
                let startDate = new Date(item.startedOn);
                return (
                    <TouchableHighlight key={index} 
                    onPress={ () => this.props.navigate('ProjectDetails', { project: item, goBackKey: this.props.goBackKey })}>
                    <CardItem>
                        <Body>
                            <H3>{item.name}</H3>      
                            <Text note>Minutes spent: {TimeUtils.formatElapsed(item.elapsed)}</Text>               
                            <Text note>Started on: {startDate.toDateString()}</Text> 
                        </Body>    
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>            
                </TouchableHighlight>
                );
            });        
        return (            
        <Card>
            {items}
        </Card> 
        );      
    }
}