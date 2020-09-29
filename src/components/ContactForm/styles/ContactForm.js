import styled from "styled-components"

export const ContactForm = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 15px;
  background: #009bff;
  background: ${props => props.theme.colors.background1};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const ContainerContact1 = styled.div`
  width: 1163px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 90px 130px 88px 148px;
  @media (max-width: 992px) {
    padding: 90px 80px 88px 90px;
  }
  @media (max-width: 768px) {
    padding: 90px 80px 88px 80px;
  }
  @media (max-width: 576px) {
    padding: 90px 15px 88px 15px;
  } ;
`

export const Contact1Pic = styled.div`
  width: 296px;
  @media (max-width: 1200px) {
    width: 33.5%;
  }
  @media (max-width: 992px) {
    width: 35%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`
export const Contact1Picture = styled.img`
  max-width: 100%;
`
export const Contact1Form = styled.form`
  width: 390px;
  @media (max-width: 1200px) {
    width: 44%;
  }
  @media (max-width: 992px) {
    width: 55%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Contact1FormTitle = styled.span`
  display: block;
  font-size: 24px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 44px;
`

export const WrapInput1 = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 20px;
`
export const Input1 = styled.input`
  display: block;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.background1};
  background: #e6e6e6;
  font-size: 1.3rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.background1};
`
export const ShadowInput = styled.span`
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 0px 0px;
  color: rgba(87, 184, 70, 0.5);
`
export const ContainerContact1FormBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const Contact1FormBtn = styled.button`
  min-width: 193px;
  height: 50px;
  border-radius: 25px;
  background: #57b846;
  font-size: 15px;
  line-height: 1.5;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;

  transition: all 0.4s;
`
export const Title = styled.h1`
  text-align: center;
  font-size: 5.5rem;
  color: ${props => props.theme.colors.accent1};
`
