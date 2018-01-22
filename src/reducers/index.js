import { combineReducers } from "redux";
import user from "./user";
import accommodation from "./accommodation";
import mission from "./mission";
import message from "./message";
import profile from "./profile";
import guard from "./guard";
import snack from "./snack";

const Main = combineReducers({
    accommodation,
    user,
    mission,
    message,
    profile,
    guard,
    snack
});

export default Main;
