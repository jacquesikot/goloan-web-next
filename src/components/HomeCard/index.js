import React from 'react';

import { Container, Heading, Line, Img, Icon } from './HomeCardStyle';

function HomeCard(props) {
  const { heading, img, width, marginLeft } = props;

  return (
    <Container>
      <Heading>{heading}</Heading>
      <Line />
      <Img src={img} width={width} marginLeft={marginLeft} />
      <Icon size={20} />
    </Container>
  );
}

export default HomeCard;
