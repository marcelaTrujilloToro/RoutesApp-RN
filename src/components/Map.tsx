import React, {useEffect} from 'react';
import MapView from 'react-native-maps';

import Geolocation from 'react-native-geolocation-service';

export const Map = () => {

    useEffect(() => {
        // Geolocation.getCurrentPosition(info => console.log(info));
        Geolocation.getCurrentPosition(position => {console.log(position)
       }, [])

       
  return (
    <>
      <MapView
        style={{flex: 1}}
        //si no se pone provider funciona con el nativo de AppleMaps
        // provider={PROVIDER_GOOGLE}

        showsUserLocation={true}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* mostrar algo importante */}

        {/* <Marker
          image={require('../assets/custom-marker.png')}
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title={'Esto es un titulo'}
          description={'Esta es una descripcion'}
        /> */}
      </MapView>
    </>
  );
};
