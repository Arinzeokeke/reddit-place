import axios from 'axios'
import { Creators } from './types'
import { Place } from '../agent'

export const fetchBoard = () => async dispatch => {
  const user = await Place.dispatch(Creators.fetchUser(user.data))
}
