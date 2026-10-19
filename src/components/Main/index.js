import React from 'react';
import DividerColor1 from '@site/src/components/DividerColor1';
import DividerColor2 from '@site/src/components/DividerColor2';
import DividerImage from '@site/src/components/DividerImage';
import SectionFeatures from '@site/src/components/SectionFeatures';
import SectionSolutions from '@site/src/components/SectionSolutions';
import SectionOpenSource from '@site/src/components/SectionOpenSource';

export default function main() {
  return (
    <main className="relative bg-theme">
      <DividerColor1 />
      <div className="px-4 sm:px-8 md:px-16 mx-auto py-32 bg-dots">
        <SectionSolutions />
        <SectionFeatures />
      </div>
      <DividerColor2 />
      <SectionOpenSource />
      <DividerImage />
    </main>
  );
}
