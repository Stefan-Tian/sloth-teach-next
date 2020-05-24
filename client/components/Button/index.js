import styled from 'styled-components';

export default styled.button`
  border-radius: 4px;
  font-weight: 700;
  padding: 8px 12px;
  letter-spacing: 1.2px;
  font-size: 1.6rem;
  cursor: pointer;

  ${({ theme }) =>
    theme === 'white' &&
    `
    background-color: var(--grey-color);
    color: var(--main--color);
  `}
`;
