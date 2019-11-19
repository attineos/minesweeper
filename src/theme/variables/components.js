import c from './colors'

const components = {
  board: {
    borderColor: c.blue,
  },
  button: {
    backgroundColor: c.darkBlue,
    backgroundColorHover: c.blue,
    color: c.white,
  },
  container: {
    backgroundColor: c.softBlue,
    borderColor: c.blue,
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
    backgroundFlagged: c.darkBlue,
    backgroundHiddenHover: c.blue,
    borderColor: c.blue,
    flaggedColor: c.white,
    hiddenColor: c.darkBlue,
    minedColor: c.red,
    size: '5vh',
  },
  input: {
    backgroundColor: c.darkBlue,
    borderColor: c.grey,
    borderColorHover: c.blue,
  },
  radar: {
    blipsColorRGB: c.whiteRGB,
    radarBimColorRGB: c.blueRGB,
    borderColor: c.blue,
  },
  svg: {
    fillColor: c.white,
    fillHoverColor: c.blue,
  },
  table: {
    borderColor: c.blue,
  },
}

export default components
