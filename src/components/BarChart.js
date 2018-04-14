import React from 'react';
import { View, Text } from 'native-base';

export default class BarChart extends React.Component {    

    render() {
        let chartGrid = this.props.data.map((item, index) => {
            return (
                <View key={index}>
                    <Text>{item.label}</Text>
                    <View style={
                        {width: item.value, backgroundColor: item.color, height: 15, borderTopRightRadius: 50, borderBottomRightRadius: 50}
                        }></View>
                </View>
            );
        });
        return (
            <View>
                {chartGrid}
            </View>
        );
    }


}