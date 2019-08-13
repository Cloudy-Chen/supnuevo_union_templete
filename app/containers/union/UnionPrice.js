/**
 * UnionPrice.js
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
import {ACTION_BACK, BottomToolBar} from "../../components/BottomToolBar";
import goods from "../../test/goods";
import {Avatar, ListItem} from "react-native-elements";
import colors from "../../resources/colors";
import {SCREEN_WIDTH} from "../../utils/tools";
import {AIAnswerBoard, AISearchBar} from '../../components/AIServer/index';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export class UnionList extends Component {

  constructor(props) {
    super(props);
      this.state = {
          searchText: '',
          showSearchResult: false,
          searchResult: [],
          selectedPrice: null,
      };
  }

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}

  render() {
      return (
          <View style={styles.container}>
              <TopToolBar title = "价格表" navigation = {this.props.navigation}
                          _onLeftIconPress={this._onVolumeIconPress}
                          _onRightIconPress={this._onHelpIconPress}/>
              {this._renderSearchBar()}
              {this._renderPriceList()}
              <BottomToolBar navigation = {this.props.navigation}
                             leftAction={ACTION_BACK}
                             _onLeftIconPress={this._onBackIconPress}/>
          </View>
      );
  }

    _renderSearchBar(){
      return(
          <AISearchBar
              _onMicrophonePress={this._onMicrophonePress}
              _searchTextChange={(text) => this._searchTextChange(text)}
              _onSearchResultPress={this._onSearchResultPress}
              showSearchResult = {this.state.showSearchResult}
              searchResult = {this.state.searchResult}
              searchText = {this.state.searchText}
          />
      );
  }

    _renderPriceList(){
        return(
            <View style={styles.listViewWrapper}>
                <ListView
                    style={styles.listView}
                    automaticallyAdjustContentInsets={false}
                    dataSource={ds.cloneWithRows(goods)}
                    renderRow={this._renderItem}/>
            </View>
        );
    }

    _renderItem = (rowData,sectionId,rowId) => {
        return (
            <ListItem
                leftElement={<Image source={{uri:rowData.thumburl}} style={styles.image}/>}
                title={rowData.name}
                subtitle={rowData.codigo}
                subtitleStyle={styles.subtitleText}
                style={styles.listItemStyle}/>
        );
    };

    _onVolumeIconPress =() =>{};

    _onHelpIconPress =() =>{};

    _onMicrophonePress = ()=>{};

    _onBackIconPress = ()=>{this.props.navigation.pop()};

    _searchTextChange = (text) => {
        this.setState({searchText: text,showSearchResult: true});
        if (!text) {
            this._clearSearchInput()
            return;
        }
        this._searchResultOfText(text);
    };

    _searchResultOfText = (text)=>{
        var searchResult = [];
        goods.map((good,i)=>{
            if(good.name.indexOf(text)!=-1){
                searchResult.push(good);
            }
        });
        this.setState({searchResult:searchResult})
    };

    _onSearchInputFocus = () => this.setState({showSearchResult:true})

    _clearSearchInput = () => this.setState({searchText: '', showSearchResult: false,})

    _onSearchResultPress = (item) => {
        this.setState({
            searchText: item.name,
            showSearchResult: false,
            selectedPrice: item,
        })
    }

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
    },
    subtitleText:{
        fontSize:14,
        color: colors.primaryGray
    }
});

const mapStateToProps = (state) => ({
    auth: state.get('auth'),
    root: state.get('root'),
    data: state.get('data'),
});

export default connect(mapStateToProps)(UnionList)
