import c from './colors'

const components = {
  board: {
    borderColor: c.green,
  },
  button: {
    backgroundColor: c.darkGreen,
    backgroundColorHover: c.green,
    color: c.black,
  },
  container: {
    backgroundColor: c.black,
    borderColor: c.green,
    color: c.white,
  },
  cell: {
    0: {
      color: c.transparent,
    },
    1: {
      color: c.blue,
    },
    2: {
      color: c.green,
    },
    3: {
      color: c.red,
    },
    4: {
      color: c.purple,
    },
    5: {
      color: c.marron,
    },
    6: {
      color: c.turquoise,
    },
    7: {
      color: c.white,
    },
    8: {
      color: c.grey,
    },
    backgroundFlagged: c.darkGreen,
    backgroundHiddenHover: c.green,
    borderColor: c.green,
    flaggedColor: c.white,
    hiddenColor: c.darkGreen,
    minedColor: c.red,
    size: '5vh',
  },
  input: {
    backgroundColor: c.darkGreen,
    borderColor: c.grey,
    borderColorHover: c.green,
  },
  radar: {
    blipsColorRGB: c.whiteRGB,
    radarBimColorRGB: c.greenRGB,
    borderColor: c.green,
  },
  svg: {
    fillColor: c.white,
    fillHoverColor: c.green,
  },
  table: {
    borderColor: c.green,
  },
}

export default components
