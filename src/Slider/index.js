import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import { useGesture } from 'react-use-gesture'
import useRaf from '@rooks/use-raf'
import { lerp, clamp } from '../Utils/index'
import style from './style'

const useStyles = createUseStyles(style)

const Slider = ({
  className,
  items,
  soap = 2,
}) => {
  const classes = useStyles()
  const $root = useRef()
  const $slider = useRef()
  const viewport = useRef(0)
  const maxDistance = useRef(0)
  const x = useRef(0)
  const actualX = useRef(0)
  const newX = useRef(0)
  const speed = useRef(0)
  const progress = useRef(0)
  const [isDragging, setIsDragging] = useState(false)

  /*------------------------------
  Gestures
  ------------------------------*/
  const bindGestures = useGesture({
    onDrag: ({ movement: [mx], first, last }) => {
      x.current = -mx
      if (first) actualX.current = newX.current

      // Is Dragging Class
      setIsDragging(Math.abs(mx) > 10)
      if (last) setTimeout(() => { setIsDragging(false) }, 100)
    },
  })

  /*------------------------------
  Handle Resize
  ------------------------------*/
  const handleResize = () => {
    viewport.current = $root.current.getBoundingClientRect().width
    maxDistance.current = $slider.current.getBoundingClientRect().width - viewport.current
  }

  /*------------------------------
  Init
  ------------------------------*/
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize, false)

    return () => {
      window.removeEventListener('resize', handleResize, false)
    }
  }, [])

  /*------------------------------
  RAF
  ------------------------------*/
  useRaf(() => {
    const lerpX = clamp(actualX.current - x.current * soap, -maxDistance.current, 0)
    newX.current = lerp(newX.current, lerpX, 0.08)
    speed.current = (newX.current - lerpX).toFixed(2)
    progress.current = (-newX.current / maxDistance.current).toFixed(3)

    $slider.current.style.transform = `translateX(${newX.current}px)`

    // CSS Vars
    $root.current.style.setProperty('--speed', speed.current)
    $root.current.style.setProperty('--speed-abs', Math.abs(speed.current))
    $root.current.style.setProperty('--progress', progress.current)
  }, true)

  /*------------------------------
  Render Slides
  ------------------------------*/
  const renderSlides = () => (
    items.map((item, index) => (
      <div
        className={classes.slide}
        key={index.toString()}
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
        ref={$slider}
      >
        {renderSlides()}
      </div>

      <div className={classes.progress} />
    </div>
  )
}

export default Slider
