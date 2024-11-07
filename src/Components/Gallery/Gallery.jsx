import React from 'react'
import { data } from '../../Assets/JsonFiles/SampleJson'
import { Col, Row } from 'react-bootstrap'
import ProgressiveImage from '../Common/ProgressiveImage'

const Gallery = () => {
  return (
    <div className='my-2 mx-3'>
      <Row>
        {data.map((x, index) => {
          return (
            <Col md={4} lg={4} key={index} className='my-2'>
              <ProgressiveImage lowQty={x.imageUrl+"350/200.jpg?blur=10"} HightQty={x.imageUrl + "1920/1080.jpg"} id={index} alt={x.alt}/>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Gallery