/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,
        StyleSheet,
        Text,
        View,
        TextInput,
        TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            weight: '0',
            height: '0',
            bmi: 0,
            result: ''
        };
        this.compute = this.compute.bind(this);
    }

    compute(){
        let weight = parseFloat(this.state.weight);
        let height = parseFloat(this.state.height);
        let bmi = weight/Math.pow(height/100, 2);

        this.setState({bmi: bmi});
        if (bmi < 18.5){
            this.setState({result: 'Under Weight'});
        }
        else if (bmi >= 18.5 && bmi < 25){
            this.setState({result: 'Normal Weight'});
        }
        else if (bmi >= 25 && bmi < 32){
            this.setState({result: 'Over Weight'});
        }
        else if (bmi >= 32){
            this.setState({result: 'Obese'});
        }
        console.log('myLog', this.state.result);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.group}>
                    <Text style={styles.title}>Weight (KG)</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='numeric'
                        placeholder='Please insert your weight'
                        onChangeText={(weight) => {this.setState({weight: weight})}}/>
                </View>

                <View style={styles.group}>
                    <Text style={styles.title}>Height (CM)</Text>
                    <TextInput
                        style={styles.textInput}
                        keyboardType='numeric'
                        placeholder='Please insert your height'
                        onChangeText={(height) => {this.setState({height: height})}}/>
                </View>

                <View style={styles.center}>
                    <View style={styles.group}>
                        <Text style={styles.title}>BMI: {this.state.bmi.toFixed(2)}</Text>
                    </View>

                    <View style={styles.group}>
                        <Text style={styles.title}>Result: {this.state.result}</Text>
                    </View>

                    <View style={styles.group}>
                        <TouchableOpacity style={styles.button} onPress={this.compute}>
                            <Text style={styles.buttonText}>Compute</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 20
    },

    group: {
        marginTop: 20
    },

    title: {
        fontSize: 25
    },

    buttonText: {
        fontSize: 40
    },

    center: {
        alignItems: 'center'
    },

    textInput: {
        borderColor: '#222222',
        borderWidth: 1,
        padding: 5
    },

    button: {
        backgroundColor: '#2efffc',
        borderColor: '#333333',
        borderWidth: 1,
        padding: 10
    }
});
