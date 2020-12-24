import * as React from 'react';
import {  View, Text,ImageBackground,StyleSheet,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'galio-framework';
//import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import fotos from './lista.json';
import Card from './card';
import BigCard from './bigcard';


//const bannerSuperiorID = "ca-app-pub-8454341646863233/2501213715";


export default function DetailsScreen({ route, navigation }) {

  const { genero } = route.params;
const { elRFC } = route.params;


const filteredItem =  fotos.filter(item => item.RFC == elRFC)



if(filteredItem.length == 0)
console.log("Putasoooo");

if(filteredItem.length == 0)
{

    return (
      <ImageBackground style={styles.backgroundImage} source={{uri:  'https://i.imgur.com/uNf6hKB.png'}}>
      <View >


<BigCard titulo="No hay resultados para el RFC:" codigoItem= {elRFC} ></BigCard>

</View>
      </ImageBackground>
    );
}else {

    return (
      <ImageBackground style={styles.backgroundImage} source={{uri:  'https://i.imgur.com/uNf6hKB.png'}}>
    <View >


    <FlatList
      data={filteredItem}
      keyExtractor={({ No }, index) => No}
      renderItem={({ item }) => (
        <View>

  <BigCard titulo="RFC:" codigoItem={item.RFC} titulo2="Nombre del Contribuyente:" codigoItem2={item.aa}
 titulo3="Situación del contribuyente:" codigoItem3={item.bb} codigoItem4={item.cc} codigoItem5={item.dd}
 codigoItem6={item.ee} codigoItem7={item.ff} codigoItem8={item.gg} codigoItem9={item.hh} codigoItem10={item.ii}
 codigoItem11={item.jj} codigoItem12={item.ll} codigoItem13={item.mm} codigoItem14={item.nn} codigoItem15={item.oo}
 codigoItem16={item.pp} codigoItem17={item.qq}


 ></BigCard>

  <Card titulo="Número y fecha de oficio global de presunción:" codigoItem={item.cc}></Card>
  <Card titulo="Publicación página SAT presuntos:" codigoItem={item.dd}></Card>
  <Card titulo="Número y fecha de oficio global de presunción:" codigoItem={item.ee}></Card>
  <Card titulo="Publicación DOF presuntos:" codigoItem={item.ff}></Card>
  <Card titulo="Publicación página SAT desvirtuados:" codigoItem={item.gg}></Card>
  <Card titulo="Número y fecha de oficio global de contribuyentes que desvirtuaron:" codigoItem={item.hh}></Card>
  <Card titulo="Publicación DOF desvirtuados:" codigoItem={item.ii}></Card>
  <Card titulo="Número y fecha de oficio global de definitivos:" codigoItem={item.jj}></Card>
  <Card titulo="Publicación página SAT definitivos:" codigoItem={item.kk}></Card>
  <Card titulo="Publicación DOF definitivos:" codigoItem={item.ll}></Card>
  <Card titulo="Número y fecha de oficio global de sentencia favorable:" codigoItem={item.mm}></Card>
  <Card titulo="Publicación página SAT sentencia favorable:" codigoItem={item.nn}></Card>
  <Card titulo="Número y fecha de oficio global de sentencia favorable:" codigoItem={item.oo}></Card>
  <Card titulo="Publicación DOF sentencia favorable:" codigoItem={item.pp}></Card>


        </View>
      )}
    />

    </View>
      </ImageBackground>
    );
}

}





const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F5FCFF',
    paddingTop: 50,

  },


  backgroundImage: {
    paddingTop: 20,
    flex: 1,
    resizeMode: 'cover',
  },

    topBox: {
      textAlign: 'center', // <-- the magic
      marginTop: 10,
      color: "#3658DE",
        fontSize: 41,
    },
      topBox2: {
        textAlign: 'center', // <-- the magic
          fontSize: 16,
          color: "white",
        backgroundColor: 'rgba(52, 52, 52, 0.4)'
      },
      Texto:{
          fontSize: 18,
        color: "white",
   textDecorationColor: "yellow",
   textShadowColor: "red",
   textShadowRadius: 1,
   margin: 24,
     textAlign: 'center',
 },


});
