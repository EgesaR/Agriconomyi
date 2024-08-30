import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import FormField from "../../components/FormField";
import { Button, Card, TextInput } from "react-native-paper";
import { Link, router } from "expo-router";
import { icons } from "../../constants";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  return (
    <KeyboardAvoidingView>
      <SafeAreaView>
        <View style={tw`bg-blue-500 h-[100%] px-3 pt-5`}>
          <Card style={tw`flex flex-col py-20 items-center bg-[#ffffff]`}>
            <Text style={tw`font-bold text-4xl mt-4`}>Sign in your account</Text>
            <Button buttonColor="rgb(228 228 231)" icon="camera" mode="contained-tonal" onPress={() => console.log('Pressed')} style={tw`mt-4`}>
              <Text style={tw`font-bold text-lg `}>Sign in with Google</Text>      
            </Button>
            <Button buttonColor="rgb(228 228 231)" icon="camera" mode="contained-tonal" onPress={() => console.log('Pressed')} style={tw`mt-4`}>
              <Text style={tw`font-bold text-lg `}>Sign in with Google</Text>      
            </Button>
            <View style={tw`flex flex-row items-center gap-3`}>
              <View style={tw`grow h-1 bg-black rounded-lg`}></View>
              <Text style={tw`text-lg`}>Or continue with</Text>
              <View style={tw`grow h-1 bg-black rounded-lg`}></View>
            </View>
            <View>
              <TextInput
                mode="outlined"
                label="Email"
                value={form.email}
                onChangeText={(e: string) => setForm({ ...form, email: e })}
              />
              <TextInput
                activeOutlineColor="rgb(226 232 240)"
                value={form.password}
                label={"Password"}
                onChangeText={(e: string) => setForm({ ...form, password: e })}
                mode="outlined"
                textColor="black"
                right={"Password" === "Password" && (
                  <TextInput.Icon 
                    icon={!showPassword ? icons.eye : icons.eyeHide} 
                    onPress={() => setShowPassword(!showPassword)}
                  />
                )}
                secureTextEntry={"Password" === "Password" && !showPassword}
              />
            </View>
            <Text>Forgot Password?</Text>
            <Button icon="camera" mode="contained-tonal" onPress={() => console.log('Pressed')}>
              <Text style={tw`font-bold text-lg `}>Continue</Text>    
            </Button>
          </Card>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default SignIn;

/*
const SignIn = ({ navigation }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    if (form.email.length < 1 || form.password.length < 1) {

    } else {

    }
  };

  return (
    <KeyboardAvoidingView
      style={tw`flex-1`}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
    <SafeAreaView style={tw`bg-white h-full py-5 px-6`}>
      <Text style={tw`text-3xl font-base no-wrap`}>
        Hello there,
        <br />
        Login here
      </Text>
      <View style={tw`mt-5 w-full px-2`}>
        <FormField
          placeholder={"Email"}
          title={"Email"}
          value={form.email}
          handleChangeText={(e: string) => setForm({ ...form, email: e })}
          style={tw`mt-3`}
          otherStyles={""}
        />
        <FormField
          placeholder={"Password"}
          title={"Password"}
          value={form.password}
          handleChangeText={(e: string) => setForm({ ...form, password: e })}
          style={tw`mt-3`}
          otherStyles={""}
        />
        <View style={tw`items-center`}>
          <Button
            mode="contained"
            onPress={() => router.push("/home")}
            style={tw`mt-6 w-[50%]`}
          >
            Login
          </Button>
        </View>
        <View style={tw`flex-col justify-center items-center`}>
          <Text style={tw`text-base text-gray-400 my-4`}>Forgot password?</Text>
          <br />
          <Text style={tw`text-sm text-blue-400 mt-1`}>or</Text>
          <View>
            <Button
              mode="outlined"
              onPress={() => console.log("Pressed")}
              style={tw`mt-5`}
            >
              Sign in with Google
            </Button>
            <View style={tw`flex-row gap-2 items-center mt-4`}>
              <Text>Have no account?</Text>
              <Button mode="text">
                <Link href="/sign-up">Sign Up</Link>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
      </KeyboardAvoidingView>
  );
};
*/
