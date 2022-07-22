import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  Main,
  Settings,
  Background,
  Account,
  ChoosePhoto,
  Container,
  Header,
  Nickname,
  Button,
  Popup,
} from "@styles/myPage/Profile";
import { useNavigate, Link } from "react-router-dom";
import { BackArrow, ProfilePhoto, CloseIcon } from "@styles/svgIcon";

const Profile = () => {
  const subsUser = useSelector((state) => state.subsSlice.subsUser);
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const handleClick = () => {
    setPopup((prevState) => {
      return !prevState;
    });
  };

  return (
    <Settings>
      <Popup popup={popup}>
        <div>갤러리에서 사진 선택</div>
        <div>프로필 이미지 삭제</div>
      </Popup>
      <Background popup={popup} onClick={handleClick}></Background>
      <Main>
        <div className="h3div">
          <BackArrow onClick={() => navigate(-1)} />
          <h3>프로필 설정</h3>
        </div>
      </Main>

      <div>
        <Account>
          <div className="iconWrap" onClick={handleClick}>
            <ProfilePhoto />
          </div>

          <div>
            <span>{subsUser.name} 님</span>
            <p>{subsUser.email}</p>
          </div>
        </Account>

        <Container>
          <Header>
            <span>닉네임 변경</span>
            <p>최대 한글 nn자, 영문 nn자, 숫자 혼용 가능</p>
          </Header>

          <Nickname>
            <div className="input">
              <input
                type="text"
                maxLength="30"
                placeholder="입력을 해주세요."
              />
            </div>

            <div className="icon">
              <CloseIcon></CloseIcon>
            </div>
          </Nickname>
        </Container>
      </div>
      <Container $button>
        <Button>확인</Button>
      </Container>
    </Settings>
  );
};

export default Profile;
