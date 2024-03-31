// import React, {useState} from 'react'

function Example() {
    for (let i = 1; i <= 10; i++) {
      console.log(`outer loop value: ${i}`)
      for (let j = 1; j <= 10; j++) {
        if(j==5){
          console.log('Detected number 5')
          break
        }
        console.log(i+ '*' +j+ '=' +i*j)
      }
      
    }
  return (
    <div></div>
  )
}

export default Example