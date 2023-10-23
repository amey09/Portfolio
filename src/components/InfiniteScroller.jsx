import { Heading } from '@chakra-ui/react';

import React from 'react';

function InfiniteScroller() {
  return (
    <div
      className="scroller"
      style={{ paddingBlock: '4rem', overflow: 'hidden' }}
    >
      <ul className="tag-list scroller__inner">
        <li>
          <Heading style={{ fontSize: 'clamp(48.75px, 8vw, 200px)' }} userSelect={"none"}>
            Featured Work
          </Heading>
        </li>
        <li>
          <Heading style={{ fontSize: 'clamp(48.75px, 8vw, 200px)' }} userSelect={"none"}>
            Featured Work
          </Heading>
        </li>
        <li>
          <Heading style={{ fontSize: 'clamp(48.75px, 8vw, 200px)' }} userSelect={"none"}>
            Featured Work
          </Heading>
        </li>
        <li>
          <Heading style={{ fontSize: 'clamp(48.75px, 8vw, 200px)' }} userSelect={"none"}>
            Featured Work
          </Heading>
        </li>
        <li>
          <Heading style={{ fontSize: 'clamp(48.75px, 8vw, 200px)' }} userSelect={"none"}>
            Featured Work
          </Heading>
        </li>
        <li>
          <Heading style={{ fontSize: 'clamp(48.75px, 8vw, 200px)' }} userSelect={"none"}>
            Featured Work
          </Heading>
        </li>
      </ul>
    </div>
  );
}

export default InfiniteScroller;
