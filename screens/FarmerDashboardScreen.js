import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';

const FarmerDashboardScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }} // Simplified URI
          style={styles.profilePic}
        />
        <View>
          <Text style={styles.profileName}>Hello, Farmer!</Text>
          <TouchableOpacity onPress={() => alert('Profile Edit Coming Soon!')}>
            <Text style={styles.editProfile}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Farmer Tools Section */}
      <Text style={styles.sectionTitle}>Farmer Tools</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('AddProduction')}
          accessibilityLabel="Add Production"
        >
          <Ionicons name="add-circle-outline" size={32} color="#fff" />
          <Text style={styles.cardText}>Add Production</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Animals')}
          accessibilityLabel="My Animals"
        >
          <FontAwesome5 name="horse" size={28} color="#fff" />
          <Text style={styles.cardText}>My Animals</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Breeding')}
          accessibilityLabel="Breeding"
        >
          <MaterialIcons name="pets" size={32} color="#fff" />
          <Text style={styles.cardText}>Breeding</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('MLInsights')}
          accessibilityLabel="AI Insights"
        >
          <Ionicons name="analytics" size={32} color="#fff" />
          <Text style={styles.cardText}>AI Insights</Text>
        </TouchableOpacity>
      </View>

      {/* Marketplace Section */}
      <Text style={styles.sectionTitle}>Marketplace</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Market')}
          accessibilityLabel="Market Prices"
        >
          <MaterialIcons name="storefront" size={32} color="#fff" />
          <Text style={styles.cardText}>Market Prices</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('SellProduct')}
          accessibilityLabel="Sell Produce"
        >
          <FontAwesome5 name="hand-holding-usd" size={28} color="#fff" />
          <Text style={styles.cardText}>Sell Produce</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Orders')}
          accessibilityLabel="My Orders"
        >
          <Ionicons name="receipt-outline" size={28} color="#fff" />
          <Text style={styles.cardText}>My Orders</Text>
        </TouchableOpacity>
        {/* This empty view keeps the layout consistent */}
        <View style={[styles.card, { backgroundColor: 'transparent' }]} />
      </View>

      {/* Additional Tip or Info */}
      <Text style={styles.tip}>
        🌱 Tip: Use AI Insights to get predictions on your crop yields.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#f4f6f8',
    flexGrow: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  editProfile: {
    color: '#4CAF50',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#4CAF50',
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  cardText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  tip: {
    marginTop: 20,
    backgroundColor: '#d9f0dc',
    padding: 10,
    borderRadius: 10,
    fontStyle: 'italic',
    color: '#2e7d32',
    textAlign: 'center',
  },
});

export default FarmerDashboardScreen;
