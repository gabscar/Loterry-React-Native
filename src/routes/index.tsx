import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import ForgetScreen from '../screens/ForgetScreen/ForgetScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen/CreateAccountScreen';


const StackAuth = createStackNavigator();

const authStack = ()=>(
    <StackAuth.Navigator  >
        <StackAuth.Screen name = "Login" component={LoginScreen} options={{headerShown: false}}/>
        <StackAuth.Screen name = "Forget" component={ForgetScreen} options={{headerShown: false}}/>
        <StackAuth.Screen name = "CreateAcc" component={CreateAccountScreen} options={{headerShown: false}}/>
    </StackAuth.Navigator>
)


const MainStack = createStackNavigator();



const Routes: React.FC=()=>(
    <MainStack.Navigator>
        <MainStack.Screen name= 'AuthFlow' component={authStack}  options={{headerShown: false}}/>
    </MainStack.Navigator>
)


export default Routes;