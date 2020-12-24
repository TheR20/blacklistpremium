
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import { Button } from 'galio-framework';

var RNFS = require('react-native-fs');

// create a path you want to write to
// :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
// but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable
import {PermissionsAndroid} from 'react-native';

  const  crearTxt = async (RFC,aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,kk,ll,mm,nn,oo,pp) => {

            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  var path = RNFS.DownloadDirectoryPath + '/'+RFC+'.txt';
                  RNFS.writeFile(path,
                   'RFC:  '+RFC+'\n\n'+
                    'Nombre del Contribuyente:  '+aa+'\n\n'+
                    'Situación del contribuyente:  '+bb+'\n\n'+
                    'Número y fecha de oficio global de presunción:  '+cc+'\n\n'+

'Número y fecha de oficio global de presunción:  '+dd+'\n\n'+
'Publicación DOF presuntos:  '+ee+'\n\n'+
'Publicación página SAT desvirtuados:  '+ff+'\n\n'+
'Número y fecha de oficio global de contribuyentes que desvirtuaron:  '+gg+'\n\n'+
'Publicación DOF desvirtuados:  '+hh+'\n\n'+
'Número y fecha de oficio global de definitivos:  '+ii+'\n\n'+
'Publicación página SAT definitivos:  '+jj+'\n\n'+
'Publicación DOF definitivos:  '+kk+'\n\n'+
'Número y fecha de oficio global de sentencia favorable:  '+ll+'\n\n'+
'Publicación página SAT sentencia favorable:  '+mm+'\n\n'+
'Número y fecha de oficio global de sentencia favorable:  '+nn+'\n\n'+
'Publicación DOF sentencia favorable:  '+oo+'\n\n'

                   , 'utf8')
                    .then((success) => {
                      ToastAndroid.show("Archivo Guardado en Descargas", ToastAndroid.LONG)
                      console.log('FILE WRITTEN!');
                    })
                    .catch((err) => {
                      console.log(err.message);
                    });

                } else {
                    console.log('Permission denied');
                }
                } catch (err) {
                    console.warn(err);
                }

        }


const BigCard = (props, { navigation }) => {

  return(

<View style = {styles.barraSuperior}>
  <ImageBackground style={styles.backgroundImage} source={{uri:  'https://i.imgur.com/a1Nwuna.jpg'}}>

  <Text style={styles.Texto2}>{props.titulo}</Text>
    <Text style={styles.Texto}>{props.codigoItem}</Text>

    <Text style={styles.Texto2}>{props.titulo2}</Text>
      <Text style={styles.Texto}>{props.codigoItem2}</Text>

      <Text style={styles.Texto2}>{props.titulo3}</Text>
        <Text style={styles.Texto}>{props.codigoItem3}</Text>

<Button round size="large" onPress={() => crearTxt(props.codigoItem,props.codigoItem2
,props.codigoItem3,props.codigoItem4,props.codigoItem5,props.codigoItem6,props.codigoItem7
,props.codigoItem8,props.codigoItem9,props.codigoItem10,props.codigoItem11,props.codigoItem12
,props.codigoItem13,props.codigoItem14,props.codigoItem15,props.codigoItem16,props.codigoItem17

)} color="#4F9B45" style={{ marginTop: 10,  alignItems:'center' }}>Descargar Archivo TXT</Button>

    </ImageBackground>



  </View>


  )

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4C58F5',
    alignItems: 'center',
    justifyContent: 'center',

  },
  card:{
    backgroundColor:"#0E1642",

    marginHorizontal:0,
    // width:340,

    borderRadius:10,

    justifyContent:"center",
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,

      fontFamily: 'sans-serif-condensed',
        flex:1,

        height:220,

         textAlign: 'center',

         borderColor:'black',borderWidth:3,

  },
Texto:{
  fontFamily: 'sans-serif-medium',
   fontSize: 18,color:"white" ,
    fontWeight: 'bold',
      textAlign: 'center',
},
Texto2:{
  fontFamily: 'sans-serif-medium',
   fontSize: 14,color:"#7D8DE3" ,
    fontWeight: 'bold',
     textAlign: 'center',
       marginBottom:6,

},
barraSuperior:{

flexDirection: 'row',
marginTop:5,
flex:1,

},

  backgroundImage: {

    flex: 1,
    resizeMode: 'cover',
  },


});

export default BigCard;
