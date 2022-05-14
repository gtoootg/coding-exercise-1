import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      <h1>{t("header.title")}</h1>
      <button onClick={()=>changeLanguage('de')}>changeLanguage</button>
      <button onClick={()=>changeLanguage('en')}>changeLanguage</button>
    </div>
  );
}

export default App;
