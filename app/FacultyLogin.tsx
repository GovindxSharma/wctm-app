import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const FacultyLogin: React.FC = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // For navigation

  const handleLogin = () => {
    console.log('Admin ID:', adminId);
    console.log('Password:', password);
  
    // Simple credential check
    if (adminId === 'admin123' && password === 'admin') {
      router.push('/adminProfile'); // navigate to adminProfile screen
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };
  
 
  return (
    <View style={styles.container}>
      {/* College Logo */}
      <Image source={require('../assets/images/Clogo.png')} style={styles.logo} />
      
      {/* College Name & Description */}
      <Text style={styles.collegeName}>World College of Technology and Management</Text>
      <Text style={styles.collegeDesc}>
        (Approved by AICTE, Ministry of HRD, Govt. of India, and affiliated to MDU, Rohtak)
      </Text>

      {/* Login Card */}
      <View style={styles.loginBox}>
        <Text style={styles.loginTitle}>Administration Login</Text>

        <Text style={styles.label}>Admin ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your admin ID"
          value={adminId}
          onChangeText={setAdminId}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Register Link */}
        <TouchableOpacity onPress={() => router.push('/facultyRegister')} style={styles.registerLink}>
          <Text style={styles.registerText}>Don't have an account? Register here</Text>
        </TouchableOpacity>
      </View>

      {/* Ranking Banner */}
      <Image source={require('../assets/images/rank.png')} style={styles.rankImage} />
      <Text style={styles.footerText}>© 2024 World College. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 30,
  },
  collegeName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  collegeDesc: {
    fontSize: 12,
    textAlign: 'center',
    color: '#777',
    marginBottom: 20,
  },
  loginBox: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
  },
  loginTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 5,
    marginTop: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerLink: {
    marginTop: 10,
    alignSelf: 'center',
  },
  registerText: {
    fontSize: 14,
    color: 'blue',
  },
  rankImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#777',
    marginTop: 10,
  },
});

export default FacultyLogin;
