import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-paper";

const GridList = ({
  searchable,
  data,
  onChange,
  template,
  Component,
  inputProps,
  children,
  wrap_style = {},
}) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    onChange && search ? onChange(search) : onChange();
  }, [search]);

  return (
    <ScrollView style={[styles.container, wrap_style]}>
      {searchable ? (
        <View style={{ justifyContent: "center", paddingHorizontal: 10 }}>
          <TextInput
            onChangeText={(e) => setSearch(e)}
            value={search}
            {...inputProps}
            placeholder="Search"
          />
        </View>
      ) : (
        <Text></Text>
      )}
      <View>{children}</View>
      {data?.length && template ? (
        data.map((item, ind) => {
          return template(item);
        })
      ) : (
        <Text></Text>
      )}
      {data?.length && Component ? (
        data.map((item, ind) => {
          return <Component item={item} key={ind} />;
        })
      ) : (
        <Text></Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 5,
  },
});
export default GridList;
