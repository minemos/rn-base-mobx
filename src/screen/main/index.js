import { inject } from 'mobx-react';
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

@inject('SampleStore')
class MainScreen extends React.Component {
  componentDidMount() {
    this.props.SampleStore.get();
  }
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>메인스크린</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default MainScreen;
