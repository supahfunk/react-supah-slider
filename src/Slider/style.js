const style = () => {
  const output = {
    root: {
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden',
      touchAction: 'none',
      paddingBottom: 20,
      '& *': {
        cursor: 'grab',
        userSelect: 'none',
        userDrag: 'none',
      },
    },
    slider: {
      display: 'inline-flex',
    },
    isDragging: {
      '& *': {
        cursor: 'grabbing',
      },
    },

    /*------------------------------
    Slide
    ------------------------------*/
    slide: {
      width: '30vw',
      height: 300,
      padding: 20,
      '--skew': 'calc(var(--speed) * .01deg)',
      transform: 'skewX(var(--skew))',
      '& button': {
        width: '100%',
        height: '100%',
        padding: 0,
        border: 'none',
        background: 'none',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      },
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        '--scale': 'calc(1 + var(--speed-abs) * 0.001)',
        '--swipe': 'calc(var(--speed) * .1px)',
        transform: 'scaleX(var(--scale)) translateX(var(--swipe))',
      },

      '& h2': {
        color: '#fff',
        position: 'absolute',
        zIndex: 1,
        left: 20,
        bottom: 20,
        margin: 0,
      },
    },

    /*------------------------------
    Progress
    ------------------------------*/
    progress: {
      position: 'absolute',
      zIndex: 1,
      bottom: 0,
      left: 20,
      width: 'calc(100vw - 40px)',
      height: 2,
      background: 'rgba(0, 0, 0, .1)',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 1)',
        transformOrigin: '0 0',
        transform: 'scaleX(var(--progress))',
      },
    },
  }

  /*------------------------------
  SM
  ------------------------------*/
  output['@media (max-width: 768px)'] = {
    slide: {
      width: '70vw',
      height: 300,
      padding: 20,
    },
  }

  return output
}

export default style
