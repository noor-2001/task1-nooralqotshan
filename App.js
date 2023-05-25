// 120190581  نور هشام محمود القطشان
import React from 'react';
import {View} from 'react-native';

import Header from './screens/header';
import Add from './screens/addItem';

const ShoppingList = () => {
  return (
    <View>
      <Header />
      <Add />
    </View>
  );
};
export default ShoppingList;
