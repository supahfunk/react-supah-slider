/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef } from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import useRaf from '@rooks/use-raf'
import gsap from 'gsap'
import { useGesture } from 'react-use-gesture'
import { lerp } from '../Utils/index'
import style from './style'

const useStyles = createUseStyles(style)

const SliderInfiniteVertical = ({
  className,
  items,
  soap = 2,
  wheel = true,
}) => {
  const classes = useStyles()
  const $root = useRef()
  const minLimit = useRef(0)
  const maxLimit = useRef(0)
  const startY = useRef(0)
  const scrollY = useRef(0)
  const oldY = useRef(0)
  const actualY = useRef(0)
  const speedY = useRef(0)
  const [isDragging, setIsDragging] = useState(false)
  const [slides, setSlides] = useState([])

  /*------------------------------
  Gestures
  ------------------------------*/
  useGesture({
    onDrag: ({ movement: [_, my], last }) => {
      scrollY.current = startY.current + my * soap
      setIsDragging(Math.abs(my) > 10)
      if (last) {
        startY.current = scrollY.current
        setTimeout(() => { setIsDragging(false) }, 100)
      }
    },
    onWheel: ({ movement: [_, my], last, event }) => {
      if (!wheel) return
      scrollY.current = startY.current + my * soap
      setIsDragging(Math.abs(my) > 10)
      if (last) {
        startY.current = scrollY.current
        setTimeout(() => { setIsDragging(false) }, 100)
      }
      event.preventDefault()
    },
  }, { domTarget: $root, eventOptions: { passive: false } })

  /*------------------------------
  Handle Resize
  ------------------------------*/
  const handleResize = () => {
    if (!slides.length) return
    minLimit.current = slides[0].getBoundingClientRect().height
    maxLimit.current = minLimit.current * items.length
  }

  /*--------------------
  Dispose
  --------------------*/
  const dispose = (scroll) => {
    gsap.set(slides, {
      y: (i) => {
        return i * minLimit.current + scroll
      },
      modifiers: {
        y: (y) => {
          const s = gsap.utils.wrap(-minLimit.current, maxLimit.current - minLimit.current, parseInt(y, 10))
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
    actualY.current = lerp(actualY.current, scrollY.current, 0.1)
    dispose(actualY.current)
    speedY.current = actualY.current - oldY.current
    oldY.current = actualY.current

    // CSS Vars
    $root.current.style.setProperty('--speed', speedY.current)
    $root.current.style.setProperty('--speed-abs', Math.abs(speedY.current))
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

export default SliderInfiniteVertical
