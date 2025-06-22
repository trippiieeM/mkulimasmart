import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  Entypo
} from '@expo/vector-icons';

const DashboardScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.profilePic}
        />
        <View>
          <Text style={styles.profileName}>Hello, Farmer!</Text>
          <Text
            style={styles.editProfile}
            onPress={() => alert('Profile Edit Coming Soon!')}
          >
            Edit Profile
          </Text>
        </View>
      </View>

      {/* Account Role Selection */}
      <Text style={styles.sectionTitle}>Choose Your Role</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.roleCard}
          onPress={() => navigation.navigate('FarmerDashboard')}
        >
          <FontAwesome5 name="tractor" size={28} color="#fff" />
          <Text style={styles.cardText}>I'm a Farmer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roleCard}
          onPress={() => alert('Marketplace account selected')}
        >
          <Ionicons name="cart-outline" size={28} color="#fff" />
          <Text style={styles.cardText}>I'm a Buyer</Text>
        </TouchableOpacity>
      </View>

      {/* Additional Tip or Info */}
      <Text style={styles.tip}>
        🌱 Tip: Choose a role to get started with tailored tools.
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
  roleCard: {
    backgroundColor: '#388E3C',
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

export default DashboardScreen;
