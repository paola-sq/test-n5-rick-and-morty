import React, { useState } from "react";
import styled from "styled-components";
import i18n from "../language/i18n";
import { Colors } from "../helpers/enums/colors";

const { Pink } = Colors;

const Button = styled.button`
  border: none;
  background-color: ${({ lang, activeLang }) =>
  lang === activeLang ? Pink : "#000"};
  color: white;
  cursor: pointer;
  font-weight: ${({ lang, activeLang }) => (lang === activeLang ? "bold" : "")};
  margin: 0px 4px;
  padding: 4px 4px;
`;

function Language() {
  const [activeLang, setActiveLang] = useState("es");
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setActiveLang(language);
  };

  return (
    <div>
      <Button
        lang="en"
        activeLang={activeLang}
        onClick={() => changeLanguage("en")}
      >
        EN
      </Button>
      <Button
        lang="es"
        activeLang={activeLang}
        onClick={() => changeLanguage("es")}
      >
        ES
      </Button>
    </div>
  );
}

export default Language;
