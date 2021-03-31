import React, { Suspense } from 'react';

const LayneComponent = React.lazy(() => import('./Layne'));
const SpaceboxesComponent = React.lazy(() => import('./Spaceboxes'));


export default function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
          <LayneComponent />
          <SpaceboxesComponent />
      </Suspense>
    </div>
  );
}