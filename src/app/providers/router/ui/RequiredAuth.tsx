import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/router/routeConfig/routeConfig';
import { PropsWithChildren } from 'shared/types';

type RequireAuthProps = PropsWithChildren;

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const authData = useSelector(getUserAuthData);

  const location = useLocation();

  if (!authData) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
