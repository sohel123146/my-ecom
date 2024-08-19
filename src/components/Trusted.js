import React from 'react'
import styled from 'styled-components'


const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
            <div className="slide">
                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
                alt="trusted-brands"/>
            </div>
            <div className="slide">
                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
                alt="trusted-brands"/>
            </div>
            <div className="slide">
                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
                alt="trusted-brands"/>
            </div>
            <div className="slide">
                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image5.png"
                alt="trusted-brands"/>
            </div>
            <div className="slide">
                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
                alt="trusted-brands"/>
            </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;

  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }

  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img{
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
  }

.icon {
    min-width: 6rem;
    height: 6rem;
    margin-left: 5rem;
    margin-right: 5rem;
  }

@media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      text-align: center;
    }
  }
`;

export default Trusted
