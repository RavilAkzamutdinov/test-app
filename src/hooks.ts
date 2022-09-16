import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { bindActionCreators } from '@reduxjs/toolkit'
import ActionCreators from './store/actionCreators/index'

const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(ActionCreators, dispatch)
}