
import S from './style'

export default function DateInput(){
    const selectDate = (value)=>{

        console.log(value)
    }
    return(
        <label>
            <span>Data</span>
            <input type='date' onChange={(input)=> selectDate(input.target.value)} />
        </label>
    )
}