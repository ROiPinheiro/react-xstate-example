import React from "react";
import Toggle from "./components/Toggle";
import RedditPosts from "./components/RedditPosts";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <RedditPosts />
      <Toggle />
    </>
  );
}

export default App;
