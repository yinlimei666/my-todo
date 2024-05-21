import React, {useState, useEffect } from 'react'
import TodeHead from './components/todoHead'
import TodeList from './components/todoList'
import './index.css';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

export default function Todo() {

  const [doList, setdoList] = useState<OptionsType[]>([])
  const [doingList, setDoingList] = useState<OptionsType[]>([])
  const [defaultCheckedList, setDefaultCheckedList] = useState<string[]>()

  //获取并且处理数据
  const getList = () => {
    let json:string = localStorage.getItem('todolist')!   
    const options:OptionsType[] = localStorage.getItem('todolist') != null ? JSON.parse(json):[]
    setDoingList(options.filter(item=>!item?.isChecked))
    setdoList(options.filter(item=>item?.isChecked))
    setDefaultCheckedList(options.filter(item=>item?.isChecked).map(ele=>ele.value))
  }

  //触发提交添加
  const addList = (value:string) => {
    let todolist:OptionsType[] = []
    let json:string = localStorage.getItem('todolist')!
    if(json && JSON.parse(json).length !== 0){
      const dealArray = JSON.parse(json)
      todolist=[...dealArray,{id:dealArray[dealArray.length-1].id +1,label:value,value:value,isChecked:false}]
    }else{
      todolist=[{id:0,label:value,value:value,isChecked:false}]
    }
    localStorage.setItem('todolist',JSON.stringify(todolist))
    getList()
  }

  //触发删除事件
  const onDelete = (value:OptionsType) => {
    let json:string = localStorage.getItem('todolist')!
    const dealArray:OptionsType[] = JSON.parse(json)
    const resArray = dealArray.filter(item=>item.id != value.id)
    localStorage.setItem('todolist',JSON.stringify(resArray))
    getList()
  }

  //触发选择事件
  const onSelect = (value:CheckboxValueType) => {
    let json:string = localStorage.getItem('todolist')!
    const dealArray:OptionsType[] = JSON.parse(json)
    dealArray.map((item)=>{
      if(item.value === value){
        item.isChecked = !item.isChecked
      }
    })
    localStorage.setItem('todolist',JSON.stringify(dealArray))
    getList()
  }

  useEffect(()=>{
    getList()
  },[])

  return (
    <div className="todo-content">
      <TodeHead addList={addList}/>
      <TodeList todoTitle={'进行时'} 
        options={doingList} 
        onDelete={onDelete} 
        onSelect={onSelect}
        />  
      <TodeList 
        todoTitle={'已完成'} 
        options={doList} 
        onDelete={onDelete}
        onSelect={onSelect} 
        defaultCheckedList={defaultCheckedList}
      />
    </div>
  )
}

