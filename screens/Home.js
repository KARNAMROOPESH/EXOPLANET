import * as React from 'react'
import {View,Text, Button , Alert} from 'react-native'
import { SafeAreaView } from 'react-native';
import axios from "axios";
const cors =  require('cors')

export default class Homescreen extends React.Component{
    constructor(){
        super();
        this.state = {
            data: [],
            uri: "http://127.0.0.1:5000/"
        }
    }
    componentDidMount(){
        this.planetlist();
    }
    planetlist = () =>{
         const {uri} = this.state;
         axios
            .get(uri,cors(),(req, res) => {
                res.json({
                    message: 'Hello World'
                });
            })
            .then(reponse => {
                this.setState({
                    data: response.data.planetdata
                })
                console.log(this.state.data[2])
            })
            .catch(error => {
                Alert.alert(error.message)
            });
    }
    render(){
        return(
            <SafeAreaView>
                <Text>HomeScreen</Text>
                <Button title = {"Press here"} onPress = {()=>{this.props.navigation.navigate("Details")}}/>
            </SafeAreaView>
        )
    }
}