import styled from "styled-components";
import { TaskType } from "../types/TaskType";

const StyledTaskBlock = styled('div')`
  display: flex;
  gap: 10px;
`;

type Props = {
  task: TaskType;
}

const TaskBlock: React.FC<Props> = ({task}) => {
  const onChange = () => {
    console.log("task status changed");
  }

  return (
    <StyledTaskBlock>
      <input type="checkbox" onChange={onChange} />
      <p>TaskId:{task.id}</p>
      <p>TaskName:{task.taskName}</p>
      <p>Status:{task.status}</p>
    </StyledTaskBlock>
  )
}

export default TaskBlock;