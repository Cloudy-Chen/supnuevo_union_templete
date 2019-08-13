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
import {InputWithCalendar} from '../../components/multiFuncTextInput/index';
import strings from "../../resources/strings";
import TableView from "../../components/TableView";
import constants from "../../resources/constants";
import order_cart from "../../test/order_cart";
import colors from "../../resources/colors";
import {CheckBox} from "react-native-elements";
import {OrderDropdownCell} from "../../components/modalDropdownBar";
import {InformationItem, TYPE_TEXT} from "../../components/InformationItem";

export class OrderHistory extends Component {

  constructor(props) {
    super(props);
      this.state = {
          orderHistory:'请输入订单日期'
      };
  }

  render() {
      return (
          <View style={styles.container}>
              <TopToolBar title = "历史订单" navigation = {this.props.navigation}
                          _onLeftIconPress={this._onVolumeIconPress}
                          _onRightIconPress={this._onHelpIconPress}/>
              <ScrollView>
              <View style={styles.scrollViewContanier}>
              <InputWithCalendar
                  title={strings.orderHistoryInput}
                  date={this.state.orderHistory}
                  onDateChange={(value)=>{
                      this.setState({orderHistory:value});
                  }}/>
              {this._renderBasicInfo()}
              {this._renderOrderHistoryInfo()}
              </View>
              </ScrollView>
              <BottomToolBar navigation = {this.props.navigation}
              leftAction={ACTION_BACK} _onLeftIconPress={this._onBackIconPress}/>
          </View>
      );
  }

    _renderBasicInfo(){
        return(
            <View style={styles.basicInfoContainer}>
                <InformationItem key = {0} type = {TYPE_TEXT} title = {strings.customerMobilePhone} content = {"11549878988"}/>
                <InformationItem key = {1} type = {TYPE_TEXT} title = {strings.deliverMobilePhone} content = {"11436677689"}/>
                <InformationItem key = {2} type = {TYPE_TEXT} title = {strings.deliverAddress} content = {"San Lorenzo 2032"}/>
                <InformationItem key = {3} type = {TYPE_TEXT} title = {strings.pickMobilePhone} content = {"114399892990"}/>
                <InformationItem key = {4} type = {TYPE_TEXT} title = {strings.pickName} content = {"Fernando laguna"}/>
            </View>
        );
  }

    _renderOrderHistoryInfo(){
        return(
            <View style={styles.tableInfoCard}>
                <TableView title={strings.orderInfo} headerList={constants.cartHeaderList} dataList={order_cart} renderAux={null}/>
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
    basicInfoContainer:{
        flex:1
    },
    scrollViewContanier:{
        alignItems: 'center',
    },
    tableInfoCard:{
        width:SCREEN_WIDTH-40,
        flex:1,
        borderColor:colors.primaryGray,
        borderWidth:1,
        borderRadius:10,
        marginTop: 10,
    },
});

const mapStateToProps = (state) => ({
    auth: state.get('auth'),
    root: state.get('root'),
    data: state.get('data'),
});

export default connect(mapStateToProps)(OrderHistory)
