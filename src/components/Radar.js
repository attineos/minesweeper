import styled, { css, keyframes } from 'styled-components'
import PropTypes from 'prop-types'

const radarBeam = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const blips = radarCompo => keyframes`
  38% {
    background:
      radial-gradient(2vmin circle at 75% 70%, rgba(${radarCompo.blipsColorRGB}, 1) 10%, rgba(${radarCompo.radarBimColorRGB}, 1) 30%, rgba(${radarCompo.blipsColorRGB}, 0) 100%),
      radial-gradient(1vmin circle at 86% 70%, rgba(${radarCompo.blipsColorRGB}, 1) 10%, rgba(${radarCompo.radarBimColorRGB}, 1) 30%, rgba(${radarCompo.blipsColorRGB}, 0) 100%);
  }
  38.01% {
    background:
      radial-gradient(2vmin circle at 75% 70%, rgba(${radarCompo.blipsColorRGB}, 1) 10%, rgba(${radarCompo.radarBimColorRGB}, 1) 30%, rgba(${radarCompo.blipsColorRGB}, 0) 100%),
      radial-gradient(1vmin circle at 86% 70%, rgba(${radarCompo.blipsColorRGB}, 1) 10%, rgba(${radarCompo.radarBimColorRGB}, 1) 30%, rgba(${radarCompo.blipsColorRGB}, 0) 100%),
      radial-gradient(3vmin circle at 40% 85%, rgba(${radarCompo.blipsColorRGB}, 1) 10%, rgba(${radarCompo.radarBimColorRGB}, 1) 30%, rgba(${radarCompo.blipsColorRGB}, 0) 100%);
      opacity: 1;
  }
  60%, 100% {
    background:
      radial-gradient(2vmin circle at 75% 70%, rgba(${radarCompo.blipsColorRGB}, 1) 10%, rgba(${radarCompo.radarBimColorRGB}, 1) 30%, rgba(${radarCompo.blipsColorRGB}, 0) 100%),
      radial-gradient(1vmin circle at 86% 70%, rgba(${radarCompo.blipsColorRGB}, 1) 10%, rgba(${radarCompo.radarBimColorRGB}, 1) 30%, rgba(${radarCompo.blipsColorRGB}, 0) 100%),
      radial-gradient(3vmin circle at 40% 85%, rgba(${radarCompo.blipsColorRGB}, 1) 10%, rgba(${radarCompo.radarBimColorRGB}, 1) 30%, rgba(${radarCompo.blipsColorRGB}, 0) 100%);
    opacity: 0;
  }
`

const Radar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;

  ${({ theme }) => `
    border: ${theme.spaces.s2} solid ${theme.components.radar.borderColor};
    height: ${theme.sizes.heights.hw75};
    width: ${theme.sizes.widths.ww75};
    max-height: ${theme.sizes.heights.hh92};
    max-width: ${theme.sizes.widths.wh92};
  `}

  ${({ shouldAnimate, shoudBlip, theme }) =>
    shouldAnimate &&
    shoudBlip &&
    css`
      &:before {
        content: ' ';
        z-index: 1;
        display: block;
        position: absolute;
        border-radius: 50%;
        animation: ${blips(theme.components.radar)} 10s infinite;
        animation-timing-function: linear;
        animation-delay: 1.4s;
        width: ${theme.sizes.widths.wp100};
        height: ${theme.sizes.heights.hp100};
      }
    `}

    &:after {
    content: ' ';
    display: block;
    opacity: 0;
  }

  ${({ shouldAnimate }) =>
    shouldAnimate &&
    css`
      &:after {
        background-image: ${({ theme }) =>
          `linear-gradient(44deg, rgba(${theme.components.radar.radarBimColorRGB}, 0) 50%, rgba(${theme.components.radar.radarBimColorRGB}, 1) 100%)`};
        position: absolute;
        top: 0;
        left: 0;
        animation: ${radarBeam} 10s infinite;
        animation-timing-function: linear;
        transform-origin: bottom right;
        border-radius: 100% 0 0 0;
        transition: opacity 5s;
        opacity: 1;

        ${({ theme }) => `
          width: ${theme.sizes.widths.wp50};
          height: ${theme.sizes.heights.hp50};
        `}
      }
    `}
`

Radar.defaultProps = {
  shoudBlip: false,
}

Radar.propTypes = {
  /* Indicate if it's we display blips or not */
  shoudBlip: PropTypes.bool,
}

export default Radar
