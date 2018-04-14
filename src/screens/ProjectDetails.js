import React from 'react';
import { Container, Header, Body, Title, Left, Button, Icon, Text, Right, Content, H1, H3, View, List, ListItem } from 'native-base';
import ScreenHeader from '../components/ScreenHeader.js';
import ProjectStorage from '../model/ProjectStorage.js';
import TimeUtils from '../utils/TimeUtils.js';
import DetailedActivityTab from '../components/DetailedActivityTab.js';

export default class ProjectDetails extends React.Component {
    constructor(props) {
        super(props);      
        const { params } = this.props.navigation.state;
        this.project = params.project;  
        this.state = {
            timerActive: false,
            activities: this.project.activities,
            currentActivity: {},
            elapsed: this.project.elapsed,
        };
        this.elapsedActivity = 0;
        this.forceUpdateInterval = null;
        this.activityStartedOn = null;
    }    

    startTimerAction = () => {
        this.activityStartedOn = new Date();
        var currentActivity = {date: this.activityStartedOn.toString(), elapsed: 0};
        var activities = this.state.activities;
        activities.push(currentActivity);
        this.setState({
            timerActive: true,            
            currentActivity: currentActivity,
            activities: activities            
        });        
        this.elapsedActivity = this.state.elapsed;
        this.forceUpdateInterval = setInterval(this.increaseElapsed, 1000);
    }

    stopTimerAction = () => {
        this.setState({timerActive: false});
        var currentActivity = this.state.currentActivity;
        currentActivity.elapsed = this.state.elapsed - this.elapsedActivity;
        clearInterval(this.forceUpdateInterval);
        //Updating Project
        ProjectStorage.updateProject(this.project.id, { elapsed: this.state.elapsed, activities: this.state.activities });        
    }

    increaseElapsed = () => {
        let now = new Date();
        let secondsElapsed = (now.getTime() - this.activityStartedOn.getTime()) / 1000;
        this.setState((prevState) => { return { elapsed: Math.floor(this.elapsedActivity + secondsElapsed) }});
        //this.forceUpdate();
    }   

    render() {                
        const { params } = this.props.navigation.state;
        const { navigate } = this.props.navigation;
        const goBack = () => {navigate('Projects')};
        let timerActionButton = null;    
        let activitiesList = []; 
        let project = params.project;
        let elapsedTime = TimeUtils.formatElapsed(this.state.elapsed);        

        if(this.state.timerActive) {
            timerActionButton = <Button iconLeft danger onPress={this.stopTimerAction}>
                <Icon name="stopwatch" />
                <Text>Stop</Text>
                </Button>;
        }
        else {
            timerActionButton = <Button iconLeft success onPress={this.startTimerAction}>
                    <Icon name="play" />
                    <Text>Start</Text>
                </Button>;
        }

        activitiesList = this.state.activities.map((activity, index) => {
            let activityDate = new Date(activity.date);
            return (
            <ListItem key={index}>
                <Body>
                    <Text>Spent {TimeUtils.formatElapsed(activity.elapsed)}</Text>
                    <Text>On {activityDate.toDateString()} at {activityDate.toLocaleTimeString()}</Text>
                </Body>    
            </ListItem>
            );
        });

        return(
            <Container>
                <ScreenHeader goBack={goBack} title={project.name} />
                <Content style={{padding: 10}}>
                    <H3 style={{ alignSelf: "center" }}>Currently elapsed: </H3>
                    <H1 style={{ alignSelf: "center", color: "green"}}>{elapsedTime}</H1>
                    <View style={{alignSelf: "center", marginTop: 10, marginBottom: 10}}>
                        {timerActionButton}
                    </View>
                    <DetailedActivityTab activities={this.state.activities} />                    
                    
                    {/* 
                    <View>                        
                    <List>
                        <ListItem itemDivider>
                        <H3>History</H3>                            
                        </ListItem> 
                        {activitiesList}
                    </List> </View>*/}
                    
                </Content>      
            </Container>
        );
    }
}