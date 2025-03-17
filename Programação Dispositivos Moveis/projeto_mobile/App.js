import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import imagem from './assets/steve.jpg'
import imagem2 from './assets/stevezinho.jpg'

class App extends Component{
  render() {

    let nome = ' Steve';
    let nome2 = ' Stevezinho'

    return(
      <View style={{flex:1, flexDirection:  'column', alignItems: 'stretch', justifyContent: 'space-around'}}>
      <View style={{width: 100, height: 50, backgroundColor: 'red'}}></View>
      <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
      <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}></View>
      </View>


//       <View style={{marginTop: 20}}>
//         <Text style={styles.textoPrincipal}> Cachorrinhos fofos </Text>
//         <Text style={styles2.textoSecundario}> Veja esses cachorrinhos fofos.</Text>
//         <Text style={styles3.textoTerc}> Conheça os Steves: </Text>
//         <Text style={style4.textoFinal}> Lindinhos </Text>
//         <Text style={{ color: '#FF0000', fontSize: 25, margin: 15}}> Cachorrinhos </Text>
//         <Image source={imagem}
//         style={{width: 200, height: 200, borderRadius: 30, margin: 15}}/>
//         <Text style>{nome}</Text>
//         <Image source={imagem2}
//         style={{width: 200, height: 200, borderRadius: 30, margin: 15}}/>
//         <Text>{nome2}</Text>
//       </View>
    );
  }
}

// const styles = StyleSheet.create({
//   textoPrincipal:{
//     fontSize: 25,
//     color: 'red',
//     fontFamily: 'Verdana'
//   }
// })

// const styles2 = StyleSheet.create({
//   textoSecundario:{
//     fontSize: 17,
//     color: 'purple'
//   }
// })

// const styles3 = StyleSheet.create({
//   textoTerc:{
//     fontSize: 17,
//     color: 'green',
//     fontFamily: 'Times'
//   }
// })

// const style4 = StyleSheet.create({
//   textoFinal:{
//     fontSize: 15,
//     color: 'red'
//   }
// })

export default  App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
