import React from 'react';

//navigation//
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens //
import Homescreen from './screens/Homescreen';
import TasksAddScreen from './screens/TasksAddScreen';
import Detailscreen from './screens/Detailscreen';

const tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <tab.Navigator screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarShowLabel:true,
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          fontSize: 18,
        },
        tabBarStyle: {
          backgroundColor: "#F3F3FC",
          borderBottomLeftRadius: 10,
        }
      }}>
        <tab.Screen name='Home' component={Homescreen} options={{
          tabBarIconStyle: {
            display: "none",
          }
        }}/>
        <tab.Screen name="AddTask" component={TasksAddScreen} options={{
          tabBarIconStyle: {
            display: "none",
          }
        }} />
         <tab.Screen name="Details" component={Detailscreen} options={{
          tabBarIconStyle: {
            display: "none",
          }
        }} />
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
