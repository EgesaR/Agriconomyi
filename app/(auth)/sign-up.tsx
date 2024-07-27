import React, { useContext, useState } from "react";
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
import { Button } from "react-native-paper";
import { router } from "expo-router";
import { Snackbar } from "react-native-paper";
import { launchCamera, launchImageLibrary } from "react-native-image-picker"


const SignUp = ({ navigation }) => {
  const [error, setError] = useState<String>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [displayPicture, setDisplayPicture] = useState();
  const [visible, setVisible] = React.useState(false);

  //Selects and sets image from the device
  const onPickPicture = () => {
    launchImageLibrary({
      mediaType: 'photo'   
    }, (data) => {
      setDisplayPicture(data.assets[0].uri)
      console.log(data)
    })
  }

  function onClickPicture(){
    launchImageLibrary({
      mediaType: 'photo'   
    }, (data) => {
      setDisplayPicture(data.assets[0].uri)
      console.log(data)
    })
  }

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const handleSignUp = () => {
    if (
      form.name.length < 1 ||
      form.email.length < 1 ||
      form.password.length < 1 ||
      form.repeatPassword.length < 1
    ) {
      setError("All field are required");
      onToggleSnackBar();
    } else if (form.password !== form.repeatPassword) {
      setError("Password and repeat password must be same");
      onToggleSnackBar();
    } else {
      const user = {
        name: form.name,
        email: form.email,
        password: form.password,
      };
    }
  };

  return (
    <KeyboardAvoidingView
      style={tw`flex-1`}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={tw`bg-white h-full py-5 px-6`}>
        <Text style={tw`text-2xl font-base no-wrap`}>
          New here,
          <br />
          Sign up here
        </Text>
        <View style={tw`mt-3 w-full px-2`}>
          <View style={tw`items-center`}>
            <Image source={{ uri: !displayPicture ? null : displayPicture }} style={tw`h-25 w-25 border-2 border-white rounded-full bg-slate-500`} />
            <View style={tw`flex-row justify-center items-center w-[50%]`}>
              <Button onPress={onPickPicture}>
                <Text>Choose Picture</Text>
              </Button>
              <Button onPress={onClickPicture}>
                <Text>Remove Picture</Text>
              </Button>
            </View>
          </View>
          <FormField
            placeholder={"Username"}
            title={""}
            value={form.name}
            handleChangeText={(e) => {
              setError("");
              setForm({ ...form, name: e });
            }}
            style={tw`mt-1 h-[3rem] justify-center`}
            otherStyles={""}
          />
          <FormField
            placeholder={"Email"}
            title={""}
            value={form.email}
            handleChangeText={(e) => {
              setError("");
              setForm({ ...form, email: e });
            }}
            style={tw`mt-1 h-[3rem] justify-center`}
            otherStyles={""}
          />
          <FormField
            placeholder={"Password"}
            title={""}
            value={form.password}
            handleChangeText={(e) => {
              setError("");
              setForm({ ...form, password: e });
            }}
            style={tw`mt-1 h-[3rem] justify-center`}
            otherStyles={""}
          />
          <FormField
            placeholder={"Verify Password"}
            title={""}
            value={form.repeatPassword}
            handleChangeText={(e) => {
              setError("");
              setForm({ ...form, repeatPassword: e });
            }}
            style={tw`mt-1 h-[3rem] justify-center`}
            otherStyles={""}
          />
          <View style={tw`items-center`}>
            <Button
              mode="contained"
              onPress={handleSignUp}
              style={tw`mt-6 w-[50%]`}
            >
              Sign Up
            </Button>
          </View>
          <View style={tw`flex-col justify-center items-center`}>
            <br />
            <Text style={tw`text-sm text-blue-400 mt-1`}>or</Text>
            <View>
              <Button
                mode="outlined"
                onPress={() => console.log("Pressed")}
                style={tw`mt-5`}
              >
                Sign up with Google
              </Button>
              <View style={tw`flex-row gap-2 items-center mt-4`}>
                <Text>Have no account?</Text>
                <Button mode="text">
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </View>
            </View>
            <View style={tw`w-[100%]`}>
              <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                style={tw`w-[60%] bg-red-500 mb-14 ml-auto mr-auto`}
                duration={4500}
                action={{
                  label: "Close",
                  onPress: () => {
                    setVisible(false);
                  },
                }}
              >
                {error}
              </Snackbar>
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
export default SignUp;
