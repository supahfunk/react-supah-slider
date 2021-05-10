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
      position: 'relative',
      zIndex: 1,
      height: 900,
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
      position: 'absolute',
      zIndex: 1,
      width: '100vw',
      height: 300,
      padding: 20,
      '& button': {
        width: '100%',
        height: '100%',
        padding: 0,
        border: 'none',
        background: 'none',
        position: 'relative',
        zIndex: 1,
        display: 'block',
        overflow: 'hidden',
        '--skew': 'calc(var(--speed) * .1deg)',
        transform: 'skewY(var(--skew))',
      },
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        '--scale': 'calc(1 + var(--speed-abs) * 0.01)',
        '--swipe': 'calc(var(--speed) * 1px)',
        transform: 'scaleY(var(--scale)) translateY(var(--swipe))',
      },

      '& h2': {
        color: '#fff',
        position: 'absolute',
        zIndex: 1,
        left: 20,
        bottom: 20,
        margin: 0,
        '& span': {
          position: 'absolute',
          zIndex: -1,
          left: -20,
          bottom: -30,
          fontSize: 100,
          lineHeight: 1,
          opacity: 0.2,
        },
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
      width: '50vw',
      height: 300,
    },
  }

  return output
}

export default style
