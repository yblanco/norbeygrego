import React from 'react';
import { Columns, Content, Image } from 'react-bulma-components';

import './Gift.css';

import book from './book.png';
import datetime from './datetime.png';
import place from './place.png';
import user from './user.png';
import durationIcon from './duration.png';
import checkmark from './checkmark.png';

export default ({ booking, date, time, dropon, include, duration }) => (
  <Content>
    <Columns className='has-background-white is-mobile'>
      <Columns.Column desktop={{ size:1 }} mobile={{ size: 2 }} tablet={{ size: 1 }}>
        <Image src={book} size={24}/>
      </Columns.Column>
      <Columns.Column desktop={{ size:3 }} mobile={{ size: 5 }} tablet={{ size: 4 }}>
        #{booking}
      </Columns.Column>
      <Columns.Column desktop={{ size:1 }} mobile={{ size: 2 }} tablet={{ size: 1 }}>
        <Image src={user} size={24}/>
      </Columns.Column>
      <Columns.Column desktop={{ size:2 }} mobile={{ size: 3 }} tablet={{size: 2 }} >
        2
      </Columns.Column>
      <Columns.Column desktop={{ size:1 }} tablet={{ size: 1 }}className='is-hidden-mobile'>
        <Image src={durationIcon} size={24}/>
      </Columns.Column>
      <Columns.Column desktop={{ size:4 }} tablet={{ size: 3 }} className='is-hidden-mobile'>
        {duration}
      </Columns.Column>
      <Columns.Column desktop={{ size:1 }} mobile={{ size: 2 }} tablet={{ size: 1 }}>
        <Image src={datetime} size={24}/>
      </Columns.Column>
      <Columns.Column desktop={{ size:11 }} mobile={{ size: 10 }} tablet={{ size: 11 }} >
        {date} {time}
      </Columns.Column>
      <Columns.Column desktop={{ size:1 }} mobile={{ size: 2 }} tablet={{ size: 1}} className='is-hidden-mobile'>
        <Image src={place} size={24}/>
      </Columns.Column>
      <Columns.Column desktop={{ size:11 }} mobile={{ size: 10 }} tablet={{ size: 11 }} className='is-hidden-mobile'>
        {dropon}
      </Columns.Column>
    </Columns>
    <Columns className='is-mobile'>
      {
        include.map((item) => ([
          <Columns.Column desktop={{ size: 1, offset: 1}} mobile={{ size: 1 }} tablet={{ size: 1 }}>
            <Image src={checkmark} size={24} />
          </Columns.Column>,
          <Columns.Column desktop={{ size:9 }} mobile={{ size: 11 }} tablet={{ size: 11 }}>
            {item}
          </Columns.Column>
        ]))
      }
    </Columns>
  </Content>
)
