import React from 'react'
import { View, StyleSheet } from 'react-native';
import { FlexScreen } from './FlexScreen';

export const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}/>
            <View style={styles.cajaNaranja}/>
            <View style={styles.cajaAzul}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    cajaMorada:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5256D6',
        // alignSelf:'center'
        // top: 100,
    },
    cajaNaranja:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        top:50,
        // left: 100,
        // alignSelf: 'flex-end'
        // bottom: 0
    },
    cajaAzul:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // alignSelf: 'flex-start'
    }
});


/*
Tarea-4
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'column',
        // alignItems: 'flex-end',
        // alignContent: 'space-around',
        justifyContent: 'space-betweem',
        // flexWrap: 'wrap' 
        // alignItems: 'center'
    },
    cajaMorada:{
        width: 100,
        height:100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5256D6',
        alignSelf:'flex-end'
    },
    cajaNaranja:{
        width: 100,
        height:100,
        // flex: 1,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        alignSelf: 'center'
    },
    cajaAzul:{
        width: 100,
        height:100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        alignSelf: 'flex-start'
    }
});*/


/*
Tarea - 5
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',
        // alignItems: 'flex-end',
        alignContent: 'flex-start',
        justifyContent: 'space-between'
        // justifyContent: 'space-around',
        // flexWrap: 'wrap' 
        // alignItems: 'center'
    },
    cajaMorada:{
        width: 100,
        height:'100%',
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5256D6',
        // alignSelf:'flex-end'
    },
    cajaNaranja:{
        width: 100,
        height:'100%',
        // flex: 1,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        // alignSelf: 'center'
    },
    cajaAzul:{
        width: 100,
        height:'100%',
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // alignSelf: 'flex-start'
    }
});

*/


/*
Tarea - 6

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'column',
        // alignItems: 'flex-end',
        // alignContent: 'flex-start',
        // justifyContent: 'space-between'
        // justifyContent: 'space-around',
        // flexWrap: 'wrap' 
        // alignItems: 'center'
    },
    cajaMorada:{
        // width: 100,
        // height:'100%',
        flex:1,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5256D6',
        // alignSelf:'flex-end'
    },
    cajaNaranja:{
        // width: 100,
        // height:'100%',
        flex: 1,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        // alignSelf: 'center'
    },
    cajaAzul:{
        // width: 100,
        // height:'100%',
        flex: 2,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // alignSelf: 'flex-start'
    }
});
*/



/*
 Tarea - 7
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cajaMorada:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5256D6',
        alignSelf:'center'
    },
    cajaNaranja:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        // alignSelf: 'center'
    },
    cajaAzul:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // alignSelf: 'flex-start'
    }
});
*/


/*
Tarea - 8
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    cajaMorada:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5256D6',
        // alignSelf:'center'
    },
    cajaNaranja:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        left: 100,
        // alignSelf: 'flex-end'
        // bottom: 0
    },
    cajaAzul:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // alignSelf: 'flex-start'
    }
});

*/


/*
Tarea - 9

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    cajaMorada:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5256D6',
        // alignSelf:'center'
        top: 100,
    },
    cajaNaranja:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        left: 100,
        // alignSelf: 'flex-end'
        // bottom: 0
    },
    cajaAzul:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // alignSelf: 'flex-start'
    }
});
*/


/*
Tarea - 10
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    cajaMorada:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5256D6',
        // alignSelf:'center'
        // top: 100,
    },
    cajaNaranja:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        top:50,
        // left: 100,
        // alignSelf: 'flex-end'
        // bottom: 0
    },
    cajaAzul:{
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // alignSelf: 'flex-start'
    }
});


*/