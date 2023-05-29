import React from 'react';
import './styles/WhyWeAreUnique.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faHandshake, faBoxesStacked } from '@fortawesome/free-solid-svg-icons';


const WhyWeAreUnique = () => {
  return (
    <section className='why-we-are-unique'>
      <h4>What makes us unique</h4>
      <p>We are dedicated to give that effortless platform where only student RULES. <br /> Student, student and ONLY student.</p>
      <div className='mt-5 container unique-details'>
        <div className="details-wrapper">
          <FontAwesomeIcon className='icon icon-1' icon={faBriefcase} />
          <h4 className='my-3'>Make deals within your campus</h4>
          <span className='text-center'>You don't need to go far from your college campus.</span>
        </div>
        <div className="details-wrapper">
          <FontAwesomeIcon className='icon icon-2' icon={faHandshake} />
          <h4 className='my-3'>Trusted Purchase</h4>
          <span className='text-center'>Awesome! You are dealing with your college mate or any other near you.</span>
        </div>
        <div className="details-wrapper">
          <FontAwesomeIcon className='icon icon-3' icon={faBoxesStacked} />
          <h4 className='my-3'>Multiple Products in a Single Ad.</h4>
          <span className='text-center'>You have books, notes, stationery, bikes to sell. Don't worry you can add these all items in a Single Ad.</span>
        </div>
        
      </div>
      
    </section>
  )
}

export default WhyWeAreUnique