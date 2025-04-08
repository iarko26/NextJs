import React from 'react'
import Header from '../header/Index'

function Common({children}) {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
       <Header/>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Common