import { Provider } from "react-redux";

import ImageGrid from "./components/ImageGrid/ImageGrid";
import configureStore from "./store";
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ImageGrid />
    </Provider>
  );
};

export default App;
