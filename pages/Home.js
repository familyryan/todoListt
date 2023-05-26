import React, {useState} from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from "../components/Task";


export default function App() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);


    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index,1);
        setTaskItems(itemsCopy)
    }

    return (
        <View style={StyleSheet.container}>
            <ScrollView
            contentContainerStyle={{
                flexGrow:1
            }}
            keyboardShouldPersistTaps='handled'>

                <View style={StyleSheet.taskWrapper}>
                    <Text style={StyleSheet.sectionTitle}>
                        Today's tasks
                    </Text>
                    <View style={StyleSheet.items}>
                        {
                            taskItems.map((item, index)=>{
                                return(
                                    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                        <Task text={item}/>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>

            <View style={styles.writeTaskWrapper}>
                <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text => setTask(text)} />
            <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}></View>
            </TouchableOpacity>
            
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#e8eaed',

    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal:20,
    },

    sectionTitle:{
        fontSize:24,
        fontWeight:'bold',
    },
    items: {
        marginTop:30,
    },

    writeTaskWrapper:{
        position: 'absolute',
        bottom: 60, 
        width:'100%',
        flexDirection:'row',
        justifyContent:"space-around",
        alignItems:'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor:'#fff',
        borderRadius:60,
        borderColor: '#C0C0C0',
        borderWidth:1,
        width:250,
    },
    addWrapper: {
        width:60,
        height:60,
        backgroundColor:'#fff',
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#C0C0C0',
        borderWidth:1,
    },
    addText:{},
})