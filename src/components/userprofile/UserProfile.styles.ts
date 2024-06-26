import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 700px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4%;

  @media only screen and (max-width: 765px) {
    width: 90vw;
  }

  @media only screen and (max-width: 738px) {
    width: 100vw;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserId = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const InfoWrapper = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
`;
export const UserImg = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
`;

export const NumBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60px;
  min-width: 60px;
  cursor: pointer;
`;

export const Num = styled.span`
  font-weight: 700;
  font-size: 17px;
`;

export const NumText = styled.span`
  font-weight: 500;
  font-size: 15px;
`;

export const IntroduceWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 3.5%;
  margin-bottom: 2%;
`;

export const Name = styled.span`
  font-weight: 600;
`;

export const Introduce = styled.span`
  font-size: 14px;
`;

export const Website = styled.a`
  font-size: 14px;
  color: #81bef7;
  text-decoration: none;
  &:visited {
    color: #81bef7;
  }
  &:hover {
    color: #81bef7;
  }
  &:active {
    color: #81bef7;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Button = styled.button`
  width: 49%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #f2f2f2;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const DivineLine = styled.div`
  margin-top: 3%;
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
`;

export const PostWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Post = styled.div`
  width: 33.333%;
  padding-top: 33.333%;
  position: relative;
`;

export const Img = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #f2f2f2;
  border: 1px solid #ffffff;
`;

export const GuideTextWrapper = styled.div`
  margin-top: 8%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GuideText = styled.span`
  font-size: 18px;
  font-weight: 800;
`;
