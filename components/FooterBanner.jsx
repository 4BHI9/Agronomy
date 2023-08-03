import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const FooterBanner = ({ footerbanner:{ fdiscount, flargeText1, flargeText2, fsaleTime, fsmallText, fmidText, fdesc, fproduct,fbuttonText, fimage } }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{fdiscount}</p>
          <h3>{flargeText1}</h3>
          <h3>{flargeText2}</h3>
          <p>{fsaleTime}</p>
        </div>
        <img 
          src={urlFor(fimage)} className="footer-banner-image"
        />
        <div className="right">
          <p>{fsmallText}</p>
          <h3>{fmidText}</h3>
          <p className='para2'>{fdesc}</p>
          <Link href={`/product/${fproduct}`}>
            <button className='btnf' type="button" >{fbuttonText}</button>
          </Link>
        </div>
        
       
      </div>
    </div>
  )
}

export default FooterBanner