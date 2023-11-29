import React, { useEffect, useState, useRef } from 'react';
import MapView from 'react-native-maps';
import { View } from "react-native";
import styles from './styles';
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from '../config'
import MapViewDirections from 'react-native-maps-directions';
import { Text } from 'react-native';
import TopoTelasIniciais from "../../componentes/TopoTelasIniciais"
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Maps() {

    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [price, setPrice] = useState(null);
    const mapEl = useRef(null)
    const [distance, setDistance] = useState(null)

    useEffect(() => {
        (async function () {
            // const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status === 'granted') {
                let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
                setOrigin({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.000922,
                    longitudeDelta: 0.000421
                })
                // console.log(location);
            } else {
                throw new Error('Location permission not granted');
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 50 }}>
                <TopoTelasIniciais />
            </View>
            <View style={{ marginLeft: 20, width: '100%' }}>
                <Text style={{ color: '#F8B655', fontSize: 27 }}>Acompanhe seu pedido!</Text>
                <View style={{ height: 4, backgroundColor: '#F8B655', borderRadius: 10, width: '45%', marginTop: 6 }}></View>
            </View>
            <View style={{ height: 'auto', width: '85%', alignItems: 'center', }}>
                < MapView
                    style={styles.map}
                    initialRegion={origin}
                    showsUserLocation={true}
                    zoomEnabled={false}
                    loadingEnabled={true}
                    ref={mapEl}
                >
                    {destination &&
                        <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey={config.googleApi}
                            strokeWidth={3}
                            onReady={result => {
                                setDistance(result.distance);
                                setPrice(result.distance * 1.50);
                                mapEl.current.fitToCoordinates(
                                    result.coordinates, {
                                    edgePadding: {
                                        top: 50,
                                        bottom: 50,
                                        left: 50,
                                        right: 50
                                    }
                                }
                                );
                            }
                            }
                        />
                    }

                </MapView>
                <View style={{ height: 'auto', background: 'grey', width: '100%' }}>
                    <GooglePlacesAutocomplete
                        placeholder='Onde será a entrega?'
                        onPress={(data, details = null) => {
                            setDestination({
                                latitude: details.geometry.location.lat,
                                longitude: details.geometry.location.lng,
                                latitudeDelta: 0.000922,
                                longitudeDelta: 0.000421
                            })

                            console.log('destino', destination);
                        }}
                        query={{
                            key: config.googleApi,
                            language: 'pt-br',
                        }}
                        enablePoweredByContainer={false}
                        fetchDetails={true}
                        styles={{
                            listView: { backgroundColor: '#fff', zIndex: 10 },
                            container: { position: 'absolute', width: '100%' }
                        }}
                    />
                </View>

            </View>
            <View style={{ marginTop: 50, width: 250 }} >
                {distance &&
                    <View>
                        <Text>Distância:{distance}m</Text>
                        <Text>Preço: R${price.toFixed(2).replace('.', ',')}</Text>
                    </View>
                }
            </View>
            <TouchableOpacity style={{ backgroundColor: '#F8B655', height: 55, width: 200, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 18 }}>Pedir</Text>
            </TouchableOpacity>


        </View>


    )
}