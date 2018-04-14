import React from 'react';
import { Container, Content, Text, Button } from 'native-base';
import ScreenHeader from '../components/ScreenHeader.js';
import ProjectStorage from '../model/ProjectStorage.js';

export default class DeleteProject extends React.Component {

    deleteProject = () => {
        const { params } = this.props.navigation.state;
        let project = params.project;
        let result = ProjectStorage.deleteProject(project.id);
        if( result && result === true) {
            const {navigate} = this.props.navigation;
            navigate('Projects');
        }
        console.log(result);
    }  

    render () {
        const {goBack} = this.props.navigation;

        return(
            <Container>
                <ScreenHeader title='Delete Project' goBack={goBack} />
                <Content>
                    <Text>Do you really want to delete the project?</Text>
                    <Button full danger onPress={() => {this.deleteProject()}}>
                        <Text>Yes, delete!</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}