import React from 'react'
import Hero from '../Components/Hero/Hero'
// import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollection/newcollection'
// import NewCollection from '../Components/NewCollection/newcollection'/
import Popular from '../Components/Popular/Popular';
import Newsletter from '../Components/Newsletter/Newsletter';


export const Shop = () => {
  return (
    <div>

        <Hero/>
        <Popular/>
        <Offers/>
        {/* <NewCollection/> */}
        <NewCollection/>
        <Newsletter/>
        
        
    </div>
  )
}

export default Shop