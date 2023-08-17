import React from 'react'
import Banner from '../../components/Banner/Banner'
import LogementsList from '../../components/Gallery/Gallery'

function Home() {
    return (
        <main>  
            < Banner page="home" content="Chez vous, partout et ailleurs" />
            < LogementsList />
        </main>
         
    )
}

export default Home