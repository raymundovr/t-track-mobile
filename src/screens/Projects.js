import React from 'react';
import { Container, Content, Header, Body, Footer, Title, FooterTab } from 'native-base';
import ProjectsList from '../components/ProjectsList.js';
import CreateProjectButton from '../components/CreateProjectButton.js';
import Project from '../entity/Project.js';
import ProjectStorage from '../model/ProjectStorage.js';

export default class Projects extends React.Component {
    constructor(props)
    {
      super(props);
      this.state ={
          currentProjects: [],
      };  
    }
    async componentWillMount() {
        ProjectStorage.getAllProjects().then((result) => {
            if( result !== false) {
                let projects = result.map((project) => {
                    return JSON.parse(project[1]);
                });
                this.setState({
                    currentProjects: projects
                });
                this.forceUpdate();
            }
        }).catch((error) => {
            console.log(error);
        })
        ;        
        
    }

    render() {
        const {state, navigate} = this.props.navigation;
        return(
            <Container>
                <Header>                
                    <Body>
                        <Title>Projects</Title>
                    </Body>    
                </Header>
                <Content>
                    <ProjectsList items={this.state.currentProjects} navigate={navigate} />        
                </Content>     
                <Footer>
                    <FooterTab>
                        <CreateProjectButton navigate={navigate}/>
                    </FooterTab>
                </Footer>                    
            </Container>
        );
    }
}