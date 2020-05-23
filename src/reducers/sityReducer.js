const initialState = {
  chosenSities: [
    {
      name: "Москва",
      id: "12333",
    },
    {
      name: "Питер",
      id: "12334",
    },
  ],
  loadedSities: null,
};

export const sityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_SITIES":
      return { ...state, loadedSities: action.payload };
    case "ADD_SITY":
      return {
        ...state,
        chosenSities: [...state.chosenSities, action.payload],
      };
    case "REMOVE_SITY":
      return {
        ...state,
        chosenSities: state.chosenSities.filter(
          (sity) => sity.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
