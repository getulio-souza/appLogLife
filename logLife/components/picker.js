// import React, { Component } from React;
// import {View, Picker, StyleSheet } from "react-native";

// class PickerComponent extends Component{

//     state = {
//       Clientes: 'Fleury'
//     }

//     render() {
//         return (
//             <View>
//                 <Picker style={styles.picker_items}
//                     selectedValue={this.state.Clientes}
//                     onValueChange={(itemValue, itemIndex)=> this.setState({Clientes:itemValue})}
//                 >
//                     <Picker.Item label="Clientes" value="Fleury"/>
//                     <Picker.Item label="Rementente" value="Unimed (Natal)"/>
//                     <Picker.Item label="Data" value="xx/xx/xxxx"/>
//                     <Picker.Item label="Horário" value="00:00:00"/>
//                 </Picker>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     picker_items: {
//         width: 2,
//         height:4,
//     }
// });

// export default PickerComponent;