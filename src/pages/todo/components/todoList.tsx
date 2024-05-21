import React, { useState, useEffect } from 'react'
import { Checkbox, List, Divider } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import '../index.css';


const TodoList:React.FC<todeListProps> = (props) => {
  const { todoTitle, options, onDelete, onSelect, defaultCheckedList } = props


  const onChange = (e: CheckboxChangeEvent) => {
    onSelect?.(e.target.value)
  }

  const onRemove = (value:OptionsType) => {
    onDelete?.(value)
  }


  return (
    <div className="todo-content-list">             
      <Checkbox.Group value={defaultCheckedList}>
        <Divider orientation="left">{todoTitle}</Divider>
        <List
          itemLayout="horizontal"
          dataSource={options}
          renderItem={item => {
            return (
            <List.Item
            actions={[<a key="list-loadmore-more" onClick={()=>onRemove(item)}>删除</a>]}
            >
              <Checkbox value={item?.value} onChange={onChange}>{item?.label}</Checkbox>
            </List.Item>
          )}}
        />
      </Checkbox.Group>
    </div>
  )
}

export default TodoList
