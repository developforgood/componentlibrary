import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Label = styled.label`
  height: 21px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #6F6F6F;
  margin-bottom: 3px;
`
const DropDownContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 32px 0px; 
`;

const DropDownHeader = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 52px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 18px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  padding: 15px 19px 16px 16px;
  background-color: white;
  border: ${props => props.isOpen === true ? '2px': '1px'} 
  solid ${props => props.isOpen === true ? '#0067C5': '#111111'};
`;

const DropDownListContainer = styled("div")`
  z-index: 1;
  height: 52px;
  margin-top: 0px;
  width: 100%;  
  border-radius: 4px 4px 0px 0px;
  `;
  //margin-top: 58px;

const DropDownList = styled("ul")`
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;

  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;

  margin-block-start: 0;
  padding-inline-start: 0px;
`;

const ListItem = styled("li")`
  list-style: none;
  padding: 0.8em 0 0.8em 2em;
  
  &:hover{
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)), #FFFFFF;
  }
`;

const SelectText = styled.div`
  color: ${props => props.selected === true ? 'black': 'grey'}
`

export const DropDownInput = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selected, setSelected] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    props.OnChange(props.name, value);
    setSelectedOption(value)
    setIsOpen(false);
    if(value != ""){
      setSelected(true);
    }
  };

  return (
    <DropDownContainer>
        <Label>{props.LabelText}</Label>
        <DropDownHeader onClick={toggling} isOpen = {isOpen}>
          <SelectText selected = {selected}>
            {selectedOption || props.PlaceHolder}
          </SelectText>
          <FontAwesomeIcon icon={faAngleDown} />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {props.Options.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
    </DropDownContainer>
  );
}