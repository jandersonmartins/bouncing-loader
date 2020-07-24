import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: 1.6rem;
`

interface BallProps {
  margin?: boolean
  color: string
}

const Ball = styled.div<BallProps>`
  @keyframes bounce {
    to {
      transform: translate3d(0, -1rem, 0);
    }
  }

  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: ${(props) => (props.margin ? '0 .5rem' : undefined)};
  animation: bounce 0.4s infinite alternate;

  &:first-child {
    animation-delay: 0.6s;
  }

  &:last-child {
    animation-delay: 0.2s;
  }
`

export { Container, Ball }
