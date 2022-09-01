import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, Keyboard } from 'react-native';




export default function Home() {

  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  var [rnumber, setNumber] = useState(0);
  


  {/* --------------------------    RNG    ----------------------------*/ }

const getRandomNumber = () => {

  if( option1.length > 0 && option2.length > 0 && option3.length > 0){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    setNumber(randomNumber);
  }


  else if (option3.length == 0){

    const randomNumber = Math.floor(Math.random() * 2) + 1;
    setNumber(randomNumber);
  }

  else if (option1.length == 0 ){
    var alternatives = [1,2];
    const randomChoice = alternatives[Math.floor(Math.random()* alternatives.length)];
      if(randomChoice == 1){
        rnumber = 2;
      }
      else{
        rnumber = 3;
      }
      
  }

  else if (option2.length == 0 ){
    var alternatives = [1,2];
    const randomChoice = alternatives[Math.floor(Math.random()* alternatives.length)];
      if(randomChoice == 1){
        rnumber = 1;
      }
      else{
        rnumber = 3;
      }
      
  }


  

}

  {/* -----------------------    RNG  END     -----------------------*/ }



  // Check and compare  input values and generate alert with random choice

  function makeChoice() {
    if (rnumber == 1 && option1.length !== 0) {
      Alert.alert(option1);
    }
    else if (rnumber == 2 && option2.length !== 0) {
      Alert.alert(option2);
    }
    else if (rnumber == 3 && option3.length !== 0) {
      Alert.alert(option3);
    }
  };



  // both methods in one onPress method -- make a choice
  const onPres = () => {
    getRandomNumber();
    makeChoice();
    Keyboard.dismiss();
  };



  return (


    <View style={styles.main_container}>
      {/* Main COntent*/}


      <View style={styles.upper_section}>

        <Text style={styles.upper_text}>
          With what you can not decide {'\n'}this time?
        </Text>

      </View>

      <TextInput style={styles.main_input}
        placeholder="Pepperoni Pizza"

        onChangeText={(val) => setOption1(val)}
      />

      <TextInput style={styles.main_input}
        placeholder="Hawai Pizza"
        onChangeText={(val) => setOption2(val)}
      />

      <TextInput style={styles.main_input}
        placeholder="Quatro Formagi"
        onChangeText={(val) => setOption3(val)}
      />

      <View style={styles.button_container}>
        <Button
          title="Make a Choice"
          color='pink'
          onPress={onPres}
        />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({


  main_container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  upper_section: {
    backgroundColor: '#000000',
    height: 120,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    textAlign: 'center',
    marginBottom: 15,
  },


  upper_text: {
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 15,
    fontSize: 23,
    color: '#FFF'
  },

  main_input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    borderColor: '#E1DEDE',
    padding: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button_container: {
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: '30%',
    width: '40%',
  },

  optionStyle: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: ' 60%',
    padding: 10,

  },

  randomText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10
  },

  optionButtonContainer: {
    marginTop: 20
  }
});