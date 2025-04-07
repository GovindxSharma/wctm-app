import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const login: React.FC = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Navigation

  const handleLogin = () => {
    console.log('Student ID:', studentId);
    console.log('Password:', password);
  
    if (studentId === 'stud123' && password === 'pass') {
      router.push('/studentProfile');
    } else {
      alert('Invalid student ID or password');
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
        <Text style={styles.loginTitle}>Student Login</Text>

        <Text style={styles.label}>Student ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your student ID"
          value={studentId}
          onChangeText={setStudentId}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/register')} style={styles.registerLink}>
          <Text style={styles.registerText}>Don't have an account? Register here</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Image source={require('../assets/images/rank.png')} style={styles.rankImage} />
      <Text style={styles.footerText}>© 2024 World College. All rights reserved.</Text>
    </View>
  );
};

// 📌 Styles
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
    width: '100%',
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

export default login;
