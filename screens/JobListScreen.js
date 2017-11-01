import * as firebase from 'firebase';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
    ScrollView,
} from 'react-native';
import { FontAwesome, Foundation } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import NavBar from '../components/NavBar';

export default class JobList extends Component {
    render() {
        const jobListView = (
            <View>
                <View style={styles.jobList_item}>
                    <View style={styles.jobList_item_bottom}>
                        <TouchableHighlight
                            underlayColor={Colors.white1}
                            activeOpacity={0.5}
                            style={styles.jobList_item_button}
                            onPress={() => this.props.navigation.navigate('JobDetail')}
                            accessibilityLabel="View job details"
                        >
                            <Foundation
                                name="indent-more"
                                style={styles.jobList_item_button_icon}
                            />
                        </TouchableHighlight>
                    </View>
                </View>
                {/* <View style={styles.jobList_item_tag}>
                    <TouchableHighlight
                        underlayColor={Colors.red1}
                        activeOpacity={0.5}
                        style={styles.jobList_item_tag_button}
                        onPress={() => this.props.navigation.navigate('BidDetail')}
                        accessibilityLabel="Contact Button"
                    >
                        <Text style={styles.jobList_item_tag_button_text}>
                            VIEW BID
                        </Text>
                    </TouchableHighlight>
                </View> */}
            </View>
        );
        return (
            <View>
                <NavBar
                    title="My Jobs"
                    navigation={this.props.navigation}
                    rightButton={
                        <TouchableHighlight
                            underlayColor={Colors.red1}
                            activeOpacity={0.5}
                            onPress={() => this.props.navigation.navigate('Upload')}
                        >
                            <FontAwesome
                                name="plus"
                                style={styles.plus}
                            />
                        </TouchableHighlight>
                    }
                />
                <ScrollView>
                    {jobListView}
                    {jobListView}
                    {jobListView}
                    {jobListView}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    jobList_item: {
        width: Layout.window.width,
        height: Layout.window.height * 0.3,
        backgroundColor: Colors.white1,
        flex: 1,
        flexDirection: 'row',
    },
    jobList_item_bottom: {
        flex: 1,
        alignSelf: 'flex-end',
        padding: 5,
    },
    jobList_item_button: {
        flex: 1,
        backgroundColor: Colors.red1,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
    },
    jobList_item_button_icon: {
        color: Colors.white1,
        alignSelf: 'center',
        padding: 5,
        fontSize: 30,
    },
    jobList_item_tag: {
        width: Layout.window.width,
    },
    jobList_item_tag_button: {
        flex: 1,
        height: 40,
        width: Layout.window.width - 10,
        backgroundColor: Colors.black1,
        margin: 5,
        alignSelf: 'flex-end',
    },
    jobList_item_tag_button_text: {
        alignSelf: 'center',
        color: Colors.white1,
        fontFamily: 'os extra bold',
        lineHeight: 40,
    },
    jobList_placeholder: {
        flex: 2,
        borderTopWidth: 0.5,
        borderTopColor: Colors.gray2,
        alignSelf: 'flex-end',
        height: 40,
    },
    plus: {
        fontSize: 30,
        marginTop: 5,
        color: Colors.white1,
        marginRight: 20,
    },
});

JobList.propTypes = {
    navigation: PropTypes.object.isRequired,
};
