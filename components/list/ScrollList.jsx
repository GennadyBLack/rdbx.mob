import { FlatList, View, Text, VirtualizedList } from "react-native";
import React, { useState, useEffect } from "react";
import apis from "../../api/api";

const ScrollList = ({
  method = "",
  keys,
  Component,
  loadMore,
  ListHeaderComponent,
  queries = {},
}) => {
  const methodApi = method.split(".");

  const renderData = ({ item }) => {
    return <Component item={item} />;
  };

  const [firstRequest, setFirstRequest] = useState(true);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState(() => {
    return [];
  });
  const [query, setQuery] = useState(() => queries);

  const getConfig = () => {
    return {
      ...query,
      limit: limit,
      offset: offset,
    };
  };
  const loadData = async () => {
    try {
      // 0 + 20  //18
      if (offset + limit >= count && !firstRequest) return;

      setLoading(true);
      const config = getConfig();
      const res = (await apis[methodApi[0]][methodApi[1]]({ params: config }))
        .data;
      await setData([...data, ...res?.data]);
      setCount(res?.meta.count);
      setLimit(res?.meta.limit);
      setOffset(offset + limit);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData();
    setFirstRequest(false);
  }, []);

  const getItem = (data, index) => ({
    ...data,
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });

  return (
    <FlatList
      //   getItem={getItem}
      //   getItemCount={() => data?.length}
      ListHeaderComponent={ListHeaderComponent}
      style={{ flex: 1 }}
      onEndReachedThreshold={0.7}
      data={data}
      keyExtractor={keys}
      renderItem={renderData}
      onEndReached={({ distanceFromEnd }) => {
        console.log("reached");
        loadData();
      }}
    />
  );
};

export default ScrollList;
