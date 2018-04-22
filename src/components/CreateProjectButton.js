import React from 'react';
import { Button, Text, Icon } from 'native-base';

export default class CreateProjectButton extends React.Component {
    render() {
        return (
            <Button success onPress={ () => this.props.navigate('CreateProject')}>
                <Icon style={{color: '#FFF'}} name='add-circle' />
                <Text style={{color:'#FFF'}}>Create Project</Text>
            </Button>
        );
    }
}