import React, { memo } from 'react';

function Child2() {
  console.log('Hello Child2');
  return <div>Hello Child 2</div>;
}

export default memo(Child2, (prevProps, nextProps) => {
  return true;
});
