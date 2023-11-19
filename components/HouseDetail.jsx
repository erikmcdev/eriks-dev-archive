import React from 'react';

import Section from './section';

function HouseDetail({ cats }) {
  return (
    <>
    {cats.map(cat => (
        <Section key={cat.id}>
        <div>cat.name</div>
        <div>cat.nature</div>
        <div>cat.birthdate</div>
        </Section>
    ))}
    </>
  );
}

export default HouseDetail;