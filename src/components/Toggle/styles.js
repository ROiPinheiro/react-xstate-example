import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div``;

export const Card = styled(motion.div)`
  height: 200px;
  width: 750px;
  border-radius: 15px;
  box-shadow: 0 3px 5px 0 #33333355;
  background-color: ${(props) => (props.active ? "#1ff" : "#f1f")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 45px;
  cursor: pointer;
`;
