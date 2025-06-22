import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AddProductionScreen from '../screens/AddProductionScreen';
import MarketScreen from '../screens/MarketScreen';
import BreedingScreen from '../screens/BreedingScreen';
import MLInsightsScreen from '../screens/MLInsightsScreen';
import AnimalManagementScreen from '../screens/AnimalManagementScreen';
import FarmerDashboardScreen from '../screens/FarmerDashboardScreen'; // ✅ Imported farmer dashboard

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="FarmerDashboard" component={FarmerDashboardScreen} /> 
      <Stack.Screen name="AddProduction" component={AddProductionScreen} />
      <Stack.Screen name="Market" component={MarketScreen} />
      <Stack.Screen name="Breeding" component={BreedingScreen} />
      <Stack.Screen name="MLInsights" component={MLInsightsScreen} />
      <Stack.Screen name="Animals" component={AnimalManagementScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
