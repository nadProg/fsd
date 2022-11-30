import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthData, ValuesOfUserRole } from 'entities/User';
import { RoutePath } from 'shared/config/router/routeConfig/routeConfig';
import { PropsWithChildren } from 'shared/types';
import { useMemo } from 'react';
import { getUserAuthDataRoles } from 'entities/User/model/selectors/getUserAuthDataRoles/getUserAuthDataRoles';

type RequireAuthProps = PropsWithChildren & {
  roles?: ValuesOfUserRole[];
};

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const authData = useSelector(getUserAuthData);
  const userRoles = useSelector(getUserAuthDataRoles);

  const location = useLocation();

  const hasRequiredRoles = useMemo(() => {
    if (!roles || !userRoles) {
      return true;
    }

    return roles.some((role) => userRoles.includes(role));
  }, [roles, userRoles]);

  if (!authData) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
