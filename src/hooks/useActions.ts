import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import { shopActions } from '../store/redusers/shopSlice'
import { panelActions } from '../store/redusers/panelSlice'

const actions = {
  ...shopActions,
  ...panelActions
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}