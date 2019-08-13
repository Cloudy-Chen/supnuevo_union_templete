/**
 * UnionDiscount.js
 */

// 组件
import React, {Component} from "react";
import {
    Image,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    ListView
} from "react-native";
import {connect} from "react-redux";
import {TopToolBar} from "../../components/TopToolBar";
import {BottomToolBar, ACTION_BACK} from "../../components/BottomToolBar";
import {SCREEN_HEIGHT, SCREEN_WIDTH, getHeaderHeight} from "../../utils/tools";
import constants from '../../resources/constants';

export class OrderRule extends Component {

  constructor(props) {
    super(props);
      this.state = {
      };
  }

  render() {
      return (
          <View style={styles.container}>
              <TopToolBar title = "本店规则" navigation = {this.props.navigation}
                          _onLeftIconPress={this._onVolumeIconPress}
                          _onRightIconPress={this._onHelpIconPress}/>
              {this._renderRulePage()}
              <BottomToolBar navigation = {this.props.navigation}
              leftAction={ACTION_BACK} _onLeftIconPress={this._onBackIconPress}/>
          </View>
      );
  }

    _renderRulePage(){
      return(
          <View style={styles.container}>
          <ScrollView>
              <View style={styles.scrollViewWrapper}>
              <Text style={styles.ruleText}>{constants.rule}</Text>
              </View>
          </ScrollView>
          </View>
      );
  }

  _onVolumeIconPress =() =>{};

  _onHelpIconPress =() =>{};

    _onBackIconPress=() =>this.props.navigation.pop();
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewWrapper:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ruleText:{
        flex:1,
        textAlign:'center',
        fontSize:16,
        marginTop:20,
    }
});

const mapStateToProps = (state) => ({
    auth: state.get('auth'),
    root: state.get('root'),
    data: state.get('data'),
});

export default connect(mapStateToProps)(OrderRule)
