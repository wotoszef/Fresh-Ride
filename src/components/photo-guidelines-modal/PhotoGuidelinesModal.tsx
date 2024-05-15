import { Modal } from "@mui/material";
import {
  CloseButton,
  GuidelinesModalContainer,
  GuidelinesText,
  GuidelinesTitle,
  MainTitle,
  MainTitleContainer,
} from "../form-select/FormSelect.style";

interface IPhotoGuidelinesModal {
  open: boolean;
  handleClose: () => void;
}

const PhotoGuidelinesModal = ({ open, handleClose }: IPhotoGuidelinesModal) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <GuidelinesModalContainer>
        <GuidelinesText>
          <MainTitleContainer>
            <MainTitle>
              When uploading a photo, ensure it meets the following guidelines:
            </MainTitle>
            <CloseButton onClick={handleClose}>X</CloseButton>
          </MainTitleContainer>
          <GuidelinesTitle>Jakość i Przejrzystość:</GuidelinesTitle>Dąż do
          uzyskania obrazu o wysokiej rozdzielczości, który jest wyraźny i
          ostry, co pozwoli na łatwe rozpoznanie przedmiotu. <br />
          <GuidelinesTitle>Światło i Kompozycja:</GuidelinesTitle>Wybierz dobrze
          oświetlone środowisko, najlepiej z naturalnym światłem. Umieść
          przedmiot centralnie i upewnij się, że jest on wyraźnie widoczny, bez
          rozpraszających tła. <br />
          <GuidelinesTitle>Poza i Ekspresja:</GuidelinesTitle>Zachęcaj do
          naturalnej i zrelaksowanej pozy modela, z prawdziwym wyrazem twarzy,
          który pasuje do kontekstu zdjęcia. <br />
          <GuidelinesTitle>Ubiór i Wygląd:</GuidelinesTitle>Ubierz się
          odpowiednio do okazji, dbając o to, aby ubranie było schludne i
          prezentacyjne. Unikaj wszelkich dodatków lub ubioru, które mogą
          odwrócić uwagę od przedmiotu. <br />
          <GuidelinesTitle>Restrykcje Kontentu:</GuidelinesTitle>Zdjęcia
          zawierające eksploratywną treść lub treści przeznaczone dla osób
          dorosłych, obrazy celebrytów oraz znane logo są niedozwolone. Upewnij
          się, że zdjęcie przestrzega praw autorskich i przepisów dotyczących
          prywatności. <br />
          <GuidelinesTitle>Format i rozmiar pliku:</GuidelinesTitle>Zapisz
          zdjęcie w powszechnym formacie pliku, takim jak JPEG lub PNG,
          zachowując równowagę między jakością a rozmiarem pliku, aby umożliwić
          efektywne przesyłanie i przeglądanie. <br />
          <GuidelinesTitle>Edycja:</GuidelinesTitle> W razie potrzeby dokonaj
          drobnych dostosowań, aby poprawić wygląd zdjęcia. Jednak unikaj
          nadmiernej edycji, która zmienia wygląd przedmiotu lub zniekształca
          rzeczywistość. <br />
          <GuidelinesTitle>Szacunek i Zgoda:</GuidelinesTitle>Zdobądź zgodę od
          osób widocznych na zdjęciu przed jego udostępnieniem. Szanuj ich
          prywatność i prawa, upewniając się, że wszystkie strony zgadzają się
          na udostępnienie obrazu.
        </GuidelinesText>
      </GuidelinesModalContainer>
    </Modal>
  );
};

export default PhotoGuidelinesModal;
