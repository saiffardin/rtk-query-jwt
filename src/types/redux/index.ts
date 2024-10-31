import { store } from "../../redux/store";

export type TypeAppDispatch = typeof store.dispatch;
export type TypeRootState = ReturnType<typeof store.getState>;
