import { Path } from '../models/path.model';
import { PATH_TO_VIEW_MAP } from '../constants/path.constants';
import { useLocation } from 'react-router-dom';

export const useView = () => {
  const location = useLocation();
  const path = location.pathname as Path;
  const safePath = Object.values(Path).includes(path) ? path : Path.Timer;

  return PATH_TO_VIEW_MAP[safePath];
};
