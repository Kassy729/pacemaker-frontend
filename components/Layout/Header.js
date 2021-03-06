import React, { useState } from "react";
import Link from "next/link";
// import {
//   HeaderWrapper,
//   Logo,
//   SearchWrapper,
//   IconList,
// } from "../../styles/styles";
import { LOGOUT_REQUEST, SIGNUP_REQUEST } from "../../reducers/user";

import { Avatar, Input, Layout, Button, Badge } from "antd";
import { useSelector, useDispatch } from "react-redux";
import ProfileEdit from "../../pages/profileEdit";

const { Header, Sider } = Layout;
import {
  CommentOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons/lib/icons";
import styled from "styled-components";

const { Search } = Input;

const header = () => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
  };

  const [visible, setVisible] = useState(false);

  const showEditProfile = () => {
    setVisible((prev) => !prev);
    console.log(visible);
  };

  const openDrawer = () => {
    setVisible(true);
    console.log(visible);
  };

  return (
    <HeaderWrapper>
      {/* <SearchWrapper>
        <Search placeholder="Search" enterButton="Writer" />
      </SearchWrapper> */}
      <Title>Pace-Maker</Title>
      {/* <Title>
        <img src="logo3.png" />
      </Title> */}
      <IconList>
        <Badge count={5} className="noti" size="small">
          <a>
            <BellOutlined />
          </a>
        </Badge>
        {/* <div className="notibox" /> */}

        <Button type="primary" onClick={() => logout()}>
          LogOut
        </Button>
        <AvatarDiv>
          <a>
            <Avatar onClick={openDrawer} src={me.profile} size={40}></Avatar>
            <ProfileEdit visible={visible} showEditProfile={showEditProfile} />
          </a>
        </AvatarDiv>
      </IconList>
    </HeaderWrapper>
  );
};

// 자전거 아이콘  제작자: Freepik - Flaticon

export default header;

const Title = styled.div`
  display: inline-block;
  color: #467ada;
  font-size: 38px;
  font-weight: bold;
  line-height: 70px;
`;

const AvatarDiv = styled.div`
  display: inline-block;
  line-height: 70px;
  position: relative;
  bottom: 4px;

  a {
    font-size: 20px;
  }
  .ant-avatar {
    background: #00a2ae;
  }
`;

// 헤더
export const HeaderWrapper = styled(Header)`
  display: inline-block;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background: #fff;
  padding: 0 6%;
  position: relative;
  border-bottom: 1px solid #e9e9e9;
  border-top-left-radius: 55px;
  // position: fixed;
  // top: 0;
  // z-index: 1;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // 
  img {
  //   width: 20px;
  //   height: 20px;
  // }
  
  p {
    color: black;
    font-weight: bold;
    padding-left: 4px;
    margin-left: 4px;
    margin-bottom: 0;
    text-overflow: hidden;
  }
`;

export const SearchWrapper = styled.div`
  display: inline-block;
  width: 500px;
  margin: 0 auto;
  align-items: center;
  span {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
  .ant-input {
    border-radius: 30px;
  }

  .ant-input-search
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button {
    width: 80px;
    border-radius: 30px;
    position: relative;
    right: 15px;
    z-index: 1;
  }
  .ant-input-group-addon {
    background-color: #fff;
  }
`;

export const IconList = styled.div`
  display: inline-block;
  height: 70px;
  line-height: 70px;
  vertical-align: middle;
  position: fixed;
  right: 2%;

  .noti {
    margin-right: 24px;

    a {
      font-size: 30px;
    }

    a:hover {
      color: #467ada;
      // color: black !important;
    }

    // animation: noti 300ms;
  }

  // @keyframes noti {
  //   from {
  //     transform: translateY(0);
  //   }

  //   to {
  //     transform: translateY(100%);
  //   }
  // }

  a {
    font-size: 25px;
  }

  .notibox {
    background: blue;
    width: 200px;
    height: 500px;
    position: relative;
    right: 160px;
  }

  .noti:hover {
    .notibox {
      background: red !important;
    }
  }

  .ant-btn {
    border-radius: 9px;
    position: relative;
    bottom: 4px;
    margin-right: 24px;
    font-weight: bold;
    background: #467ada;
    border: 1px solid #467ada;
  }
`;
