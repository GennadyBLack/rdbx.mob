const dataHelper = (included, relations) => {
  try {
    const preData = {};
    const keys = Object.keys(included);

    if (keys.length > 0) {
      Object.values(included).forEach((value) => {
        if (!preData[value?.type]) {
          preData[value?.type] = {};
        } else {
          preData[value?.type][value?.id] = value;
        }
      });
    }
    return relations ? concatData(relations, preData) : preData;
  } catch (error) {
    console.error(error, "dataHelper");
  }
};

export default dataHelper;

export const concatData = (data, include) => {
  try {
    const pre = [];
    Array.isArray(data) &&
      data.length &&
      data.forEach((item) => {
        const preItem = { ...item };
        for (const key in item.relationships) {
          if (include[key][item?.relationships[key]?.id]) {
            preItem[key] = include[key][item?.relationships[key]?.id];
          }
        }
        pre.push({ ...preItem, include: include });
      });
    return pre;
  } catch (error) {
    console.error(error, "dataHelper");
  }
};
