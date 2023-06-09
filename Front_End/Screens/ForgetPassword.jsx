import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  formStyles,
  inputOptions,
  inputStyling,
} from "../Styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../Components/Footer";
import { useDispatch } from "react-redux";
import { forgetPassword } from "../Redux/Actions/OtherAction";
import { useMessageAndErrorOther } from "../Utils/hooks";

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const loading = useMessageAndErrorOther(dispatch,navigation, "verify");

  const submitHandler = () => {
    dispatch(forgetPassword(email))
  };

  return (
    <>
      <View style={defaultStyle}>
        <View style={{ marginBottom: 20, marginTop: 30 }}>
          <Text style={formHeading}>Login</Text>
        </View>
        <View style={formStyles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            multiline={false}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={formStyles.forget}>Forget Password</Text>
          </TouchableOpacity>
          <Button
            loading={loading}
            textColor={colors.color2}
            disabled={email === ""}
            style={formStyles.btn}
            onPress={submitHandler}
          >
            Send OTP
          </Button>
          <Text style={formStyles.or}>OR</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={formStyles.link}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};

export default ForgetPassword;