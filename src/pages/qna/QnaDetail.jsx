import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneQnaListDB } from "../../redux/async/qna";
import QnaList from "./../../components/qna/QnaList";
import QnaAddComment from "./../../components/qna/QnaAddComment";
import QnaCommentList from "./../../components/qna/QnaCommentList";
import QnaTarget from "../../components/qna/QnaTarget";
import styled from "styled-components";

const QnaDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState();

  const target = useSelector(state => state.qnaSlice.qnaTarget);

  useEffect(() => {
    dispatch(getOneQnaListDB(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (target) {
      setData(target);
    }
  }, [target]);

  return (
    <SQnaDetail>
      <div className="leftContainer">
        {data && <QnaTarget isDatail={true} data={data} />}
      </div>
      <div className="rightContainer">
        <h2>댓글</h2>
        <QnaAddComment id={id} />
        <QnaCommentList id={id} />
      </div>
    </SQnaDetail>
  );
};

export default QnaDetail;

const SQnaDetail = styled.div`
  display: flex;
  min-height: calc(100vh - 100px);
  & .leftContainer {
    width: 50%;
  }

  & .rightContainer {
    width: 50%;
    background-color: #1c2030;
    color: white;

    & h2 {
      font-size: 24px;
      font-weight: 400;
    }
  }
`;
