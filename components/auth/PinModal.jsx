import React, { useState, useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import ModalSheet from "../base/ModalSheet";
import s from "../../helpers/styleHelper";
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import { getIcon } from "../../helpers/iconHelper";

const PinModal = ({ success, show, pin, token, children }) => {
  const [pincode, setPinCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const root = useStore();

  const setPin = (val) => {
    setPinCode(pincode + val);
  };

  const deleteChapter = () => {
    setPinCode(pincode.slice(0, -1));
  };

  const [visible, setVisible] = useState(() => {
    return show;
  });

  const checkPin = async () => {
    try {
      if (pincode?.length === pin?.length) {
        if (pincode === pin) {
          await success();
          setVisible(!visible);
        } else {
          root.setError({ message: "не верный пин код" });
          setErrorMessage("Hе верный пин код");
          setPinCode("");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkPin();
  }, [pincode]);

  return (
    <View style={{ flex: 1 }}>
      <Pressable
        style={{ height: 30, width: 30 }}
        onPress={() => {
          setVisible(!visible);
        }}
      >
        {token && pin ? <Text>{getIcon("hand")}</Text> : <Text></Text>}
      </Pressable>
      <ModalSheet
        startAt={1}
        visible={visible}
        toggle={() => {
          setVisible(!visible);
        }}
      >
        <View
          style={{
            justifyContent: "flex-end",
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <View>
            {children}
            <Text>{errorMessage}</Text>
            <Text>{pincode}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={s.pin_button}
              onPress={() => {
                setPin(1);
              }}
            >
              <View>
                <Text>1</Text>
              </View>
            </Pressable>
            <Pressable
              style={s.pin_button}
              onPress={() => {
                setPin(2);
              }}
            >
              <View>
                <Text>2</Text>
              </View>
            </Pressable>
            <Pressable
              style={s.pin_button}
              onPress={() => {
                setPin(3);
              }}
            >
              <View>
                <Text>3</Text>
              </View>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={s.pin_button}
              onPress={() => {
                setPin(4);
              }}
            >
              <View>
                <Text>4</Text>
              </View>
            </Pressable>
            <Pressable
              style={s.pin_button}
              onPress={() => {
                setPin(5);
              }}
            >
              <View>
                <Text>5</Text>
              </View>
            </Pressable>
            <Pressable
              style={s.pin_button}
              onPress={() => {
                setPin(6);
              }}
            >
              <View>
                <Text>6</Text>
              </View>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={s.pin_button}
              onPress={() => {
                setPin(7);
              }}
            >
              <View>
                <Text>7</Text>
              </View>
            </Pressable>
            <Pressable
              style={s.pin_button}
              onPress={() => {
                setPin(8);
              }}
            >
              <View>
                <Text>8</Text>
              </View>
            </Pressable>
            <Pressable
              style={s.pin_button}
              onPress={() => {
                setPin(9);
              }}
            >
              <View>
                <Text>9</Text>
              </View>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={s.pin_button}
              onPress={() => {
                setVisible(!visible);
              }}
            >
              <View>
                <Text>{getIcon("close")}</Text>
              </View>
            </Pressable>
            <Pressable
              style={s.pin_button}
              onPress={() => {
                setPin(0);
              }}
            >
              <View>
                <Text>0</Text>
              </View>
            </Pressable>
            <Pressable style={s.pin_button} onPress={() => deleteChapter()}>
              <View>
                <Text>Del</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ModalSheet>
    </View>
  );
};

export default observer(PinModal);
