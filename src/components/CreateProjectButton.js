import React from 'react';
import { Button, Text, Icon } from 'native-base';

export default class CreateProjectButton extends React.Component {
    render() {
        return (
            <Button full success onPress={ () => this.props.navigate('CreateProject')}>
                <Icon name='add-circle' />
                <Text>Create Project</Text>
            </Button>
        );
    }
}