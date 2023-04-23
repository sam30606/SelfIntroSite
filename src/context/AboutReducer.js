export const AboutReducer = (state, action) => {
  if (action.type === "SUCCESS") {
    return { ...state, datas: action.payload };
  }
};
