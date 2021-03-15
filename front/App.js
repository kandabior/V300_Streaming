import React from 'react'
import Video from 'react-native-video'
import {View,Text,StyleSheet,} from 'react-native'

const App =()=>{
  return <View>
    {/* <Image source={{uri:'https://192.168.98.1/00_1d_96_07_c1_ee-0002760365_thumbnail.jpg'}}
      style={{width:100,height: 50}}/> */}
    <Text>hello</Text>

    <View style={styles.videoViewStyle}>
      
      <Video style={styles.videoStyle}
        source={require('C:\Users\mjfc37\Documents\Motorola\VideoStream\stream\assets\sample.mpd')}
        resizeMode={'contain'}
        controls/>
    </View>
    
  </View>

}

const styles= StyleSheet.create({
  videoStyle:{
    width: 700,
    height: 500,
    flex:1
    
},

videoViewStyle:{
    padding:10,
    alignSelf:'center',
    position:'absolute',
    flex:1
}
})

export default App;