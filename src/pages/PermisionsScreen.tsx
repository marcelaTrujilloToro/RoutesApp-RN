import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {PermissionsContext} from '../context/PermissionsContext';

export const PermisionsScreen = () => {
  const {permissions, askLocationPermissions} = useContext(PermissionsContext);

  return (
    <View style={styles.container}>
      <Text>PermisionsScreen</Text>
      <Button title="Permiso" onPress={askLocationPermissions} />
      <Text>{JSON.stringify(permissions, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
