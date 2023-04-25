// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';
// const {height, width} = Dimensions.get('screen');

// const Calculator = () => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.mainContainer}>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: 'yellow',
//             height: height / 2,
//             margin: 10,
//           }}></View>
//         <View
//           style={{
//             flex: 1,
//             backgroundColor: 'green',
//             height: height / 2,
//           }}>
//           <View style={{flexDirection: 'row', justifyContent:"space-around"}}>
//             <TouchableOpacity>
//               <Text>7</Text>
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Text>7</Text>
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Text>7</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Calculator;
// const styles = StyleSheet.create({
//   mainContainer: {
//     backgroundColor: 'red',
//     flex: 1,
//   },
// });
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
const {height, width} = Dimensions.get('screen');

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [operation, SetOperation] = useState(null);
  const [equation, setEquation] = useState('');
  const [notPress, setNotPress] = useState(null);
  // ==== Switch fuhnction ====
  const switch_fun = txt => {
    const x = Number(a);
    const y = Number(b);
    console.log(typeof x, typeof y, a, b);
    setNotPress(0);
    switch (txt) {
      case '+':
        setResult(x + y);
        break;
      case '-':
        setResult(x - y);
        break;
      case '*':
        setResult(x * y);
        break;
      case '/':
        setResult(x / y);
        break;
      case '%':
        {
          setResult(x % y);
        }
        break;
      case 'clear':
        {
          setResult('');
          setA('');
          setB('');
          SetOperation(null);
          setEquation('');
        }
        break;
      default:
        break;
    }
    SetOperation(null);
  };
  // ==== set values in a or b variables ======
  const set_values = txt => {
    if (operation === null) {
      setResult('');
      setA(a + txt);
      setEquation(equation + txt);
    } else if (notPress === null) {
      setB(b + txt);
      setEquation(equation + txt);
    }
  };
  // ===== after set result in value =====
  const after_result = txt => {
    if (result !== '') {
      const aa = result.toString();
      setA(aa);
      setEquation(result + txt);
      setB('');
      setResult('');
      SetOperation(txt);
      setNotPress(null);
    } else {
      SetOperation(txt);
      setEquation(equation + txt);
      setNotPress(null);
    }
  };
  //   ==== Back Delete ====
  const backDelete = () => {
    if (result === '') {
      setEquation(equation.slice(0, equation.length - 1));
      if (b.length !== 0) {
        console.log('==>1');
        setB(b.slice(0, b.length - 1));
      } else if (operation !== null) {
        console.log('==>2');
        SetOperation(null);
      } else if (a.length !== 0) {
        console.log('==>3', a.length);
        setA(a.slice(0, a.length - 1));
      }
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: height * 1, width: width * 1}}>
        <View
          style={{
            height: height * 0.5,
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            margin: 10,
          }}>
          <Text style={{fontSize: 40, color: '#000'}}>
            {equation}
            {(result !== 0 || notPress === 0) & (result !== '') ? '=' : ''}
            {result}
          </Text>
        </View>
        <View
          style={{
            height: height * 0.5,
            width: width * 1,
          }}>
          <View style={styles.btnline}>
            <TouchableOpacity
              onPress={() => switch_fun('clear')}
              style={styles.btnview2}>
              <Text style={styles.txt}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => backDelete()}
              style={styles.btnview2}>
              <Image
                source={require('../assets/images/backcross.png')}
                style={{height: 16, width: 16, tintColor: 'green'}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => after_result('*')}
              style={styles.btnview2}>
              <Text style={styles.txt}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => after_result('%')}
              style={styles.btnview2}>
              <Text style={styles.txt}>%</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnline}>
            <TouchableOpacity
              onPress={() => set_values('1')}
              style={styles.btnview1}>
              <Text style={styles.txt2}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => set_values('2')}
              style={styles.btnview1}>
              <Text style={styles.txt2}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => set_values('3')}
              style={styles.btnview1}>
              <Text style={styles.txt2}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => after_result('+')}
              style={styles.btnview2}>
              <Text style={styles.txt}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnline}>
            <TouchableOpacity
              onPress={() => set_values('4')}
              style={styles.btnview1}>
              <Text style={styles.txt2}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => set_values('5')}
              style={styles.btnview1}>
              <Text style={styles.txt2}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => set_values('6')}
              style={styles.btnview1}>
              <Text style={styles.txt2}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => after_result('-')}
              style={styles.btnview2}>
              <Text style={styles.txt}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnline}>
            <TouchableOpacity
              onPress={() => set_values('7')}
              style={styles.btnview1}>
              <Text style={styles.txt2}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => set_values('8')}
              style={styles.btnview1}>
              <Text style={styles.txt2}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => set_values('9')}
              style={styles.btnview1}>
              <Text style={styles.txt2}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => after_result('/')}
              style={styles.btnview2}>
              <Text style={styles.txt}>/</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnline}>
            <TouchableOpacity
              onPress={() => set_values('.')}
              style={styles.btnview1}>
              <Text style={styles.txt2}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => set_values('0')}
              style={styles.btnview1}>
              <Text style={styles.txt2}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: width / 6,
                height: height / 15,
              }}></TouchableOpacity>
            <TouchableOpacity
              onPress={() => switch_fun(operation)}
              style={styles.btnview2}>
              <Text style={styles.txt}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Calculator;
const styles = StyleSheet.create({
  btnline: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: width * 1,
    height: height / 12,
  },
  btnview1: {
    backgroundColor: 'whitesmoke',
    borderRadius: 5,
    width: width / 6,
    height: height / 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  btnview2: {
    backgroundColor: '#d1f0d1',
    borderRadius: 50,
    width: width / 6,
    height: height / 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  txt: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  txt2: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
