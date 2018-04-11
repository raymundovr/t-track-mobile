import React from 'react';
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base';

export default class ScreenHeader extends React.Component {
    render() {        
        return (
            <Header>
                    <Left>
                        <Button iconLeft onPress = {() => this.props.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body><Title>{this.props.title}</Title></Body>
                    <Right/>
            </Header>  
        );
    }
}