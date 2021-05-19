import React,{useEffect,useState} from 'react'
import Video from 'react-native-video'
import {View,Text,StyleSheet,Image} from 'react-native'
// import {WebView} from 'react-native-webview'


// const func = async(setState)=>{
  
//     console.log(instance)
//     const res= await instance.get('/')
//     .then(res=>setState(res.data))
//     .catch(err=>console.log(err))
    
    
  
// }


const App =  ()=>{
  // const [state,setState]=useState('');

  // useEffect(()=>{
  //   func(setState);
  // },[])
   
  
  // console.log(state)
  return <View>
    <Image source={{uri:'http://192.168.98.1/00_1d_96_07_c1_ee-0002760365_thumbnail.jpg'}}
      style={{width:500,height: 300}}/>
    <Text>hello</Text>

    {/* <WebView
        source={{ uri: 'https://192.168.98.1/00_1d_96_07_c1_ee-0002730336_thumbnail.jpg' }}
        style={{ marginTop: 20 }}
      /> */}
    <View style={styles.videoViewStyle}>
      <Video style={styles.videoStyle}
        source={{uri:"http://127.0.0.1:9911/"}}
        onLoad={ ()=>console.log('hello')}
        resizeMode={'contain'}
        controls/>
      
    </View>
    
  </View>

}
// http://192.168.98.1/00_1d_96_07_c1_ee-0002713743_video0.mpd
// http://192.168.98.1/00_1d_96_07_c1_ee-0002717794_video0.mpd
// http://192.168.98.1/00_1d_96_07_c1_ee-0002733274_video0.mpd
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