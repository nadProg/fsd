type Params = Partial<Record<string, string>>;

export const addQueryParams = (params: Params) => {
  const currentParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      currentParams.set(name, value);
    }
  });

  const formattedQuery = `?${currentParams.toString()}`;

  window.history.pushState(null, '', formattedQuery);
};
