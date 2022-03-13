const ParseFormData = (obj) => {
  const data = {};
  Object.keys(obj).forEach((item) => {
    if (typeof obj[item] === "object") {
      let cache = {};
      Object.keys(obj[item]).forEach((item_2) => {
        if (obj[item][item_2] !== "") {
          cache[item_2] = obj[item][item_2];
        }
      });
      if (Object.keys(cache).length > 0) {
        data[item] = cache;
      }
    } else if (obj[item] !== "") {
      data[item] = obj[item];
    }
  });
  return data;
};
export default ParseFormData;
