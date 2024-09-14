export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTS":
      return { ...state, dents: action.payload };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "TOGGLE_THEME":
      console.log(state.theme)
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "REMOVE_FAV":
      const filteredFavs = state.favs.filter(
        (fav) => fav.id !== action.payload.id
      );
      return { ...state, favs: filteredFavs };
    case "REMOVE_ALL_FAV":
      return { ...state, favs:[] };
  }
};