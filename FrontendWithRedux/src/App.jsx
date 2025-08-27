// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ChildThemeLayout } from "./Layout/ChildThemeLayout";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store, persistor } from "./_store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes>
              <Route path="/*" element={<ChildThemeLayout />} />
            </Routes>
          </PersistGate>
        </Provider>
      </HelmetProvider>
    </div>
  );
}

export default App;
