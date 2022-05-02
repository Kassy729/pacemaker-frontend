import React from "react";
import styled from "styled-components";
import { Avatar, Card, Form, Input, Button, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";

const FollowerList = ({ post }) => {
  return (
    <>
      <h1>프로필 수정</h1>
      {/* <Container> */}
      <RightDiv>
        <ColorCard />
        <Card>
          <AvatarTag size={130} src="kurumi.jpg" icon={<UserOutlined />} />
          {/* <ImageDiv> */}
          {/* <p>{post.name}</p> */}
          {/* <a>프로필 사진 바꾸기</a> */}
          {/* </ImageDiv> */}
          <FormWrapper>
            <Form>
              <FormDiv>
                <TextDiv>{post.name}</TextDiv>
                {/* <Input value= /> */}
              </FormDiv>
              {/* <FormDiv>
                <TextDiv>이메일</TextDiv>
                <Input value={post.email} />
              </FormDiv>*/}
              <FormDiv>
                <TextDiv>{post.introduce}</TextDiv>
                {/* <Input value= /> */}
              </FormDiv>
              <FormDiv>
                <TextDiv>{post.mmr}</TextDiv>
                {/* <Input value= /> */}
              </FormDiv>
              {/* <Button type="primary" htmlType="submit">
                제출
              </Button> */}
            </Form>
          </FormWrapper>
        </Card>
      </RightDiv>
      {/* </Container> */}
    </>
  );
};

export default FollowerList;

const Container = styled.div`
  display: flex;
  width: 100%;
  //   height: 400;

  padding: 2% 18%;
  padding-top: 0;
  //   border: 1px solid grey;

  .ant-card {
    width: 100%;
    // height: 100%;
    border-radius: 9px;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%);
  }

  // .ant-form {
  //   padding: 32px;
  //   margin: 0 auto;
  // }

  // div {
  //   width: 100%;
  //   background: #fff;
  // }
`;

const LeftDiv = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: left;
  //   border: 1px solid grey;
  padding-right: 10px;

  .ant-card-body {
    display: inline-block;
    // width: 100%;
    height: 80.5vh;
    // height: 100%;
    padding: 24px 0;
  }

  .item {
    // width: 100%;
    // height: 50px;
    line-height: 50px;
    padding-left: 20px;
    border-bottom: 1px solid grey;
  }
`;

const RightDiv = styled.div`
  display: inline-block;
  width: 400px;
  height: 300px;
  //   border: 1px solid grey;
  //   overflow: auto;

  // .ant-form {
  //   padding-top: 0;
  // }

  h1 {
    font-size: 30px;
    font-weight: bold;
    padding-left: 20px;
    margin: 15px 0;
  }

  .ant-card {
    width: 400px;
    height: 550px;
  }

  .ant-card-body {
    padding: 0;
  }

  // div {
  //   height: 90%;
  // }
`;

const ColorCard = styled(Card)`
  display: inline-block;
  background: #1890ff;
  height: 90px !important;

  border-top-left-radius: 30px !important;
  border-top-right-radius: 30px !important;

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
