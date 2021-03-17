// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable react/react-in-jsx-scope */
import { CSSProperties, FC, memo } from 'react'
import { useDrag } from 'react-dnd'

const style: CSSProperties = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

export interface BoxProps {
  name: string
  type: string
  isDropped: boolean
}

// eslint-disable-next-line react/prop-types
export const Box: FC<BoxProps> = memo(function Box({ name, type, isDropped }) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      item: { name, type },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type],
  )

  return (
    // eslint-disable-next-line jsx-a11y/aria-role
    <div ref={drag} role="Box" style={{ ...style, opacity }}>
      {isDropped ? <s>{name}</s> : name}
    </div>
  )
})
