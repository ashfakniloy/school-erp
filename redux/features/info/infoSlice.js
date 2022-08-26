import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  institution_name: null,
  user_name: null,
  role: null,
  total_students: null,
  total_earnings: null,
  total_expenses: null,
  total_female: null,
  total_male: null,
  total_parents: null,
  total_teachers: null,
  notice: null,
  logo: null,
  photo: null,
  // user: "",
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    resetInfo: (state) => {
      state.institution_name = null;
      state.role = null;
      state.total_students = null;
      state.logo = null;
      state.photo = null;
      state.notice = null;
      state.total_earnings = null;
      state.total_expenses = null;
      state.total_female = null;
      state.total_male = null;
      state.total_parents = null;
      state.total_teachers = null;
      state.user_name = null;
      // state.user = null;
    },

    // getUser: (state, action) => {
    //   state.user = action.payload;
    // },

    getInfo: (state, action) => {
      const {
        institution_name,
        user_name,
        total_students,
        total_male,
        total_female,
        total_teachers,
        total_parents,
        total_earnings,
        total_expenses,
        role,
        logo,
        photo,
        notice,
      } = action.payload;

      state.institution_name = institution_name;
      state.user_name = user_name;
      state.total_students = total_students;
      state.total_male = total_male;
      state.total_female = total_female;
      state.total_teachers = total_teachers;
      state.total_parents = total_parents;
      state.total_earnings = total_earnings;
      state.total_expenses = total_expenses;
      state.role = role;
      state.logo = logo;
      state.photo = photo;
      state.notice = notice;
    },
  },
});

export const { resetInfo, getInfo } = infoSlice.actions;

export default infoSlice.reducer;
