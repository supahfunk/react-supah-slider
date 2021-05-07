import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import style from './style'

const useStyles = createUseStyles(style)

const Burger = ({
  className,
  items,
}) => {
  const classes = useStyles()

  return (
    <div
      className={classNames({
        [classes.root]: true,
        [className]: className,
      })}
    >
      <div
        className={classNames({
          [classes.slider]: true,
        })}
      >
        {items}
      </div>
    </div>
  )
}

export default Burger
