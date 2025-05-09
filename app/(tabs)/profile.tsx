import { View, Text, StyleSheet, ScrollView, Image,TextInput,TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const profile = () => {
  const [editMode, setEditMode] = useState(false);

  const [profileData, setProfileData] = useState({
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
    name: 'Carl Pampolina',
    email: 'cal.pampolina@example.com',
    username: 'carlpampolina',
    phone: '+63 912 345 6789',
    dob: 'May 15, 2008',
    location: 'San Pablo City, Laguna',
    condition: 'Type 2 Diabetes',
    joined: 'January 2015',
  });

  const handleChange = (field, value) => {
    setProfileData({...profileData,[field]: value});
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image source={{ uri: profileData.image }} style={styles.avatar} />
          {editMode ? (
            <>
              <TextInput
                style={styles.inputTextWhite}
                value={profileData.name}
                onChangeText={(text) => handleChange('name', text)}
              />
              <TextInput
                style={styles.inputTextWhite}
                value={profileData.email}
                onChangeText={(text) => handleChange('email', text)}
              />
            </>
          ) : (
            <>
              <Text style={styles.name}>{profileData.name}</Text>
              <Text style={styles.email}>{profileData.email}</Text>
            </>
          )}
        </View>

        <View style={styles.infoSection}>
          <ProfileItem
            icon="user"
            label="Username"
            value={profileData.username}
            editable={editMode}
            onChangeText={(text) => handleChange('username', text)}
          />
          <ProfileItem
            icon="phone"
            label="Phone"
            value={profileData.phone}
            editable={editMode}
            onChangeText={(text) => handleChange('phone', text)}
          />
          <ProfileItem
            icon="calendar"
            label="Date of Birth"
            value={profileData.dob}
            editable={editMode}
            onChangeText={(text) => handleChange('dob', text)}
          />
          <ProfileItem
            icon="map-marker"
            label="Location"
            value={profileData.location}
            editable={editMode}
            onChangeText={(text) => handleChange('location', text)}
          />
          <ProfileItem icon="heartbeat" label="Medical Condition" value={profileData.condition} />
          <ProfileItem icon="clock-o" label="Account Created" value={profileData.joined} />
        </View>

        {/* Button stays visible when keyboard appears */}
        <TouchableOpacity style={styles.button} onPress={() => setEditMode(!editMode)}>
          <Text style={styles.buttonText}>{editMode ? 'Save' : 'Edit Profile'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const ProfileItem = ({ icon, label, value, editable = false, onChangeText }) => (
  <View style={styles.item}>
    <Icon name={icon} size={20} color="#067425" style={styles.itemIcon} />
    <View>
      <Text style={styles.itemLabel}>{label}</Text>
      {editable ? (
        <TextInput
          style={styles.inputText}
          value={value}
          onChangeText={onChangeText}
          placeholder={label}
        />
      ) : (
        <Text style={styles.itemValue}>{value}</Text>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 100, // enough space for the button
    backgroundColor: '#F0F4F8',
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#067425',
    paddingVertical: 25,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  name: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'white',
    opacity: 0.8,
  },
  infoSection: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  itemIcon: {
    marginRight: 15,
  },
  itemLabel: {
    fontSize: 14,
    color: '#888',
  },
  itemValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  inputText: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 4,
    fontWeight: '600',
  },
  inputTextWhite: {
    fontSize: 16,
    color: 'white',
    borderBottomWidth: 1,
    borderColor: 'white',
    paddingVertical: 4,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#067425',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default profile;