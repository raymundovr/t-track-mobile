import React from 'react';
import { Container, Header, Content, Footer } from 'native-base';
import BarChart from '../components/BarChart.js';
import ScreenHeader from '../components/ScreenHeader.js';

export default class Statistics extends React.Component {

    render () {
        let data = [
            {label: 'One', value: 1000, color: 'green'},
            {label: 'Two', value: 2000, color: 'red'},
        ];

        const {goBack, navigate} = this.props.navigation; 

        return (
            <Container>
                <ScreenHeader title={'Statistics'} goBack={goBack} />                
                <Content>
                    <BarChart data={data} />
                </Content>
                <Footer></Footer>
            </Container>
        );
    }
}