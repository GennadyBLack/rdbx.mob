import React, { useState, useEffect } from "react";
import { getIcon } from "../helpers/iconHelper";
import * as LocalAuthentication from "expo-local-authentication";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function useFingerPrint(success) {
  const [supportBiometric, setSupportBiometric] = useState(false);
  const [fingerprint, setFingerprint] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setSupportBiometric(compatible);
      const enroll = await LocalAuthentication.isEnrolledAsync();
      if (enroll) {
        setFingerprint(true);
      }
    })();
  }, []);

  const handle = async () => {
    try {
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: "Login with Biometrics",
        disableDeviceFallback: true,
        cancelLabel: "Cancel",
      });
      if (biometricAuth.success) {
        await success();
        // await navigation.replace("Public");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const content = (
    <View>
      {supportBiometric && fingerprint ? (
        <TouchableOpacity onPress={handle}>
          {getIcon("fingerprint")}
        </TouchableOpacity>
      ) : (
        <View>
          <Text></Text>
        </View>
      )}
    </View>
  );
  return [content, handle, fingerprint];
}
