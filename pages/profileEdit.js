import React, { useState, useRef, useCallback } from "react";
import { Avatar, Card, Form, Input, Button, Layout, Drawer, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import axios from "axios";
import imageCompression from "browser-image-compression";
import { LOAD_MY_INFO_REQUEST, PROFILE_EDIT_REQUEST } from "../reducers/user";
import { useRouter } from "next/router";

const { TextArea } = Input;

const profileEdit = ({ visible, showEditProfile }) => {
  const router = useRouter();
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [imgBase64, setImgBase64] = useState("");
  const [profileImage, setProfileImage] = useState({
    file: me.profile,
    imageURL: "",
  });

  const saveProfileImage = (e) => {
    e.preventDefault;

    let reader = new FileReader();

    let file = e.target.files[0];

    reader.onloadend = () => {
      setProfileImage({ file: file, imageURL: reader.result });
      // setProfileImage(reader.result);
      // setImgBase64(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // 파일 삭제
  const deleteProfileImage = () => {
    setProfileImage({ file: me.profile, imageURL: "" });
  };

  const [profile, setProfile] = useState({
    name: me.name,
    // email: me.email,
    // profile: me.profile,
    weight: me.weight,
    introduce: me.introduce,
    location: me.location,
  });

  const { name, email, weight, introduce, location } = profile; // 비구조화 할당을 통해 값 추출

  const onChangeProfile = (e) => {
    const { value, name } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const onReset = () => {
    setProfileImage({ file: me.profile, imageURL: "" });
    setProfile({
      name: me.name,
      weight: me.weight,
      introduce: me.introduce,
      location: me.location,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault;

    const formData = new FormData();
    formData.append("file", profileImage.file);

    let body = {
      name: name,
      weight: weight,
      introduce: introduce,
      location: location,
      // profile: formData,
    };

    dispatch({
      type: PROFILE_EDIT_REQUEST,
      data: body,
    });
    // console.log(body);

    // router.push("/");
  };

  return (
    <div>
      <Drawer
        title="내 정보"
        placement="right"
        size="large"
        width={450}
        onClose={showEditProfile}
        visible={visible}
        extra={
          <Space>
            <Button
              onClick={() => {
                showEditProfile(), onReset();
              }}
            >
              Cancel
            </Button>
            <Button type="primary" onClick={showEditProfile}>
              OK
            </Button>
          </Space>
        }
      >
        <Container>
          <ColorCard hoverable />
          <Card className="editCard" hoverable>
            {/* <FormWrapper>
              <Form onFinish={onSubmit}> */}
            <AvatarTag
              size={125}
              src={
                profileImage.imageURL
                  ? profileImage.imageURL
                  : profileImage.file
              }
              // src={profileImage.imageURL}
              icon={<UserOutlined />}
              style={{ background: "#fff" }}
            />
            <ImageDiv>
              <input
                name="profile"
                type="file"
                accept="image/*"
                onChange={saveProfileImage}
              />
              <a className="a2" onClick={deleteProfileImage}>
                삭제
              </a>
            </ImageDiv>
            <FormWrapper>
              <Form onFinish={onSubmit}>
                <FormDiv>
                  <TextDiv>이름</TextDiv>
                  <Input
                    name="name"
                    value={name}
                    onChange={onChangeProfile}
                    placeholder="이름을 입력해주세요"
                  />
                </FormDiv>
                <FormDiv>
                  <TextDiv>이메일</TextDiv>
                  <Input name="email" value={me.email} />
                </FormDiv>
                <FormDiv>
                  <TextDiv>소개</TextDiv>
                  <Input
                    name="introduce"
                    value={introduce}
                    onChange={onChangeProfile}
                    placeholder="자기소개를 입력해주세요"
                  />
                </FormDiv>
                <FormDiv>
                  <TextDiv>지역</TextDiv>
                  <Input
                    name="location"
                    value={location}
                    onChange={onChangeProfile}
                    placeholder="지역을 입력해주세요"
                  />
                </FormDiv>
                <FormDiv>
                  <TextDiv>생일</TextDiv>
                  <Input name="birth" value={me.birth} />
                </FormDiv>
                <FormDiv>
                  <TextDiv>성별</TextDiv>
                  <Input name="sex" value={me.sex} />
                </FormDiv>
                <FormDiv>
                  <TextDiv>몸무게</TextDiv>
                  <Input
                    name="weight"
                    value={weight}
                    onChange={onChangeProfile}
                    placeholder="몸무게를 입력해주세요"
                  />
                </FormDiv>
                <Button
                  className="btn1"
                  type="primary"
                  htmlType="submit"
                  onClick={showEditProfile}
                >
                  제출
                </Button>
              </Form>
            </FormWrapper>
          </Card>
        </Container>
      </Drawer>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const { ctx } = context;
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

export default profileEdit;

const Container = styled.div`
  // margin-top: 100px;
  display: inline-block;
  width: 100%;
  max-width: 400px;
  height: 480px;
  // border: 1px solid grey;
  // overflow: auto;

  // padding: 2% 18%;
  padding-top: 0;

  .ant-card {
    width: 100%;
    // box-shadow: none !important;
  }

  .editCard {
    // .ant-card {
    // border-radius: 30px;

    border-bottom-left-radius: 30px !important;
    border-bottom-right-radius: 30px !important;
    // }
  }

  h1 {
    font-size: 30px;
    font-weight: bold;
    padding-left: 20px;
    margin: 15px 0;
  }

  .ant-card {
    // max-width: 400px;
    // height: 480px;
  }

  .ant-card-body {
    padding: 0;
  }
`;

const ColorCard = styled(Card)`
  display: inline-block;
  background: #467ada;
  height: 90px !important;

  border-top-left-radius: 30px !important;
  border-top-right-radius: 30px !important;
  border-bottom-left-radius: 0px !important;
  border-bottom-right-radius: 0 !important;

  .ant-card {
    width: 100%;
  }
`;

const FormWrapper = styled.div`
  height: 90%;
  padding: 2%;
  margin-top: 15px;

  .btn1 {
    position: absolute;
    right: 10px;
  }
`;

const AvatarTag = styled(Avatar)`
  position: absolute;
  top: -70px;
  left: 50px;
`;

const ImageDiv = styled.div`
  display: inline-block;
  width: 100%;
  align-items: center;
  padding-left: 200px;
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
    position: relative;
    top: 5px;
  }

  .a2 {
    color: black;
  }

  // input {
  //   display: none;
  // }
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
