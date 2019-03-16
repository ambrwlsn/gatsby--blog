import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  z-index: 3;
  box-sizing: border-box;
  position: absolute;
  height: 490px;
  width: 400px;
  left: 70px;
  top: 83px;
  background: #896952;
  border-radius: 45% 45% 0 0;
  border: 20px solid #323848;
`

const Container = styled.div`
  position: relative;
  margin: auto;
  width: 600px;
  height: 600px;
`

const LeftEar = styled.div`
  position: absolute;
  display: inline-block;
  z-index: 2;
  width: 120px;
  height: 100px;
  top: 80px;
  border-radius: 55%;
  background: #896952;
  border: 20px solid #323848;
  left: 60px;
`

const RightEar = styled.div`
  position: absolute;
  display: inline-block;
  z-index: 2;
  width: 120px;
  height: 100px;
  top: 80px;
  border-radius: 55%;
  background: #896952;
  border: 20px solid #323848;
  right: 116px;
`

const EarShineRight = styled.div`
  position: absolute;
  width: 60%;
  height: 60%;
  border-radius: 45%;
  background: #997b63;
  top: 20px;
  right: 20px;
`

const EarShineLeft = styled.div`
  position: absolute;
  width: 60%;
  height: 60%;
  border-radius: 45%;
  background: #997b63;
  top: 20px;
  left: 20px;
`
const LeftEye = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #323848;
  top: 50px;
  left: 100px;
`

const RightEye = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #323848;
  top: 50px;
  right: 100px;
`
const Nose = styled.div`
  position: absolute;
  width: 100px;
  height: 30px;
  background: #323848;
  top: 70px;
  left: 130px;
  border-radius: 30px;
`

const NoseShine = styled.div`
  position: absolute;
  width: 60px;
  height: 5px;
  background: #636d87;
  border-radius: 5px;
  top: 15px;
  left: 20px;
`
const Mouth = styled.div`
  position: absolute;
  width: 100px;
  height: 20px;
  top: 120px;
  left: 130px;
  border-bottom: 8px solid #323848;
  border-radius: 100%;
`

function Bear() {
  return (
    <div>
      <Container>
        <Body>
          <LeftEye />
          <RightEye />
          <Nose>
            <NoseShine />
          </Nose>
          <Mouth />
        </Body>
        <LeftEar>
          <EarShineLeft />
        </LeftEar>
        <RightEar>
          <EarShineRight />
        </RightEar>
      </Container>
    </div>
  )
}

export default Bear
