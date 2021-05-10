import { useEffect, useState, useRef } from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import useRaf from '@rooks/use-raf'
import gsap from 'gsap'
import { useGesture } from 'react-use-gesture'
import { lerp } from '../Utils/index'
import style from './style'

const useStyles = createUseStyles(style)

const Slider = ({
  className,
  items,
}) => {
  const classes = useStyles()
  const $root = useRef()
  const minLimit = useRef(0)
  const maxLimit = useRef(0)
  const startX = useRef(0)
  const scrollX = useRef(0)
  const oldX = useRef(0)
  const actualX = useRef(0)
  const speedX = useRef(0)
  const [isDragging, setIsDragging] = useState(false)
  const [slides, setSlides] = useState([])

  /*------------------------------
  Gestures
  ------------------------------*/
  const bindGestures = useGesture({
    onDrag: ({ movement: [mx], last }) => {
      scrollX.current = (startX.current + mx)
      setIsDragging(Math.abs(mx) > 10)
      if (last) {
        startX.current = scrollX.current
        setTimeout(() => { setIsDragging(false) }, 100)
      }
    },
  })

  /*------------------------------
  Handle Resize
  ------------------------------*/
  const handleResize = () => {
    if (!slides.length) return
    minLimit.current = slides[0].getBoundingClientRect().width
    maxLimit.current = minLimit.current * items.length
  }

  /*--------------------
  Dispose
  --------------------*/
  const dispose = (scroll) => {
    gsap.set(slides, {
      x: (i) => {
        return i * minLimit.current + scroll
      },
      modifiers: {
        x: (x) => {
          const s = gsap.utils.wrap(-minLimit.current, maxLimit.current - minLimit.current, parseInt(x, 10))
          return `${s}px`
        },
      },
    })
  }

  /*------------------------------
  Init
  ------------------------------*/
  useEffect(() => {
    setSlides(document.querySelectorAll(`.${classes.slide}`))
    window.addEventListener('resize', handleResize, false)

    return () => {
      window.removeEventListener('resize', handleResize, false)
    }
  }, [])

  /*------------------------------
  Slides Ready
  ------------------------------*/
  useEffect(() => {
    handleResize()
  }, [slides])

  /*------------------------------
  RAF
  ------------------------------*/
  useRaf(() => {
    if (!slides.length) return
    actualX.current = lerp(actualX.current, scrollX.current, 0.1)
    dispose(actualX.current)
    speedX.current = actualX.current - oldX.current
    oldX.current = actualX.current

    // CSS Vars
    $root.current.style.setProperty('--speed', speedX.current)
    $root.current.style.setProperty('--speed-abs', Math.abs(speedX.current))
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
          <h2>
            <span>{index + 1}</span>
            {' '}
            {item.title}
          </h2>
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
    </div>
  )
}

export default Slider
