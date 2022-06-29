import React from 'react';
import { Button, Row, Col } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Naruto',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    image: 'https://i.pinimg.com/originals/11/77/d7/1177d7936cf509018406ffe494b941f7.png'
  },
  {
    key: '2',
    title: 'sasuke',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    image: 'https://www.pngmart.com/files/3/Uchiha-Sasuke-PNG-Picture.png'
  },
  {
    key: '3',
    title: 'The best app to increase your productivity',
    content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
    image: 'https://i.pinimg.com/originals/11/77/d7/1177d7936cf509018406ffe494b941f7.png'

  },
]

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <Row>
                <Col span={12}>
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                    <div className="btnHolder">
                      <Button type="primary" size="large">Learn More</Button>
                      <Button size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button>
                    </div>
                  </div>
                </Col>
                <Col span={12}>
                  <img src={item.image} alt={item.title}/>
                </Col>
              </Row>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;