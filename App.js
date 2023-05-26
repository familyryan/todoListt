import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import React, {useState} from 'react';

export default function App() {
  
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>
          Today's Task
        </Text>
        <View style={styles.items}>
        {
          taskItems.map((item, index) => {
            return(
             <TouchableOpacity key={index} onPress={() => completeTask()}>
              <Task text={item}/>
             </TouchableOpacity>
             )
             
          })
        }
       
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'write a task'} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={()=> handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>
              +
            </Text>

          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },

  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal:20,
  },

  sectionTitle: {
    fontSize:24,
    fontWeight:'bold'


  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal:15,
    borderRadius: 60,
    backgroundColor: '#fff',
    borderColor: '#C0C0C0',
    borderWidth:1,
    justifyContent:'center',
  },
  addWrapper: {
    width:60,
    height:60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
    alignItems:'center',

  },
  addText: {
    fontSize:24,
  }
});
