import { FlatList, View, Text, VirtualizedList } from "react-native";
import React, { useState, useEffect } from "react";
import apis from "../../api/api";
import { ActivityIndicator } from "react-native-paper";
import dataHelper, { concatData } from "../../helpers/dataHelper";

const ScrollList = ({
  inverted = false,
  method = "",
  keys = (item) => item.id,
  Component,
  ListHeaderComponent,
  queries = {},
}) => {
  const methodApi = method.split(".");

  const [firstRequest, setFirstRequest] = useState(true);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [data, setData] = useState(() => {
    return [];
  });
  const [included, setIncluded] = useState(() => {
    return [];
  });
  const [query, setQuery] = useState(() => queries);

  const getConfig = () => {
    return {
      ...query,
      "paginator[limit]": limit,
      "paginator[page]": page,
    };
  };
  const loadData = async () => {
    try {
      console.log(page > count / limit && !firstRequest);
      if (page > count / limit && !firstRequest) return;
      setLoading(true);
      const config = getConfig();
      const res = (await apis[methodApi[0]][methodApi[1]]({ params: config }))
        .data;

      setLimit(res?.meta?.limit);
      setPage(res?.meta?.page + 1);
      setCount(res?.meta?.data_count);

      const preData = dataHelper(res.included, res?.data);
      setData([...data, ...preData]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    setFirstRequest(false);
  }, []);

  const renderData = ({ item }) => {
    return <Component item={item} included={included} />;
  };

  return (
    <FlatList
      inverted={inverted}
      ListHeaderComponent={ListHeaderComponent}
      style={{ flex: 1 }}
      onEndReachedThreshold={1}
      data={data}
      keyExtractor={keys}
      renderItem={renderData}
      onEndReached={({ distanceFromEnd }) => {
        !loading ? loadData() : null;
      }}
      ListFooterComponent={
        <View>
          {loading ? (
            <ActivityIndicator animating={true} color="green" size="large" />
          ) : (
            <Text></Text>
          )}
        </View>
      }
    />
  );
};

export default ScrollList;
