import React from 'react';
import { Footer, FooterTab, Button, Text, Icon } from 'native-base';

export default class Navigation extends React.Component {
    render() {
        const navigate = this.props.navigate;

        return (
            <Footer>
                <FooterTab>
                    <Button vertical>
                        <Icon name="apps" />
                        <Text>Projects</Text>
                    </Button>                        
                </FooterTab>
                <FooterTab>
                    <Button vertical onPress={() => { navigate('Statistics') }}>
                        <Icon name="analytics" />
                        <Text>Statistics</Text>
                    </Button>                        
                </FooterTab>
            </Footer>
        );
    }
}