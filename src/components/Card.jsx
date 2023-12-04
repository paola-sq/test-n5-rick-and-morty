import styled from "styled-components";
import Label from "./Label";
import InputGender from "./InputGender";
import { Genders } from "../helpers/enums/genders";
import { Colors } from "../helpers/enums/colors";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faVenusMars} from '@fortawesome/free-solid-svg-icons';
import { faFingerprint} from '@fortawesome/free-solid-svg-icons';

const { Male } = Genders;
const { GreyLight, BgPink, Pink, BgBlue, Blue } = Colors;

const CardContainer = styled.div`
  border: 1px solid ${GreyLight};
  margin: 6px auto;
  padding: 7px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 10px 10px rgba(0, 0, 255, 0.5);
  }
  width: 330px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 8px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Name = styled.p`
  font-size: 12px;
`;

function CardCharacter({ name, img, gender, species }) {
  const { t } = useTranslation();
  const bgGender = gender === Male ? BgBlue : BgPink;
  const colorGender = gender === Male ? Blue : Pink;
  const speciesText = species.toLowerCase();
  const genderText = gender.toLowerCase();

  return (
    <CardContainer id={name}>
      <HeaderContainer>
        <div>
          <Image src={img} />
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '2px' }} />
          <Label text={t("character.name")} />
          <Name>{name}</Name>

          <FontAwesomeIcon icon={faFingerprint} style={{ marginRight: '2px' }} />
          <Label text={t(`character.species.${speciesText}`)} />
          <Name>{species}</Name>

          <FontAwesomeIcon icon={faVenusMars} style={{ marginRight: '2px' }} />
          <Label text={t("character.gender.label")} />
          <InputGender
            text={t(`character.gender.${genderText}`)}
            background={bgGender}
            color={colorGender}
          />
        </div>
      </HeaderContainer>
    </CardContainer>
  );
}

export default CardCharacter;
