import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';
import Projects from './src/screens/Projects.js';
import ProjectDetails from './src/screens/ProjectDetails.js';
import CreateProject from './src/screens/CreateProject.js';
import Statistics from './src/screens/Statistics.js';
import DeleteProject from './src/screens/DeleteProject.js';

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
      CreateProject: {screen: CreateProject},
      DeleteProject: {screen: DeleteProject},
      Statistics: {screen: Statistics}
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
