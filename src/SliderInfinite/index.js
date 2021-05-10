import { useEffect, createRef, useRef, useMemo, useState } from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import useRaf from '@rooks/use-raf'
import { useGesture } from 'react-use-gesture'
import style from './style'

const useStyles = createUseStyles(style)

const Slider = ({
  className,
  items,
}) => {
  const classes = useStyles()
  const $root = useRef()
  const $items = useMemo(() => Array.from({ length: items.length }).map(() => createRef()), [])
  const minLimit = useRef(0)
  const maxLimit = useRef(0)
  const x = useRef(0)
  const startX = useRef(0)
  const [isDragging, setIsDragging] = useState(false)

  /*------------------------------
  Gestures
  ------------------------------*/
  const bindGestures = useGesture({
    onDrag: ({ movement: [mx], last }) => {
      x.current = startX.current + mx
      setIsDragging(Math.abs(mx) > 10)
      if (last) {
        startX.current = x.current
        setTimeout(() => { setIsDragging(false) }, 100)
      }
    },
  })

  /*------------------------------
  Handle Resize
  ------------------------------*/
  const handleResize = () => {
    minLimit.current = $items[0].current.getBoundingClientRect().width
    maxLimit.current = minLimit.current * (items.length - 1)
  }

  /*------------------------------
  Init
  ------------------------------*/
  useEffect(() => {
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize, false)
    }
  }, [])

  /*------------------------------
  RAF
  ------------------------------*/
  useRaf(() => {
    const actualX = x.current % (-minLimit.current + (minLimit.current * 3))

    $items[0].current.style.transform = `translateX(${actualX}px)`
  }, true)

  /*------------------------------
  Render Slides
  ------------------------------*/
  const renderSlides = () => (
    items.map((item, index) => (
      <div
        className={classes.slide}
        key={index.toString()}
        ref={$items[index]}
      >
        <button
          onClick={() => { if (!isDragging) window.console.log('slide:', index) }}
        >
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
        </button>
      </div>
    ))
  )

  return (
    <div
      className={classNames({
        [classes.root]: true,
        [className]: className,
        [classes.isDragging]: isDragging,
      })}
      ref={$root}
      {...bindGestures()}
    >
      <div
        className={classNames({
          [classes.slider]: true,
        })}
      >
        {renderSlides()}
      </div>

      <div className={classes.progress} />
    </div>
  )
}

export default Slider
