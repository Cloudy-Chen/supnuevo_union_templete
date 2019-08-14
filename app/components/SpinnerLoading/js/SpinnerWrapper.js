import Spinner from 'react-native-loading-spinner-overlay';
import CommonLoading from './CommonLoading';
import React from "react";
import {Platform} from "react-native";

export default class SpinnerWrapper extends React.PureComponent {

    render() {

        const {loading, title} = this.props;

        return (
            <Spinner
                customIndicator={<CommonLoading hideBackground title={title}/>}
                overlayColor="rgba(0, 0, 0, 0)"
                size="large"
                visible={loading}
            />
        );
    }
}
