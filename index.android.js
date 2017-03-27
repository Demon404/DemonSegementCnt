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
      segValue: ['一', '二', '三', '四'],
    };
  }
  _getIndex(index) {
    // alert(index);
  }

  render() {

    return (
      <View style={styles.container}>
          <SegementCnt componentArray={this.state.segValue} //The itemArray
                        backGroundStyle={{marginTop:100,marginLeft:10}} //The segement site
                        itemWidth={60} //One item width && width is itemWidth * array.length
                        itemHeight={30}//
                        valueSize={20}//The item text fontSize
                        backgroundColor='green'
                        textColor='orange'
                        valueIndex={2}//Set the default item
                        getIndex={(index)=>{this._getIndex(index)}}//The method of how to get index
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