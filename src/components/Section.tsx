import { ReactNode } from "react"


type SectionProps = {
    name?: string,
    children: ReactNode
}

const Section = ({name='hi', children}: SectionProps) => {
  return (
    <>
        <h3>{name}</h3>
        <p>{children}</p>
    </>
  )
}

export default Section