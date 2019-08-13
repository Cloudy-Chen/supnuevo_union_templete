/**
 * OrderCommit.js
 */

// 组件
import React, {Component} from "react";
import {Image, StatusBar, Text, TouchableOpacity, View, Dimensions, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, ScrollView} from "react-native";
import {isEmptyObject, isObject, getHeaderHeight, SCREEN_WIDTH, SCREEN_HEIGHT} from "../../utils/tools";
import {connect} from "react-redux";
import {TopToolBar} from "../../components/TopToolBar";
import IntroDivider from "../shopping/ShoppingList";
import {ACTION_BACK, BottomToolBar,ACTION_HISTORY,ACTION_RULE} from "../../components/BottomToolBar";
import {InformationItem,TYPE_TEXT} from "../../components/InformationItem";
import {Button, CheckBox} from "react-native-elements";
import {DropdownCell, OrderDropdownCell} from "../../components/modalDropdownBar/index";
import colors from '../../resources/colors'
import strings from "../../resources/strings";
import constants from "../../resources/constants";
import TableView from "../../components/TableView";
import order_cart from '../../test/order_cart';
import order_discount from '../../test/order_discount';

export class OrderCommit extends Component {

  constructor(props) {
    super(props);
      this.state = {
          pickChecked:false,
          deliverChecked:false,
      };
  }
    componentWillReceiveProps(nextProps) {
    }

  render() {
    return (
        <View style={styles.container}>
            <TopToolBar title = "订单" navigation = {this.props.navigation}
                        _onLeftIconPress={this._onVolumeIconPress}
                        _onRightIconPress={this._onHelpIconPress}/>
            <ScrollView style={styles.scrollView}>
            <View style={styles.scrollViewContanier}>
            {this._renderBasicInfo()}
            {this._renderDeliverInfo()}
            {this._renderCartInfo()}
            {this._renderDiscountInfo()}
            {this._renderCommitButton()}
            </View>
            </ScrollView>
            <BottomToolBar navigation = {this.props.navigation}
                           leftAction={ACTION_HISTORY}
                           _onLeftIconPress={this._onHistoryIconPress}
                           rightAction={ACTION_RULE}
                           _onRightIconPress={this._onRuleIconPress}
            />
        </View>
        );
  }

  _renderBasicInfo(){
      return(
          <View style={styles.basicInfoContainer}>
              <InformationItem key = {0} type = {TYPE_TEXT} title = {strings.customerMobilePhone} content = {"11549878988"}/>
              <InformationItem key = {1} type = {TYPE_TEXT} title = {strings.deliverMobilePhone} content = {"11436677689"}/>
              <InformationItem key = {2} type = {TYPE_TEXT} title = {strings.deliverAddress} content = {"San Lorenzo 2032"}/>
          </View>
      );
  }

  _renderDeliverInfo(){
      return(
        <View style={styles.deliverInfoCard}>
            <CheckBox title={strings.type_pick} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.pickChecked} onPress={() => this.setState({pickChecked: !this.state.pickChecked})}/>
            <CheckBox title={strings.type_deliver} checkedIcon='dot-circle-o' uncheckedIcon='circle-o' checked={this.state.deliverChecked} onPress={() => this.setState({deliverChecked: !this.state.deliverChecked})}/>
            <OrderDropdownCell defaultValue={strings.deliverAddress_input} dataList={constants.deliverAddressList} onDropDownSelect={this._onDeliverAddressSelect} onButtonPress={this._onDeliverAddressPress}/>
            <OrderDropdownCell defaultValue={strings.pickMobile_input} dataList={constants.pickMobileList} onDropDownSelect={this._onPickMobileSelect} onButtonPress={this._onPickMobilePress}/>
            <OrderDropdownCell defaultValue={strings.pickName_input} dataList={constants.pickNameList} onDropDownSelect={this._onPickNameSelect} onButtonPress={this._onPickNamePress}/>
        </View>
      );
  }

     _renderCartInfo(){
         return(
             <View style={styles.tableInfoCard}>
                 <TableView title={strings.cartInfo} headerList={constants.cartHeaderList} dataList={order_cart} renderAux={this._renderCartAux}/>
             </View>
         );
     }

     _renderCartAux(){
      return(
          <View style={styles.auxContainerStyle}>
              <Text style={styles.auxTextStyle}>Total: 3420.00</Text>
          </View>
      );
     }

    _renderDiscountInfo(){
        return(
            <View style={styles.tableInfoCard}>
                <TableView title={strings.discountInfo} headerList={constants.discountHeaderList} dataList={order_discount} renderAux={this._renderDiscountAux}/>
            </View>
        );
    }

    _renderDiscountAux(){
        return(
            <View style={styles.auxContainerStyle}>
                <Text style={styles.auxTextStyle}>折扣减免总计: -121.00</Text>
                <Text style={styles.auxTextStyle}>实际付款总计: 3299.00</Text>
            </View>
        )
    }

    _renderCommitButton(){
      return(
          <View style={styles.commitBtnWrapper}>
              <Button title={strings.commit} buttonStyle={styles.commitBtn} onPress={this._onCommitPress}/>
          </View>
      )
    };

    _onDeliverAddressSelect = (idx, value) => {};

    _onPickMobileSelect = (idx, value) => {};

    _onPickNameSelect = (idx, value) => {};

    _onDeliverAddressPress = () => {};

    _onPickMobilePress = () => {};

    _onPickNamePress = () => {};

    _onCommitPress = () => {};

    _onHistoryIconPress =() =>{this.props.navigation.push("OrderHistory");};

    _onRuleIconPress =()=>{this.props.navigation.push("OrderRule");};
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    scrollView:{
      marginBottom: getHeaderHeight(),
    },
    scrollViewContanier:{
        alignItems: 'center',

    },
    basicInfoContainer:{
        flex:1
    },
    deliverInfoCard:{
        width:SCREEN_WIDTH-40,
        flex:1,
        borderColor:colors.primaryGray,
        borderWidth:1,
        borderRadius:10,
        marginTop: 10,
    },
    tableInfoCard:{
        width:SCREEN_WIDTH-40,
        flex:1,
        borderColor:colors.primaryGray,
        borderWidth:1,
        borderRadius:10,
        marginTop: 10,
    },
    auxContainerStyle:{
        flex:1,
        width:"100%",
        justifyContent:'flex-end',
        padding:5,
        flexDirection: 'column'
    },
    auxTextStyle:{
        flex:1,
        textAlign: 'right'
    },
    commitBtnWrapper:{
        width:SCREEN_WIDTH,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    commitBtn: {
        width:200,
        backgroundColor:colors.primaryColor
    }
});

const mapStateToProps = (state) => ({
    auth: state.get('auth'),
    root: state.get('root'),
    data: state.get('data'),
});

export default connect(mapStateToProps)(OrderCommit)
