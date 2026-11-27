import React from 'react';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
export default function Index() {
  const target = useBaseUrl('/docs/intro');
  return <Redirect to={target} />;
}
