/**
 * DataForm.js
 */
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
import {BottomToolBar} from "../../components/BottomToolBar";
import unions from "../../test/unions";
import {Avatar, ListItem} from "react-native-elements";
import colors from "../../resources/colors";
import constants from "../../resources/constants";
import {SCREEN_WIDTH} from "../../utils/tools";

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export class UnionList extends Component {

  constructor(props) {
    super(props);
      this.state = {
      };
  }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {}

  render() {
      const unions = this.props.union.get("unions");

      return (
          <View style={styles.container}>
              <TopToolBar title = {constants.Title_UnionList}
                          navigation = {this.props.navigation}
                          _onLeftIconPress={this._onVolumeIconPress}
                          _onRightIconPress={this._onHelpIconPress}/>
              {this._renderUnionList()}
              <BottomToolBar navigation = {this.props.navigation}/>
          </View>
      );
  }

  _renderUnionList(){
      return(
          <View style={styles.listViewWrapper}>
              <ListView
                  style={styles.listView}
                  automaticallyAdjustContentInsets={false}
                  dataSource={ds.cloneWithRows(unions)}
                  renderRow={this._renderItem}/>
          </View>
      );
  }

    _renderItem = (rowData,sectionId,rowId) => {
        return (
            <ListItem
                leftElement={<Image source={{uri:rowData.pictureurl}} style={styles.image}/>}
                title={rowData.unionName}
                style={styles.listItemStyle}
                chevron
                onPress={()=>this._onUnionPress(rowData)}/>
        );
    };

  _onVolumeIconPress =() =>{};

  _onHelpIconPress =() =>{};

  _onUnionPress =(union) =>this.props.navigation.push("UnionMemberList",{union:union});

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

export default connect(mapStateToProps)(UnionList)
