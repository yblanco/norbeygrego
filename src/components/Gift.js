import React from 'react';
import { Section, Box, Tile, Heading, Content, Image } from 'react-bulma-components';

import Include from './Include';
import Contact from './Contact';

import './Gift.css';

export default ({
  title, booking, date, time, dropon, include, duration, tour, phones, mail, address, img
}) => (
  <Section>
    <Box className='box-gift'>
      <Tile kind="ancestor">
        <Tile>
          <Tile renderAs="article" kind="parent" className="has-text-white" >
            <Heading>{title}</Heading>
          </Tile>
        </Tile>
      </Tile>
      <Tile kind="ancestor">
        <Tile size={8} vertical>
          <Tile>
            <Tile renderAs="article" kind="child" notification color="info">
              <Content>
                <Image src={img} size="2by1" />
              </Content>
            </Tile>
          </Tile>
          <Tile kind="parent">
            <Tile renderAs="article" kind="child" notification>
              <Contact
                tour={tour}
                phones={phones}
                mail={mail}
                address={address}
              />
            </Tile>
          </Tile>
        </Tile>
        <Tile kind="parent">
          <Tile renderAs="article" kind="child" className='include'>
            <Include
              booking={booking}
              date={date}
              time={time}
              dropon={dropon}
              include={include}
              duration={duration}
            />
          </Tile>
        </Tile>
      </Tile>
    </Box>
  </Section>
)
