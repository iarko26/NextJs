import React from 'react'

function Common({children}) {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
       <header>
             JOBSCKO
         </header>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Common