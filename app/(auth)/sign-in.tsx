import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Alert, Image, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import FormField from "../../components/FormField";
import { Button } from "react-native-paper";
import { Link, router } from "expo-router";

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

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
export default SignIn;
