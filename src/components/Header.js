import { View, Text, StyleSheet, Pressable,Platform ,StatusBar } from 'react-native';
import React, { useState } from 'react';
import colors from '../utils/global/colors';
import fonts from '../utils/global/fonts';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../feactures/auth/authSlice";
import { deleteSession } from '../utils/db';
import LogoutConfirmation from './LogoutConfirmation';

const Header = ({ title }) => {

  const dispatch = useDispatch();
  const idToken = useSelector((state) => state.auth.idToken);
  const [confirmLogoutVisible, setConfirmLogoutVisible] = useState(false);

  const showConfirmLogout = () => {
    setConfirmLogoutVisible(true);
  }

  const hideConfirmLogout = () => {
    setConfirmLogoutVisible(false);
  }

  const onLogout = () => {
    dispatch(clearUser());
    deleteSession();
  }

  const handleLogoutConfirmed = () => {
    hideConfirmLogout();
    onLogout();
  }

  const handleLogoutCancelled = () => {
    hideConfirmLogout();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {idToken && (
        <>
          <Pressable style={styles.logoutIcon} onPress={showConfirmLogout}>
            <AntDesign name="logout" size={30} color="black" />
          </Pressable>
          <LogoutConfirmation
            visible={confirmLogoutVisible}
            onConfirm={handleLogoutConfirmed}
            onCancel={handleLogoutCancelled}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    paddingVertical: 45,
    paddingHorizontal: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: fonts.OverpassBold,
    textAlign: 'center',
  },
  logoutIcon: {
    marginLeft: 10,
  },
});

export default Header;
