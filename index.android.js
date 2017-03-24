/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SegementCnt from 'react-native-segmentctl';
export default class DemonSegementCnt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      segValue: ['dasd', '贞德大是哦的', 'dhisao', 'diow'],
    };
  }
  _getIndex(index) {
    // alert(index);
  }

  render() {

    return (
      <View style={styles.container}>
          <SegementCnt componentArray={this.state.segValue} 
                        backGroundStyle={{marginTop:100,marginLeft:10}}
                        itemWidth={60}
                        itemHeight={30}
                        valueSize={20}
                        backgroundColor='green'
                        textColor='orange'
                        valueIndex={2}
                        getIndex={(index)=>{this._getIndex(index)}}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('DemonSegementCnt', () => DemonSegementCnt);