import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "./store/store.ts";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;