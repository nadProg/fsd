import { EffectCallback, useEffect } from 'react';

import { Project } from '@/shared/constants/project';
import { ValuesOf } from '@/shared/types';

type Projects = ValuesOf<typeof Project>[];

const isProjectAllowed = (allowedProjects: Projects) => allowedProjects.includes(__PROJECT__);

export const useProjectEffect = (
  effectCallback: EffectCallback,
  [...dependencies]: unknown[],
  [...allowedProjects]: Projects = [Project.Frontend, Project.Jest],
) => {
  const deps = ([] as unknown[]).concat(dependencies).concat(allowedProjects);

  useEffect(() => {
    if (isProjectAllowed(allowedProjects)) {
      effectCallback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
