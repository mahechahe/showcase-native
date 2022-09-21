import React from 'react'
import { Features } from './components/Features'
import { SectionWraper } from './components/SectionWraper'
import { Download } from './components/Download'
import assets from './assets'
import styles from './styles/Global'

export const App = () => {
  return (
    <>
      <SectionWraper 
        title='You own store of Nifty NFTs.
        Start Selling & Growing'
        description='Buy, store, collect NFTs,
        exchange & earn crypto. Join 25+
        million people using ProNef Marketplace'
        showBtn
        mockupImage={assets.homeHero}
        banner='banner'
      />
      <SectionWraper 
        title='Smart User Interface Marketplace'
        description='Experience a buttery UI of PorNef NFT Marketplace. Smooth constant colors of a fluent UI design'
        mockupImage={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWraper 
        title='Deployment'
        description='Pronef is built using Expo
        which runs natively on all users
        devices. You can easily get your app
        into peoples hands'
        mockupImage={assets.feature}
        reverse
      />
       <SectionWraper 
        title='Creative way to showcase the store'
        description='The app contains two screens. The first screen lists all NFTs while the second one
        shows the details of a specific NFT.'
        mockupImage={assets.mockup}
        banner='banner02'
      />
      <Download />
      <div className={` px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04`}>
        <p className={`${styles.pText} ${styles.whiteText}`}>Made whit love by {" "} 
          <span className='bold'>Estiven Mahecha</span>
        </p>
      </div>
    </>
  )
}

