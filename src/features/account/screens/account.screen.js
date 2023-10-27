import React from "react";
import LottieView from "lottie-react-native";
import { Text, View ,ScrollView, 
  ImageBackground, Dimensions, Image} from 'react-native';
  import { Button } from 'react-native-elements';
  import { MaterialCommunityIcons } from '@expo/vector-icons';
  import { colors } from "../../../infrastructure/theme/colors";

import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (

<ScrollView style={{ flex: 1, backgroundColor:'#fff'}}
    showsVerticalScrollIndicator={false}>
      <ImageBackground source={require('../../../../assets/home_bg.jpg')}
      style={{height:Dimensions.get('window').height / 2.5}}>
       <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="contain"
          speed={0.6}
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      </ImageBackground>
      <View style={{flex:1.5, backgroundColor:'#ffffff', bottom:50, 
      borderTopStartRadius:60, borderTopEndRadius:60}}>
        <View style={{padding:40}}>
          <Text style={{color: colors.brand.primary, fontSize:34}}>Welcome</Text>
          <Text>Animals bring joy to the world
          
          </Text>
          
          <View style={{height:30, marginTop:-20, flexDirection:'row'}}> 
          
          </View>
          <View style={{height:100, justifyContent:'center', alignItems:'center'}}>
          <Button  raised  buttonStyle={{
                backgroundColor: colors.brand.primary,borderRadius: 30, shadowOffset:{width:1, height:10},
                shadowOpacity: 0.4,shadowRadius:3,elevation: 15, shadowColor:'#d751e0'}}
              containerStyle={{width:200, marginTop:10, borderRadius: 30,}} title='Register'
              onPress={() => navigation.navigate("Register")}/>
          </View>
          <View style={{height:50, justifyContent:'center', alignItems:'center'}}>
          <Button  raised  buttonStyle={{
                backgroundColor: colors.brand.primary,borderRadius: 30, shadowOffset:{width:1, height:10},
                shadowOpacity: 0.4,shadowRadius:3,elevation: 15, shadowColor:'#d751e0'}}
              containerStyle={{width:200, marginTop:10, borderRadius: 30,}} title='Login'
              onPress={() => navigation.navigate("Login")}/>
          </View>
          <View style={{flex:1, marginTop:40}}>
            <Text style={{textAlign:'center'}}>or Login With</Text>
            <View style={{flexDirection:'row', flex:1, justifyContent:'space-around', marginTop:20}}>
                <MaterialCommunityIcons name='facebook' style={{color:'black',fontSize:30}}/>
                <MaterialCommunityIcons name='google-plus' style={{color:'black',fontSize:30}} onPress={
                  () => {
                    promptAsync();
                  }
                }/>
                <MaterialCommunityIcons name='twitter' style={{color:'black',fontSize:30}}/>
            </View>
          </View>
          
        </View>
      </View>
    </ScrollView>

   /* <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="contain"
          speed={0.6}
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>
      
      <Title >LOGO</Title>
      <AccountContainer >
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer size="large">
          <AuthButton
          style={{width: 200}}
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>*/
  );
};
