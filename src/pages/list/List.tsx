import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";

function List() {
  const { t, i18n } = useTranslation();

  const location = useLocation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      <h1>{t("header.title")}</h1>
      <button onClick={()=>changeLanguage('de')}>changeLanguage</button>
      <button onClick={()=>changeLanguage('en')}>changeLanguage</button>
      list
      <button onClick={()=>console.log(location.pathname)}>show Location</button>
      <button onClick={()=>console.log(typeof(i18n.language))}>i18</button>
    </div>
  );
}

export default List;