import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/Portfolio-1.png';
import Portfolio2 from '../../assets/Portfolio-2.png';
import Portfolio3 from '../../assets/Portfolio-3.png';
import Portfolio4 from '../../assets/Portfolio-4.png';
import Portfolio5 from '../../assets/Portfolio-5.png';
import Portfolio6 from '../../assets/Portfolio-6.png';

const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>I take pride in paying attention to the smallest details and experience to help businesses achieve their goals and create a strong online presence.</span>
      <div className='worksImgs'>
        <img src={Portfolio1} alt='' className='worksImg'/>
        <img src={Portfolio2} alt='' className='worksImg'/>
        <img src={Portfolio3} alt='' className='worksImg'/>
        <img src={Portfolio4} alt='' className='worksImg'/>
        <img src={Portfolio5} alt='' className='worksImg'/>
        <img src={Portfolio6} alt='' className='worksImg'/>
      </div>
      <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works