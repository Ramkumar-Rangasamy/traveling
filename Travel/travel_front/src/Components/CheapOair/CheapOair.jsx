import React from 'react';
import './cheapOair.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CheapOair = () => {
  return (
    <>
      <div className='pt-4'>
      <div className="cheapoair-container  m-3 ">
        <h2>Here's why travelers choose CheapOair</h2>

        <div className='row p-4'>
          <div className="feature col-lg-3 ">
            <h5> <FontAwesomeIcon icon={faCheck} className='text-green' /> Get Great Deals!</h5>
            <p className='pl-4'>Choose from 500+ airlines for low airfares!</p>
          </div>

          <div className="feature col-lg-3">
            <h5> <FontAwesomeIcon icon={faCheck} className='text-green' /> Price Match Promise</h5>
            <p className='pl-4'>Find low prices to destinations worldwide.</p>
          </div>

          <div className="feature col-lg-4 ">
            <h5><FontAwesomeIcon icon={faCheck} className='text-green' /> Easy Cancellations with CheapOair</h5>
            <p className='pl-4'>Convenient self-service options available online.</p>
          </div>

          <div className="feature col-lg-2  ">
            <h5><FontAwesomeIcon icon={faCheck} className='text-green' /> Expert Guidance</h5>
            <p className='pl-4'>Get personalized assistance from our travel experts.</p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default CheapOair;
