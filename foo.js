export const foo = (state) => {
  state.heyo = async (a, b = 5000) => {
    console.log(b);
  };
};

