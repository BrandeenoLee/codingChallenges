const flatten = (routes) => {
    return routes.reduce((acc, r) => {
      if(r.childRoutes && r.childRoutes.length) {
        acc = acc.concat(flatten(r.childRoutes));
      } else {
        acc.push(r);
      }

      return acc;
    }, [])
}
