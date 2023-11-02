import styled from "styled-components";

const StyledTaskBlock = styled('div')`
  display: flex;
`;

const TaskBlock = () => {
  const onChange = () => {
    console.log("task status changed");
  }

  return (
    <StyledTaskBlock>
      <input type="checkbox" onChange={onChange} />
      <p>Task Name</p>
    </StyledTaskBlock>
  )
}

export default TaskBlock;