import {View,Text,TouchableOpacity,StyleSheet,ScrollView,Modal,Pressable,} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const notifications = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handlePress = (notification) => {
    setSelectedNotification(notification);
    setModalVisible(true);
  };

  const notificationList = [
    { icon: 'bell', label: 'Activity', description: 'Time to do some physical Activity!.' },
    { icon: 'bell', label: 'Reminder', description: 'Time to check your sugar levels.' },
    { icon: 'bell', label: 'Update Available', description: 'There’s a new app update.' },
    { icon: 'bell', label: 'Alert', description: 'Your insulin level is low.' },
    { icon: 'bell', label: 'Weekly Summary', description: 'Your weekly report is ready.' },
    { icon: 'bell', label: 'Goal Achieved', description: 'You’ve met your exercise goal!' },
    { icon: 'bell', label: 'Sleep Reminder', description: "It's time for bed." },
    { icon: 'bell', label: 'Hydration', description: 'Don’t forget to drink water.' },
    { icon: 'bell', label: 'Hydration', description: 'Don’t forget to drink water.' },
    { icon: 'bell', label: 'Hydration', description: 'Don’t forget to drink water.' },
    { icon: 'bell', label: 'Hydration', description: 'Don’t forget to drink water.' },
    { icon: 'bell', label: 'Hydration', description: 'Don’t forget to drink water.' },
    { icon: 'bell', label: 'Hydration', description: 'Don’t forget to drink water.' },

  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.buttonContainer}>
          {notificationList.map((notif, index) => (
            <TrackingButton
              key={index}
              icon={notif.icon}
              label={notif.label}
              description={notif.description}
              onPress={() => handlePress(notif)}
            />
          ))}
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {selectedNotification?.label}
            </Text>
            <Text style={styles.modalDescription}>
              {selectedNotification?.description}
            </Text>
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

function TrackingButton({ label, icon, description, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        <Icon name={icon} size={20} color="#000" style={styles.icon} />
        <View>
          <Text style={styles.buttonText}>{label}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 50,
  },
  button: {
    marginBottom: 15,
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 5,
    elevation: 2,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#067425',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  closeText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default notifications;
