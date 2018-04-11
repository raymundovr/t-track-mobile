import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';
import Projects from './src/screens/Projects.js';
import ProjectDetails from './src/screens/ProjectDetails.js';
import CreateProject from './src/screens/CreateProject.js';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const Navigation = StackNavigator(
      {
      Projects: {screen: Projects},
      ProjectDetails: {screen: ProjectDetails},
      CreateProject: {screen: CreateProject}
      },
      {
        headerMode: 'none',
      }
  );
    return (
      this.state.fontLoaded ? <Navigation /> : <View></View>
    );
  }
}
