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

export class UnionDiscount extends Component {

  constructor(props) {
    super(props);
      this.state = {
          discountPage : 'http://img.redocn.com/sheji/20180521/chaoshihuiyuantehuifengbaoDMdan_9419131.jpg',
      };
  }

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}

  render() {
      return (
          <View style={styles.container}>
              <TopToolBar title = "折扣" navigation = {this.props.navigation}
                          _onLeftIconPress={this._onVolumeIconPress}
                          _onRightIconPress={this._onHelpIconPress}/>
              {this._renderDiscountPage()}
              <BottomToolBar navigation = {this.props.navigation}
              leftAction={ACTION_BACK} _onLeftIconPress={this._onBackIconPress}/>
          </View>
      );
  }

    _renderDiscountPage(){
      return(
          <ScrollView style={styles.imageWrapper}>
              <Image style={styles.image} source={{uri:this.state.discountPage}} resizeMode={'contain'}/>
          </ScrollView>
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
    imageWrapper:{
        flex: 1,
    },
    image:{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT - getHeaderHeight()*2,
    },
});

const mapStateToProps = (state) => ({
    auth: state.get('auth'),
    root: state.get('root'),
    data: state.get('data'),
});

export default connect(mapStateToProps)(UnionDiscount)
