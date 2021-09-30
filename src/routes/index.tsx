import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import ForgetScreen from '../screens/ForgetScreen/ForgetScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen/CreateAccountScreen';
import NewGame from '../screens/NewGame/NewGame';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from "react-redux";
import { RootState } from "../store";
const StackAuth = createStackNavigator();

const authStack = ()=>(
    <StackAuth.Navigator  >
        <StackAuth.Screen name = "Login" component={LoginScreen} options={{headerShown: false}}/>
        <StackAuth.Screen name = "Forget" component={ForgetScreen} options={{headerShown: false}}/>
        <StackAuth.Screen name = "CreateAcc" component={CreateAccountScreen} options={{headerShown: false}}/>
    </StackAuth.Navigator>
)

const TabGames = createBottomTabNavigator()

const GameTabs = ()=>(
    <TabGames.Navigator>
        <TabGames.Screen name="newGame" component = {NewGame} />
    </TabGames.Navigator>
)
const MainStack = createStackNavigator();



const Routes: React.FC=()=>{
const isAuth = useSelector((state: RootState) => state.auth.isLoggedin);
   return (
        <MainStack.Navigator>
            {!isAuth?<MainStack.Screen name= 'AuthFlow' component={authStack}  options={{headerShown: false}}/>
            :<MainStack.Screen name="GameFlow" component={GameTabs} options={{headerShown: false}}/>
            }
        </MainStack.Navigator>
    )
}


export default Routes;