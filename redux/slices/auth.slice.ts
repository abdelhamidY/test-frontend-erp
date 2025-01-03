import axios from "@/network/axios";
import { User } from "@/network/models/User";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState: {
  user: User;
  token: string;
} = {
  user: {
    id: "",
    ref_id: "",
    user_type: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
    country: "",
    dob: "",
    phone_country_code: "",
    phone_number: "",
    status: "",
    is_email_verified: "",
    permissions: {
      organization_id: "",
      org_ref_id: "",
      subdomain: "",
      roles: [],
      on_boarded: false,
      kyc: "",
      on_boarding_steps: "",
      account_status: "",
    },
  },
  token: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuthUser: (
      state,
      action: PayloadAction<Partial<typeof initialState>>,
    ) => ({ ...state, ...action.payload }),
    setAuthToken: (state, action: PayloadAction<{ token: string }>) => {
      const { token } = action.payload;

      if (token) {
        axios.defaults.headers.common["Authorization"] =
          `Bearer ${action.payload.token}`;
        Cookies.set("token", action.payload.token);
        console.log(
          "Authorization header set:",
          axios.defaults.headers.common["Authorization"],
        );
      }

      return { ...state, token: action.payload.token };
    },
    setAuthLogout: () => {
      axios.defaults.headers.common["Authorization"] = "";
      return { ...initialState };
    },
  },
});

export const { setAuthUser, setAuthToken } = authSlice.actions;
export default authSlice.reducer;
