import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCharacters } from "../api/characterApi";
import { Status } from "../helpers/enums/status";
import { QueryKeys } from "../helpers/enums/queryKeys";
import { useTranslation } from "react-i18next";
import Card from "./Card";
import styled from "styled-components";
import Spinner from "./Spinner";

const ContainerCharacters = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Characters() {
  const { t } = useTranslation();
  const [characters, setCharacters] = useState([]);
  const { data, status, isLoading } = useQuery({
    queryKey: [QueryKeys.Characters],
    queryFn: getCharacters,
  });
  const showCharacters = !isLoading && characters.length;


  useEffect(() => {
    if (status === Status.Success) {
      setCharacters(data.results);
      
    }
  }, [data, status]);

  const filtered = useMemo(() => {
    

    return characters;
  }, [characters]);

  const renderSpinner = isLoading && <Spinner text={t("consulting")} />;

  const renderCharacters = () => {
    return (
      showCharacters && (
        <div>
          <ContainerCharacters>
            {renderCardCharacters() || renderEmptyState}
          </ContainerCharacters>
        </div>
      )
    );
  };

  const renderCardCharacters = () => {
    return (
      filtered.length &&
      filtered.map((character, index) => (
        <Card
          img={character.image}
          name={character.name}
          gender={character.gender}
          species={character.species}
          key={character.name + index}
        />
      ))
    );
  };

  return <div>{renderCharacters() || renderSpinner}</div>;
}

export default Characters;
