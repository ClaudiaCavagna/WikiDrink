import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </Wrapper> 
  )
}

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  align-items: center;
  height: 86vh;
  div {
    color: var(--trypan-blue-2) !important;
  }
`
export default Loading
