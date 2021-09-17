
export default function DateInput({onSelect}) {
    const selectDate = (value) => {
        onSelect(value)
    }

    return (
        <label>
            <span>Data</span>
            <input type='date'
            onChange={(input) => selectDate(input.target.value)} />

        </label>
    )
}

