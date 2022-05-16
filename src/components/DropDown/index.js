import React, { memo, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { globalVars } from "../../assets/style/globalVar";
import SearchInput from "../SearchInput";
import { FaTimes } from "react-icons/fa";
import { type } from "@testing-library/user-event/dist/type";

const { gray } = globalVars;

const DropDown = ({ items, selected, onDelete, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [search, setSearch] = useState("");

  const [itemSelected, setItemSelected] = useState("");
  // const [coin, setCoin] = useState("");

  let menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const onClickHandler = () => {
    setIsActive((pre) => !pre);
  };
  const changeDefault = (e, val, id, name) => {
    e.preventDefault();
    let newSelected = {
      id,
      name,
      value: val,
    };
    setSelected([...selected, newSelected]);
    setItemSelected([...selected, newSelected]);
  };

  const searchHandeler = (event) => {
    setSearch(event.target.value);
  };

  const searchCoins = items.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Wrapper ref={menuRef}>
      <h3>DropDown</h3>
      <CheckboxWrapper>
        <Lable htmlFor="Checkbox">Do you need select your coins ?</Lable>
        <Checkbox
          name="Checkbox"
          type="checkbox"
          value={isChecked}
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
      </CheckboxWrapper>
      <OptionContainer onClick={onClickHandler} pointer={isChecked}>
        <Option>
          <InputWrapper>
            <TextIput>
              <Items>
                {selected.length > 0 ? (
                  selected.map((item) => (
                    <List key={item.id}>
                      {item.name}
                      <FaTimes
                        onClick={() => onDelete(item.id)}
                        style={{
                          color: "yellow",
                          cursor: "pointer",
                          marginLeft: "0.3rem",
                          marginRight: "0.3rem",
                        }}
                      />
                    </List>
                  ))
                ) : (
                  <span></span>
                )}
              </Items>
              <SearchInput
                value={search}
                onChange={searchHandeler}
                placeholder={selected.length === 0 ? "search" : ""}
                access={isChecked}
              />
            </TextIput>
            <Icon rot={isActive}>{"<"}</Icon>
          </InputWrapper>
          <div></div>
        </Option>
        <Select vis={isActive}>
          {searchCoins.map((item) => {
            return (
              <Item
                key={item.id}
                value={item.value}
                onClick={(e) =>
                  changeDefault(e, item.value, item.id, item.label)
                }
              >
                {item.label}
              </Item>
            );
          })}
        </Select>
      </OptionContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
`;

const Lable = styled.label``;
const Checkbox = styled.input`
  margin-left: 1rem;
  cursor: pointer;
`;

const OptionContainer = styled.div`
  pointer-events: ${(props) => (props.pointer ? "unset" : "none")};
  width: 100%;
`;

const Option = styled.div`
  color: #ffffff;
  background-color: ${gray}; /* border: 1px solid #03e9f4; */
  border-radius: 8px;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TextIput = styled.span`
  width: 90%;
  display: flex;
  flex-direction: row;
`;

const Icon = styled.i`
  transition: 0.3s;
  width: 25px;
  height: 100%;
  text-align: center;
  transform: rotate(-90deg);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  cursor: pointer;
  margin-right: 10px;
`;

const Select = styled.div`
  transition: 0.3s;
  transform-origin: top;
  transform: ${(props) => (props.vis ? "scaleY(1)" : "scaleY(0)")};
  visibility: ${(props) => (props.vis ? "visible" : "hidden")};
  margin-top: 0.5rem !important;
`;

const Item = styled.p`
  padding: 5px 8px !important;
  background-color: #fff;
  color: #000000;
  padding: 0;
  margin: 0;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #000000;
    color: #fff;
  }
`;

const Items = styled.span`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  margin: 10px;
`;

const List = styled.span`
  display: flex;
  align-items: center;
  background-color: #172866;
  margin: 6px;
  padding: 2px;
  padding-left: 6px;
  border-radius: 5px;
`;

export default memo(DropDown);
