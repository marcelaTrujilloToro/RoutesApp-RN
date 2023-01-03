/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import MapView, {Polyline} from 'react-native-maps';
import {useLocation} from '../hooks/useLocation';
import {LoadingScreen} from '../pages/LoadingScreen';
import {Fab} from './Fab';

export const Map = () => {
  const [showPolyline, setShowPolyline] = useState(true);

  const {
    hasLocation,
    initialPosicion,
    getCurrentLocation,
    followUserLocation,
    userLocation,
    stopFollowUserLocation,
    routeLines,
  } = useLocation();

  const following = useRef<boolean>(true);
  const mapViewRef = useRef<MapView>();

  useEffect(() => {
    followUserLocation();
    return () => {
      stopFollowUserLocation();
    };
  }, []);

  useEffect(() => {
    if (following.current === false) {
      return;
    }
    const {latitude, longitude} = userLocation;
    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
    });
  }, [userLocation]);

  const centerPosition = async () => {
    const {latitude, longitude} = await getCurrentLocation();

    following.current = true;

    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
    });
  };

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MapView
        ref={el => (mapViewRef.current = el!)}
        style={{flex: 1}}
        //si no se pone provider funciona con el nativo de AppleMaps
        // provider={PROVIDER_GOOGLE}

        showsUserLocation={true}
        initialRegion={{
          latitude: initialPosicion.latitude,
          longitude: initialPosicion.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onTouchStart={() => (following.current = false)}>
        {/* mostrar algo importante */}

        {showPolyline === true && (
          <Polyline
            coordinates={routeLines}
            strokeColor="blue"
            strokeWidth={3}
          />
        )}
        {/* <Marker
          image={require('../assets/custom-marker.png')}
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title={'Esto es un titulo'}
          description={'Esta es una descripcion'}
        /> */}
      </MapView>

      <Fab
        iconName="compass-outline"
        onPress={centerPosition}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
      />
      <Fab
        iconName="brush-outline"
        onPress={() => setShowPolyline(value => !value)}
        style={{
          position: 'absolute',
          bottom: 80,
          right: 20,
        }}
      />
    </>
  );
};
