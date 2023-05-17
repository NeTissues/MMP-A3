import { useRef, useState } from "react"
import './Form.css'
const Form = () => {
    const [weight,setWeight] = useState('')
    const [height,setHeight] = useState('')
    const [gender,setGender] = useState(0)
    const [activityLevel,setActivityLevel] = useState(0)
    const [age,setAge] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    return (<form /*onSubmit={}*/>
        <div className="group-input-btn">
            <input
                ref={inputRef}
                value={weight}
                onChange={event => setWeight(event.target.value)}
                type="text"
                placeholder="Peso"
            />
            <input
                ref={inputRef}
                value={height}
                onChange={event => setHeight(event.target.value)}
                type="text"
                placeholder="Altura"
            />
            <input
                ref={inputRef}
                value={age}
                onChange={event => setAge(event.target.value)}
                type="text"
                placeholder="Idade"
            />
            <select
                value={gender}
                onChange={event => setGender(parseInt(event.target.value))}
                role={'genderInput'}
            >
                <option value="0">Selecione</option>
                <option value="1">Feminino</option>
                <option value="2">Masculino</option>
            </select>
            <select
                value={activityLevel}
                onChange={event => setActivityLevel(parseInt(event.target.value))}
                role={'activityLevelInput'}
            >
                <option value="0">Selecione</option>
                <option value="1">Baixo</option>
                <option value="2">Médio</option>
                <option value="3">Alto</option>
            </select>
            <button disabled={!weight||!height||(!gender||gender==0)||(!activityLevel||activityLevel==0)||!age}>Calcular</button>
        </div>
    </form>)
}

export default Form