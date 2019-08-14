/**
 * UnionMemberList.js
 */

// 组件
import React, {Component} from "react";
import {
    Image,
    View,
    StyleSheet,
    ListView
} from "react-native";
import {connect} from "react-redux";
import {TopToolBar} from "../../components/TopToolBar";
import {ACTION_DISCOUNT, ACTION_PRICE, BottomToolBar} from "../../components/BottomToolBar";
import unionMembers from "../../test/unionMembers";
import {Avatar, Icon, ListItem} from "react-native-elements";
import colors from "../../resources/colors";
import {SCREEN_WIDTH, showCenterToast} from "../../utils/tools";
import {MicrosoftMap} from "../../components/rnMap";
import * as unionActions from "../../actions/union-actions";
import constants from "../../resources/constants";
import strings from "../../resources/strings";

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export class UnionMemberList extends Component {

  constructor(props) {
    super(props);
      this.state = {
          selectedMemberId:1,
      };
  }

    componentDidMount() {
      const union = this.props.navigation.state.params.union;
      this.props.dispatch(unionActions.getUnionMemberList(union.unionId));
    }

    componentWillReceiveProps(nextProps) {
        const Response = this.props.union.get('dataResponse');
        const nextResponse = nextProps.union.get('dataResponse');

        if (Response === constants.INITIAL && nextResponse === constants.GET_UNION_MEMBER_LIST_SUCCESS) {
            this.props.dispatch(unionActions.resetUnionResponse());
        }else if (Response === constants.INITIAL && nextResponse === constants.GET_UNION_MEMBER_LIST_FAIL){
            showCenterToast(strings.getUnionMemberListFail);
            this.props.dispatch(unionActions.resetUnionResponse());
        }
    }

  render() {

      const union = this.props.navigation.state.params.union;
      const merchants = this.props.union.get("merchants");

      return (
          <View style={styles.container}>
              <TopToolBar title = {union.unionName} navigation = {this.props.navigation}
                          _onLeftIconPress={this._onVolumeIconPress}
                          _onRightIconPress={this._onHelpIconPress}/>
              {this._renderMap(merchants)}
              {this._renderUnionList(merchants)}
              <BottomToolBar navigation = {this.props.navigation}
                             leftAction = {ACTION_DISCOUNT}
                             _onLeftIconPress = {this._onDiscountPress}
                             rightAction = {ACTION_PRICE}
                             _onRightIconPress = {this._onPricePress}/>
          </View>
      );
  }

  _renderMap(merchants){
      return (
          <MicrosoftMap/>
      );
  }

  _renderUnionList(merchants){
      return(
          <View style={styles.listViewWrapper}>
              <ListView
                  style={styles.listView}
                  automaticallyAdjustContentInsets={false}
                  dataSource={ds.cloneWithRows(merchants)}
                  renderRow={this._renderItem}/>
          </View>
      );
  }

    _renderItem = (rowData,sectionId,rowId) => {
        const image = rowData.image && rowData.image!==undefined?{uri:rowData.image}:require('../../assets/img/img_logo.png')
        return (
            <ListItem
                leftElement={<Image source={image} style={styles.image}/>}
                rightIcon={rowData.memberId === this.state.selectedMemberId?<Icon name='md-checkmark' type='ionicon' color={colors.primaryGray}/>:null}
                title={rowData.address}
                style={styles.listItemStyle}
                onPress={()=>this._onUnionMember(rowData)}/>
        );
    };

  _onVolumeIconPress =() =>{};

  _onHelpIconPress =() =>{};

  _onDiscountPress =() =>{this.props.navigation.push("UnionDiscount")};

  _onPricePress =() =>{this.props.navigation.push("UnionPrice")};

  _onUnionMember =(member) =>{this.setState({selectedMemberId:member.memberId})};

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    listViewWrapper:{
        width:SCREEN_WIDTH,
        flex:1,
    },
    listView:{
        flex:1,
    },
    listItemStyle:{
        flex:1,
        borderBottomWidth: 0.8,
        borderColor: colors.saperatorLine,
    },
    image:{
        width:90,
        height:60,
    }
});

const mapStateToProps = (state) => ({
    auth: state.get('auth'),
    root: state.get('root'),
    union: state.get('union'),
});

export default connect(mapStateToProps)(UnionMemberList)
