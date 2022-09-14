import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchApi } from "../../axios/api/searchApi";

import { errorLikeAlert, networkError, successAlert } from "../../utils/swal";

import * as Sentry from "@sentry/react";

//qna 검색결과 조회
export const getQnaSearchListDB = createAsyncThunk(
  "qna/getqnasearch",
  async (data, thunkAPI) => {
    try {
      const response = await searchApi.getQnaSearchList(data);
      if (response.data.success === true) {
        return response.data.data;
      }
    } catch (err) {
      networkError();
      Sentry.captureException(`error, QNA게시글 검색결과 조회 : ${err}`);
      return thunkAPI.rejectWithValue(err.response.message);
    }
  },
);

export const getBlogSearchListDB = createAsyncThunk(
  "blog/getqnasearch",
  async (data, thunkAPI) => {
    try {
      const response = await searchApi.getBlogSearchList(data);
      if (response.data.success === true) {
        return response.data.data;
      }
    } catch (err) {
      networkError();
      Sentry.captureException(`error, QNA게시글 검색결과 조회 : ${err}`);
      return thunkAPI.rejectWithValue(err.response.message);
    }
  },
);
