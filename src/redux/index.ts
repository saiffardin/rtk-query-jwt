import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { TypeAppDispatch, TypeRootState } from "../types/redux-store-types";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<TypeAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TypeRootState> = useSelector;
