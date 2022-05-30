import * as React from 'react'
import { CreateBottomNavigator } from 'react-navigation/bottom-tabs'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feed from '../screens/Feed'
import CreateStory from '../screens/CreateStory'

const BottomTabNavigator = () => {
    return (
            <Tab.Navigator 
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size}) => {
                        let iconName;
                        if(route.name === 'Feed') {
                            iconName = focused
                            ? 'book'
                            :'book-outline';
                        } else if (route.name === 'CreatePost') {
                            iconName = focused ? 'create' : 'create-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Feed" component={Feed} />
                <Tab.Screen name="Criar Post" component={CreatePost} />
            </Tab.Navigator>
    );
}
