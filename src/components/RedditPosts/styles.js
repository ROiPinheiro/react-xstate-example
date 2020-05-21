import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div``;

export const List = styled(motion.ul)`
  padding: 10px;
  background-color: #333;
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  min-height: 700px;
  flex-direction: column;
  border-radius: 5px;
  list-style: none;
`;

export const ListItem = styled(motion.li)`
  background-color: ${(props) => props.color};
  padding: 10px;
  margin: 2px;
  border-radius: 5px;
  min-width: 50px;
  width: 100%;
  min-height: 150px;
  list-style: none;
`;
