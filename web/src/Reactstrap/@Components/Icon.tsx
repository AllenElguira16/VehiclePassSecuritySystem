import React, { CSSProperties, FC } from 'react'

interface Props {
  name: string
  size?: number
}

/**
 * Icon Component
 *
 * For easy icon integrationg with material-icons package
 * @param props Props from parent
 */
const Icon: FC<Props> = ({ size, name }) => {
  // Styles
  const styles: CSSProperties = {
    fontSize: size ? size : 24,
  }
  // Render
  return (
    <i className="material-icons" style={styles}>
      {name}
    </i>
  )
}

export default Icon
