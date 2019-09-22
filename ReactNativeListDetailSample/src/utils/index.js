import { Dimensions } from 'react-native';
import * as Api from './api';
import {
  Routes,
  apiConst,
  HTTP_METHODS,  
} from './constants';

const { width, height } = Dimensions.get('window');

export {
  width, height, Api, Routes, apiConst,
  HTTP_METHODS,
};
