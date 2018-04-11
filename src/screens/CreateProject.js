import React from 'react';
import ScreenHeader from '../components/ScreenHeader.js';
import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';
import Project from '../entity/Project.js';
import ProjectStorage from '../model/ProjectStorage.js';

export default class CreateProject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {projectName: ''}
    }

    createProject = () => {
        let newProject = Project.createProject(this.state.projectName);
        //Store Project
        ProjectStorage.createProject(newProject).then((result) =>{
            console.log(result);
            //Forward
            if( result === true ) {
                const {navigate} = this.props.navigation;
                navigate('ProjectDetails', {project: newProject});
            }
        });        
    }

    render() {
        const { goBack } = this.props.navigation;
        return(
            <Container>
                <ScreenHeader goBack={goBack} title={'Create Project'} />
                <Content>
                    <Form style={{marginVertical: 10}}>
                        <Item>
                            <Input placeholder={'Project Name'} 
                                    onChangeText={ (projectName) => this.setState({projectName}) } 
                                    value={this.state.projectName}
                            />
                        </Item>                        
                    </Form>    
                    <Button full onPress={this.createProject}><Text>Create!</Text></Button>
                </Content>    
            </Container>
        );
    }
}