import React, { useEffect } from "react";
import {
  Menu,
  Button,
  Row,
  Col,
  Card,
  Divider,
  Modal,
  Empty,
  Timeline,
  Statistic,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import axios from "axios";

import wrapper from "../store/configureStore";
import PostCard from "../components/PostCard";

import {
  LOAD_MY_INFO_REQUEST,
  USER_RATE_REQUEST,
  WEEKRECORD_REQUEST,
  WEEKRECORD_BIKE_REQUEST,
  WEATHER_REQUEST,
  PROGRESS_REQUEST,
} from "../reducers/user";
import { LOAD_MORE_POST_REQUEST, LOAD_POSTS_REQUEST } from "../reducers/post";

import { END } from "redux-saga";
import MyPurpose from "../components/myPurpose";
import Rank from "../components/Rank";
import Goal from "../components/goal";
import styled from "styled-components";
import MyNoteNote from "../components/MyNoteNote";
import Guild from "../components/Guild";

import MissionCard from "../components/MissionCard";
import WeekChart from "../components/WeekChart";
import Pie from "../components/Pie";
import Target from "../components/Target";
import MMR from "../components/MMR";
import { ArrowUpOutlined } from "@ant-design/icons";
import PurposePie from "../components/purposePie";
import Progress from "../components/Progress";

function index() {
  const { weekRecord, userRate, weekBikeRecord, purposeProgress } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    Modal.destroyAll();
  });

  const { searchMap } = useSelector((state) => state.map);
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadMorePostLoading } = useSelector(
    (state) => state.post
  );
  const dispatch = useDispatch();

  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !loadMorePostLoading) {
          dispatch({
            type: LOAD_MORE_POST_REQUEST,
            data: mainPosts.nextPage,
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePosts, loadMorePostLoading]);

  return (
    <Container>
      <LeftDiv>
        {/* <GreyLine /> */}
        <PostDiv>
          {mainPosts.length === 0 ? (
            <>
              <Empty description="포스트가 존재하지 않습니다" />
            </>
          ) : (
            mainPosts.data.map((post) => (
              <>
                <span className="title">Post</span>
                <PostCard post={post} key={post.id} />
              </>
            ))
          )}
          {/* <Empty description="포스트가 존재하지 않습니다" /> */}
        </PostDiv>
        <GreyRightLine />
      </LeftDiv>
      <RightDiv>
        <div
          style={{
            display: "inline-block",
            width: "100%",
            position: "sticky",
            top: "15%",
            right: 0,
            padding: 12,
          }}
        >
          <TopDiv>
            <WeekChart weekRecord={(weekRecord, weekBikeRecord)} />
            <MMR />
          </TopDiv>

          <BottomDiv>
            <Pie userRate={userRate} />
            <Progress />
            <Target />
          </BottomDiv>
        </div>
      </RightDiv>
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

    context.store.dispatch({
      type: LOAD_POSTS_REQUEST,
    });
    context.store.dispatch({
      type: WEEKRECORD_REQUEST,
    });
    context.store.dispatch({
      type: WEEKRECORD_BIKE_REQUEST,
    });
    context.store.dispatch({
      type: USER_RATE_REQUEST,
    });
    context.store.dispatch({
      type: WEATHER_REQUEST,
    });
    context.store.dispatch({
      type: PROGRESS_REQUEST,
    });

    console.log("getssr", new Date().toTimeString());

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default index;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  // height: 1300px;
  padding: 0 2%;
  // border: 1px solid grey;

  // padding: "3% 0,

  position: relative;

  .ant-card {
    width: 100%;
    // border-radius: 7px;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%);
    margin: 0 !important;
  }
`;

const LeftDiv = styled.div`
  display: inline-block;
  display: flex;
  position: relative;
  width: 45%;
  // border: 1px solid grey;

  padding-right: 1.5%;
  padding-left: 1.5%;
  margin-top: 70px;
`;

const LeftBottomDiv = styled.div`
  margin-top: 20px;
  display: flex;
  width: 70%;
  // border: 1px solid grey;
`;

const MidDiv = styled.div`
  display: inline-block;
  width: 40%;
  // border: 1px solid grey;
`;

const RightDiv = styled.div`
  display: inline-block;
  width: 53%;
  height: 100%;
  margin: 0 auto;

  // background: #ebedf3;

  border-radius: 55px;
  // position: sticky;
  // top: 15%;
  // padding: 12px;
`;

const PostDiv = styled.div`
  // 무한스크롤
  // overflow: auto;
  // overflow-y: scroll;
  width: 100%;
  height: 100%;
  padding-left: 5px;
  // height: 88vh;
  // height: 70%;
  border-lef-width: 0;
  border-top-width: 0;
  border-bottom-width: 0;
  border-right-width: 0;
  // border-style: solid;
  // border-color: #1890ff;

  .ant-empty {
    position: relative;
    top: 10%;
  }

  h2 {
    font-weight: bold;
    font-size: 26px;
  }

  .ant-card {
    border-top-left-radius: 0 !important;
  }

  .title {
    display: inline-block;
    width: 100%;
    max-width: 140px;
    height: 35px;
    line-height: 30px;
    text-align: left;
    background: #467ada;
    color: #fff;
    padding-left: 15px;
    font-size: 26px;
    font-weight: bold;
    clip-path: polygon(65% 0%, 100% 100%, 100% 100%, 0 100%, 0 0);
    position: relative;
    left: 1px;
  }
`;

const TopDiv = styled.div`
  display: flex;
  width: 100%;
`;

const BottomDiv = styled.div`
  margin-top: 3%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  // vertical-align: middle;
`;

const GreyLine = styled.div`
  display: inline-block;
  position: sticky;
  top: 12%;
  left: 3%;
  width: 1px;
  height: 790px;
  margin-right: 10px;
  background: #ebeef3;
`;

const GreyRightLine = styled(GreyLine)`
  left: 49%;
  margin-left: 15px;
  margin-right: 0;
`;
