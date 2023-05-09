/* eslint-disable prettier/prettier */
//  120190581  نور هشام محمود القطشان
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native';
const Add = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const addItem = () => {
        // check if the input value is not empty , if it is empty it will not display the flatlist
        if (inputValue !== '') {
          setItems([...items, inputValue]);
          setInputValue('');
        }
      };
    const removeItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
      };
    return (
        <View>
            <TextInput
                style={styles.Input}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Add Your Item  . . ."
            />
            <TouchableOpacity onPress={addItem} style={styles.Button} >
                <Text style={styles.ButtonText}>+ Add Item</Text>
            </TouchableOpacity>
            <FlatList
                style={styles.flatList}
                data={items}
                renderItem={({ item, index }) => (
                    <View style={styles.flatView}>
                        <Text style={styles.flatText}>{item}</Text>
                        <TouchableOpacity onPress={() => removeItem(index)}>
                            <Text style={styles.removeItem}>x</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    Input: {
        height: 100,
        fontSize: 20,
        color: '#000',
        width: 200,
        marginTop: 30,
        marginLeft: 100,
        fontWeight: '500',
    },
    Button: {
        height: 70,
        width: 200,
        marginTop: 30,
        marginLeft: 100,
        borderRadius: 10,
        backgroundColor: '#5CFF5C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    flatList: {
        width: '100%',
        marginTop: 40,
        backgroundColor: '#E8E8E8',
    },
    flatView:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    flatText: {
        fontSize: 22,
        marginTop: '3.5%',
        marginLeft: '10%',
        color: '#000',
    },
    removeItem:{
        marginLeft: 200,
        fontSize: 25,
        color: 'red',
        fontWeight: 'bold',
    },
});
export default Add;
