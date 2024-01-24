import React, { ReactElement } from 'react'

type HeadingProps = {title: string}
 

//Using react element as you are only returning a html element - const Heading = ({title}: HeadingProps): ReactElement => 
// This is a functional component that uses props
//example, ProfileCard is a functional component that expects to receive props with a name string and an age number
const Heading = ({title}: HeadingProps): ReactElement => {
  return <h1>{title}</h1>
}

export default Heading