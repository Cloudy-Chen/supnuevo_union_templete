/**
 * DataForm.js
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
import {BottomToolBar} from "../../components/BottomToolBar";
import unions from "../../test/unions";
import {Avatar, Badge, ListItem} from "react-native-elements";
import colors from "../../resources/colors";
import {SCREEN_WIDTH} from "../../utils/tools";
import ShoppingCart from "../../components/ShoppingCart";
import {AISearchBar} from "../../components/AIServer";
import IntroDivider from "../../components/IntroDivider";
import goods from "../../test/goods";
import cart from '../../test/cart';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export class ShoppingList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartList: cart,
            searchText: '',
            searchResult: [],
            showSearchResult:false,
        };
    }

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}

    render() {
        const cartList = this.state.cartList;
        const cartNumber = cartList.length;

        return (
            <View style={styles.container}>
                <TopToolBar title = "购物" navigation = {this.props.navigation}
                            _onLeftIconPress={this._onVolumeIconPress}
                            _onRightIconPress={this._onHelpIconPress}/>
                <IntroDivider intro={"您的购物车共有"+cartNumber+"件商品"} />
                {this._renderShoppingCart()}
                {this._renderSearchBar()}
                {this._renderPriceList()}
                <BottomToolBar navigation = {this.props.navigation}/>
            </View>
        );
    }

    _renderShoppingCart(){
        return(
            <ShoppingCart
                cartList={this.state.cartList}
                onUpSwipe={this._onUpSwipe}
                onDownSwipe={this._onDownSwipe}
                onLeftSwipe={this._onLeftSwipe}
                onRightSwipe={this._onRightSwipe}
            />
        );
    }

    _renderSearchBar(){
        return(
            <AISearchBar
                _onMicrophonePress={this._onMicrophonePress}
                _searchTextChange={(text) => this._searchTextChange(text)}
                _onSearchResultPress={this._onSearchResultPress}
                showSearchResult = {false}
                searchResult = {this.state.searchResult}
                searchText = {this.state.searchText}
            />
        );
    }

    _renderPriceList(){

        var priceList = [];
        goods.map((good,i)=>{
            if(good.name.indexOf(this.state.searchText) !== -1)priceList.push(good);
        })

        return(
            <View style={styles.listViewWrapper}>
                <ListView
                    style={styles.listView}
                    automaticallyAdjustContentInsets={false}
                    dataSource={ds.cloneWithRows(priceList)}
                    renderRow={this._renderItem}/>
            </View>
        );
    }

    _renderItem = (rowData,sectionId,rowId) => {
        return (
            <ListItem
                leftElement={<Image source={{uri:rowData.thumburl}} style={styles.image}/>}
                title={rowData.name}
                subtitle={rowData.price}
                subtitleStyle={styles.subtitleText}
                style={styles.listItemStyle}
                badge={{ value: rowData.discount, status: 'warning'}}/>
        );
    };

    _onVolumeIconPress =() =>{};

    _onHelpIconPress =() =>{};

    _onMicrophonePress = ()=>{};

    _onUpSwipe =()=>{};

    _onDownSwipe =()=>{};

    _onLeftSwipe =()=>{};

    _onRightSwipe =()=>{};

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
        fontSize:16,
        color: colors.brightRed,
        marginTop:10,
    }
});

const mapStateToProps = (state) => ({
    auth: state.get('auth'),
    root: state.get('root'),
    data: state.get('data'),
});

export default connect(mapStateToProps)(ShoppingList)
