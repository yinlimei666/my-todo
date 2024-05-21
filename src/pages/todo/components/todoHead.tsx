import React, {useState, useEffect} from 'react'
import { Button, Input } from 'antd';

const TodoHead:React.FC<todeHeadProps> = (props) => {

  const { addList } = props

  const [putValue, setPutValue] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPutValue(e.target.value)
  }
  
  const onSubmit = () => {
    addList?.(putValue)
    setPutValue('')
  }

  return (
    <div>
      <Input.Group compact>
        <Input style={{ width: 'calc(100% - 200px)' }} value={putValue} onChange={onChange}/>
        <Button type="primary" onClick={onSubmit}>添加</Button>
      </Input.Group>
    </div>
  )
}

export default  TodoHead
