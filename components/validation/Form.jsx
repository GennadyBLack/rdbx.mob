import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import File from "./File";
import Picker from "./Picker";
import Upload from "./UploadValidation";
import { View, StyleSheet, Pressable, Text } from "react-native";
import s from "../../helpers/styleHelper";
import constants from "../../helpers/styleHelper";
import DateInput from "./Date";

function Form({
  defaultValues,
  children,
  onSubmit,
  resetForm = true,
  onSuccess,
}) {
  const methods = useForm({ defaultValues });
  const {
    reset,
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
  } = methods;
  const wrap = async (e) => {
    await onSubmit(e);
    resetForm ? await reset({ defaultValues }) : null;
    onSuccess ? await onSuccess() : null;
  };
  return (
    <View style={styles.form}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                control: control,
                key: child.props.name,
                errors: errors[child.props.name],
              },
            })
          : child;
      })}
      <Pressable onPress={handleSubmit((e) => wrap(e))} style={s.button}>
        <Text style={{ color: constants.LIGHT }}>Сохранить</Text>
      </Pressable>
    </View>
  );
}

Form.Input = Input;
Form.Upload = Upload;
Form.File = File;
Form.Date = DateInput;
Form.Picker = Picker;

export default Form;

const styles = StyleSheet.create({
  form: {
    width: "90%",
    margin: "5%",
    paddingTop: 5,
  },
});
