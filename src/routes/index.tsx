import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import ForgetScreen from '../screens/ForgetScreen/ForgetScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen/CreateAccountScreen';
import NewGame from '../screens/NewGame/NewGame';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from "react-redux";
import { RootState } from "../store";
import CartScreen from '../screens/CartScreen/CartScreen';
import HistoryScreen from '../screens/HistoryScreen/HistoryScreen';
import { Icon } from 'react-native-elements';
const StackAuth = createStackNavigator();

const authStack = ()=>(
    <StackAuth.Navigator  >
        <StackAuth.Screen name = "Login" component={LoginScreen} options={{headerShown: false}}/>
        <StackAuth.Screen name = "Forget" component={ForgetScreen} options={{headerShown: false}}/>
        <StackAuth.Screen name = "CreateAcc" component={CreateAccountScreen} options={{headerShown: false}}/>
    </StackAuth.Navigator>
)


const MainStack = createStackNavigator();

const CartStack = createStackNavigator();

const cartStack = ()=>(
    <CartStack.Navigator>
        <CartStack.Screen name="Cart" component={CartScreen}/>
    </CartStack.Navigator>
)

const InternFlow = createStackNavigator()

const internFlow = ()=>(
    <InternFlow.Navigator>
        <InternFlow.Screen name="GameFlow" component={GameTabs} options={{headerShown: false}}/>
        <InternFlow.Screen name="CartFlow" component={cartStack} options={{headerShown: false}}/>
    </InternFlow.Navigator>
)


const Routes: React.FC=()=>{
const isAuth = useSelector((state: RootState) => state.auth.isLoggedin);
   return (
        <MainStack.Navigator>
            {!isAuth?
            (<MainStack.Screen name= 'AuthFlow' component={authStack}  options={{headerShown: false}}/>
            ):(
             <MainStack.Screen name="InternFlow" component={internFlow} options={{headerShown: false}}/>
            )
            }
        </MainStack.Navigator>
    )
}
const TabGames = createBottomTabNavigator()

const GameTabs = ()=>(
    <TabGames.Navigator 
        screenOptions = {({route})=>({
            tabBarIcon:({focused,color,size})=>{
                let iconName;

                if(route.name === 'New Game'){
                    iconName = 'clover'
                    size = 30
                }else{
                    iconName = 'history'
                    size =30
                }
                color = focused ? 'black': 'gray';

                return<Icon name = {iconName} type='material-community'  size={size} color={color}/>
            }
        })}
        tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            style:{
                borderTopLeftRadius:25, 
                borderTopRightRadius:25,
                backgroundColor:"#fff",   
                height: 50,
                bottom:1, 
            }
        }}
    >
        <TabGames.Screen name="New Game" component = {NewGame} />
        <TabGames.Screen name="History Games" component = {HistoryScreen} />
    </TabGames.Navigator>
)



export default Routes;