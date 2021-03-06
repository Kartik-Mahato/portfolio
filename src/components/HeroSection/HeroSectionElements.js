import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 770px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0; 
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }

`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 60px;
    text-align: center;

    @media screen and (max-width: 760px) {
        font-size: 40px;
    }

    @media screen and (max-width: 400px) {
        font-size: 30px;
    }
`

export const HeroP = styled.p`
    margin-top: 12px;
    color: #fff;
    font-size: 65px;
    text-align: center;
    max-width: 600px;

    &:hover {
        transition: all 0.1s ease-out;
        letter-spacing: 2px;
        text-shadow: 0 0 10px #fff,
                     0 0 20px #fff,
                     0 0 40px #fff,
                     0 0 80px #fff,
                     0 0 120px #fff;
    }

    @media screen and (max-width: 760px) {
        font-size: 50px;
    }

    @media screen and (max-width: 400px) {
        font-size: 40px;
    }
`
