import React, { useState } from "react";
import wrapper from "../store/configureStore";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { END } from "redux-saga";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { USER_SEARCH_REQUEST, LOAD_MY_INFO_REQUEST } from "../reducers/user";
import { Card, Input, Avatar, Button } from "antd";
import FollowButton from "../components/FollowButton";
import { Form } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ProfileEdit from "./profileEdit";

function userSearch() {
  const { Search } = Input;

  const dispatch = useDispatch();
  const { searchUsers } = useSelector((state) => state.user);
  const handleButton = () => {
    const searchName = document.getElementById("searchName").value;
    dispatch({
      type: USER_SEARCH_REQUEST,
      data: searchName,
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

  const closeDrawer = () => {
    setVisible(false);
    console.log(visible);
  };

  return (
    <Container style={{ marginTop: 70, padding: "2% 5% 0 5%" }}>
      <Search
        //   loading={searchmapLoading}
        onPressEnter={handleButton}
        placeholder="유저를 입력해주세요"
        enterButton
        icon={<SearchOutlined />}
        id="searchName"
        size="large"
        style={{ marginBottom: 30 }}
      />
      {searchUsers.map((m) => (
        <>
          {/* <Card>
            <div>
              <Avatar size={58}>{m.profile}</Avatar>
            </div>

            {m.name}
            <br></br>
            {m.sex}
            <br></br>
            {m.mmr}
          </Card> */}
          {/* <FollowButton post={m}></FollowButton> */}
          {/* <RightDiv>
            <ColorCard />
            <Card>
              <AvatarTag size={130} src="kurumi.jpg" icon={<UserOutlined />} />

              <h1>ddd</h1>
              <h1>ddd</h1>
              <h1>ddd</h1>
            </Card>
          </RightDiv> */}
          {/* <Card> */}
          <ProfileDiv>
            <Card></Card>
          </ProfileDiv>
          {/* </Card> */}
        </>
      ))}
    </Container>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default userSearch;

const ProfileDiv = styled.div`
  display: inline-block;
  width: 300px;
  height: 300px;
  // border: solid 1px grey;

  background-image: url("homer.png");
  background-size: contain;
  background-repeat: no-repeat;
  // background-position: center;
`;

const Container = styled.div`
  display: inline-block;
  width: 100%;
  // height: 100%;
  // .title {
  //   weight: 600px;
  //   height: 600px;
  //   background-image: url("1.png");
  //   background-color: transparent;
  //   background-repeat: no-repeat;
  //   background-position: center;
  // }

  .ant-card {
    width: 100% !important;
  }
`;

const RightDiv = styled.div`
  margin-top: 50px;
  display: inline-block;

  width: 400px;
  height: 500px;

  .ant-card {
    width: 100%;
    height: 400px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  .ant-card-body {
    padding: 0;
  }

  color: black;
`;

const ColorCard = styled(Card)`
  display: inline-block;
  background: #1890ff;
  height: 70px !important;

  border-top-left-radius: 30px !important;
  border-top-right-radius: 30px !important;
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;

  .ant-card {
    width: 100%;
  }
`;

const FormWrapper = styled.div`
  height: 90%;
  padding: 2%;
  margin-top: 30px;
`;

const AvatarTag = styled(Avatar)`
  position: relative;
  float: left;
  bottom: 40px;
  left: 50px;
  // transform: translateY(-50%);
`;

const ImageDiv = styled.div`
  display: inline-block;
  // width: 100%;
  // float: right;
  // align-items: center;
  padding-left: 65px;
  padding-top: 15px;
  text-align: left;
  margin-bottom: 10px;

  // .ant-avatar {
  //   margin-left: 32px;
  //   margin-right: 15px;
  // }

  p {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }

  a {
    color: #0095f6;
  }
`;

const TextDiv = styled.p`
  display: inline-block;
  width: 15%;
  height: 32px;
  line-height: 32px;
  margin: 0;
  margin-right: 20px;
  text-align: right;
  // border: 1px solid grey;
  font-size: 16px;
  font-weight: 700px;
`;

const FormDiv = styled.div`
  display: flex;
  margin-bottom: 20px;

  .ant-input {
    // padding: 0;
    width: 300px;
    height: 32px;
  }
`;
