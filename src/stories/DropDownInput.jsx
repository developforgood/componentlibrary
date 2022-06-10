import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Label = styled.label`
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  color: #6F6F6F;
  margin-bottom: 3px;
`
const DropDownContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 32px 0px; 
  width: 50%;
`;

const DropDownHeader = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: ${process.env.TYPESCALE.smallbase*3 + 10}px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  padding-top : ${process.env.TYPESCALE.smallbase + 2}px;
  padding-left : ${process.env.TYPESCALE.smallbase + 2}px;
  background-color: white;
  border: ${props => props.isOpen === true ? '2px': '1px'} 
  solid ${props => props.isOpen === true ? '#0067C5': '#111111'};
`;

const DropDownListContainer = styled("div")`
  z-index: 1;
  height: ${props => props.size*(10 + process.env.TYPESCALE.smallbase*3) + 10}px;
  margin-top: 0px;
  width: 100%;  
  background-color : #EFF9FF;
  `;

const ColoredEnder = styled("div")`
  margin-top: -4px;
  z-index : 2;
  background-color : #0067C5;
  border-radius: 0px 0px 4px 4px;
  height : 4px;
`
  //margin-top: 58px;

const ListItem = styled("div")`
  list-style: none;
  height : ${process.env.smallbase*3 + 10}px
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
    // props.OnChange(props.name, value);
    setSelectedOption(value)
    setIsOpen(false);
    if(value != ""){
      setSelected(true);
    }
  };
  const labelstyle = {
    "fontSize" : process.env.TYPESCALE.mediumbase,
    "height" : process.env.TYPESCALE.mediumbase + 5,
    "fontFamily" : process.env.FONTS.currentFont
  }
  const textstyle = {
    "fontSize" : process.env.TYPESCALE.smallbase,
    "height" : process.env.TYPESCALE.smallbase + 5,
    "fontFamily" : process.env.FONTS.currentFont,
    "position" : "relative"
  }
  const fontstyle = {
    "fontFamily" : process.env.FONTS.currentFont
  }
  const listextstyle = {
    "marginTop" : "10px"
  }
  const liststyle = {
    "width" : "100%",
    "position" : "relative",
    "padding" : "none",
    "fontFamily" : process.env.FONTS.currentFont,
    "fontSize" : process.env.TYPESCALE.smallbase
  }
  const classname = isOpen ?  "dropdown-menu show" : "dropdown-menu";
  return (
    <DropDownContainer>
        <Label style = {labelstyle}>{props.LabelText}</Label>
        <DropDownHeader style = {fontstyle} onClick={toggling} isOpen = {isOpen}>
          <SelectText style = {textstyle} selected = {selected}>
            {selectedOption || props.PlaceHolder}
          </SelectText>
          <FontAwesomeIcon icon={faAngleDown} />
        </DropDownHeader>
        <DropDownListContainer size = {props.Options.length} className={classname} style = {liststyle}>
            {props.Options.map(option => (
              <ListItem className="dropdown-item" onClick={onOptionClicked(option)} 
              key={Math.random()} style = {listextstyle}>
                {option}
              </ListItem>
            ))}
        </DropDownListContainer>
        <ColoredEnder />
        <p> Uses medium base for label and small base for text </p>
    </DropDownContainer>
  );
}