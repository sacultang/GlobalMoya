import styled from "styled-components";
import { ReactComponent as TranslateKoSvg } from "@assets/Translate-ko.svg";
import { ReactComponent as TranslateEnSvg } from "@assets/Translate-en.svg";
import { ReactComponent as ShareIconSvg } from "@assets/ShareIcon.svg";
import { ReactComponent as ScrapIconSvg } from "@assets/ScrapIcon.svg";
import { ReactComponent as ExpandMoreIconSvg } from "@assets/ExpandMoreIcon.svg";
import { ReactComponent as LearnMoreSvg } from "@assets/LearnMore.svg";
import { ReactComponent as GlobalMoyaSvg } from "@assets/globalMOYA.svg";
import { ReactComponent as IconsFacebookSvg } from "@assets/icons-facebook.svg";
import { ReactComponent as IconsInstagramSvg } from "@assets/icons-instagram.svg";
import { ReactComponent as IconsKakaotalkSvg } from "@assets/icons-kakaotalk.svg";
import { ReactComponent as ProfileIconSvg } from "@assets/ProfileIcon.svg";
import { ReactComponent as SearchIconSvg } from "@assets/searchIcon.svg";
import { ReactComponent as FilterIconSvg } from "@assets/icons-filter.svg";
import { ReactComponent as MagazineDisableSvg } from "@assets/ViewMagazine-disable.svg";
import { ReactComponent as TextDisableSvg } from "@assets/ViewText-disable.svg";
import { ReactComponent as CardDisableSvg } from "@assets/ViewCard-disable.svg";
import { ReactComponent as MagazineSvg } from "@assets/ViewMagazine.svg";
import { ReactComponent as TextSvg } from "@assets/ViewText.svg";
import { ReactComponent as CardSvg } from "@assets/ViewCard.svg";
import { ReactComponent as CancelSvg } from "@assets/icons-cancel.svg";
import { ReactComponent as BackArrowSvg } from "@assets/BackArrow.svg";
import { ReactComponent as IconsDeleteSvg } from "@assets/icons-delete.svg";
import { ReactComponent as IconsXSvg } from "@assets/icons-x.svg";
import { ReactComponent as IconsCheckSvg } from "@assets/icons-check.svg";
import { ReactComponent as IconsStarSvg } from "@assets/icons-star.svg";
import { ReactComponent as AttachIconSvg } from "@assets/AttachIcon.svg";
import { ReactComponent as CloseIconSvg } from "@assets/CloseIcon.svg";
import { ReactComponent as PhotoIconSvg } from "@assets/PhotoIcon.svg";
import { ReactComponent as globalMOYAPremiumSvg } from "@assets/globalMOYAPremium.svg";
import { ReactComponent as ProfilePhotoSvg } from "@assets/ProfilePhoto.svg";
import { ReactComponent as MoreIconSvg } from "@assets/MoreIcon.svg";
import { ReactComponent as ScrapCheckSvg } from "@assets/ScrapCheckIcon.svg";
import { ReactComponent as ScrapCheckboxSvg } from "@assets/ScrapCheckboxIcon.svg";
import { ReactComponent as ScrapDelCheckboxSvg } from "@assets/ScrapDelCheckboxIcon.svg";
import { ReactComponent as NewGroupPlusSvg } from "@assets/NewGroupPlusIcon.svg";
import { ReactComponent as IconstotopSvg } from "@assets/icons-totop.svg";
import { ReactComponent as IconsCheckCircleSvg } from "@assets/icons-Success.svg";
import { colors } from "./theme";
export const ScrapCheckbox = styled(ScrapCheckboxSvg)``;
export const ScrapDelCheckbox = styled(ScrapDelCheckboxSvg)`
  circle {
    stroke: ${(props) =>
      props.checked ? colors.white : colors.pointOrange200};
    fill: ${(props) => (props.checked ? colors.pointOrange200 : colors.white)};
  }
  path {
    stroke: ${(props) =>
      props.checked ? colors.white : colors.pointOrange200};
  }
`;
export const NewGroupPlus = styled(NewGroupPlusSvg)``;
export const MoreIcon = styled(MoreIconSvg)`
  position: absolute;
  right: 6px;
`;
export const TranslateIconKo = styled(TranslateKoSvg)``;
export const TranslateIconEn = styled(TranslateEnSvg)``;
export const ShareIcon = styled(ShareIconSvg)``;
export const ScrapIcon = styled(ScrapIconSvg)`
  fill: ${(props) => (props.$scrap ? colors.pointOrange200 : "none")};
  path {
    stroke: ${(props) =>
      props.$scrap ? colors.pointOrange200 : colors.gray770};
  }
`;
export const ScrapCheckIcon = styled(ScrapCheckSvg)`
  circle {
    stroke: ${(props) =>
      props.$scrapcheck ? colors.white : colors.pointOrange200};
    fill: ${(props) =>
      props.$scrapcheck ? colors.pointOrange200 : colors.white};
  }
  path {
    stroke: ${(props) =>
      props.$scrapcheck ? colors.white : colors.pointOrange200};
  }
`;

export const ExpandMoreIcon = styled(ExpandMoreIconSvg)`
  transform: ${({ $expand }) => {
    if ($expand === "expand") {
      return "rotate(180deg) translateY(0%)";
    } else if ($expand === "none") {
      return "rotate(0deg) translateY(50%)";
    } else if ($expand === "card") {
      return "rotate(0deg) translateY(0%)";
    }
  }};
  cursor: pointer;
  position: absolute;
  top: ${({ $expand }) => ($expand === "expand" ? "10px" : "0px")};
  right: 10px;
`;

export const GlobalMoyaLogo = styled(GlobalMoyaSvg)`
  cursor: pointer;
`;
export const IconsFacebook = styled(IconsFacebookSvg)``;
export const IconsInstagram = styled(IconsInstagramSvg)``;
export const IconsKakaotalk = styled(IconsKakaotalkSvg)``;
export const ProfileIcon = styled(ProfileIconSvg)`
  width: 36px;
  height: 36px;
`;
export const SearchIcon = styled(SearchIconSvg)`
  width: 24px;
  circle {
    stroke: ${colors.gray400};
  }
  path {
    stroke: ${colors.gray400};
  }
`;
export const FilterIcon = styled(FilterIconSvg)``;

export const TextDisable = styled(TextDisableSvg)``;
export const MagazineDisable = styled(MagazineDisableSvg)``;
export const CardDisable = styled(CardDisableSvg)``;

export const TextView = styled(TextSvg)``;
export const MagazineView = styled(MagazineSvg)``;
export const CardView = styled(CardSvg)``;

export const CancelIcon = styled(CancelSvg)``;
export const BackArrow = styled(BackArrowSvg)``;

export const DeleteIcon = styled(IconsDeleteSvg)``;
export const XIcon = styled(IconsXSvg)``;
export const CheckIcon = styled(IconsCheckSvg)``;
export const StarIcon = styled(IconsStarSvg)`
  fill: ${({ $clip }) => ($clip ? colors.pointOrange100 : "none")};
  path {
    stroke: ${({ $clip }) => ($clip ? colors.pointOrange100 : "#B7B7B7")};
  }
`;
export const LearnMore = styled(LearnMoreSvg)``;
export const AttachIcon = styled(AttachIconSvg)``;
export const CloseIcon = styled(CloseIconSvg)``;
export const PhotoIcon = styled(PhotoIconSvg)``;
export const GlobalMOYAPremium = styled(globalMOYAPremiumSvg)`
  cursor: pointer;
`;
export const ProfilePhoto = styled(ProfilePhotoSvg)``;
export const Iconstotop = styled(IconstotopSvg)``;
export const IconsCheckCircle = styled(IconsCheckCircleSvg)``;
