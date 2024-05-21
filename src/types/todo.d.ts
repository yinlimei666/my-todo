// import type { CheckboxValueType } from 'antd/es/checkbox/Group';

interface OptionsType {
  id:number;
  value: string;
  label: string;
  isChecked:boolean;
};

interface todeListProps {
  todoTitle:string;
  options: OptionsType[];
  onDelete?:(value:OptionsType)=>void;
  onSelect?:(value:string)=>void;
  defaultCheckedList?:string[];
}

interface todeHeadProps {
  addList?: (value:string)=>void;
}