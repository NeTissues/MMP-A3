import { useRef, useState } from "react"
import './Form.css'
import { useCalculus } from "../../hooks/useCalculus"
import { useCalorieCountValue } from "../../hooks/useResult"

const Form = () => {
    const [weight,setWeight] = useState('')
    const [height,setHeight] = useState(0)
    const [gender,setGender] = useState(0)
    const [activityLevel,setActivityLevel] = useState(0)
    const [age,setAge] = useState(0)
    const inputRef = useRef<HTMLInputElement>(null)
    const [results,setResults] = useState<undefined|number>(useCalorieCountValue())

    const calculate = useCalculus()
    
    const calculateEquations = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setResults(calculate(weight,height,age,gender,activityLevel))
    }

    return (<div className="container">
                <form className="group-input-btn" onSubmit={calculateEquations}>
                    <div>
                        <input
                            ref={inputRef}
                            onChange={event => setWeight(event.target.value)}
                            type="text"
                            placeholder="Peso"
                        />
                        <input
                            ref={inputRef}
                            onChange={event => setHeight(parseInt(event.target.value))}
                            type="text"
                            placeholder="Altura"
                        />
                        <input
                            ref={inputRef}
                            onChange={event => setAge(parseFloat(event.target.value))}
                            type="text"
                            placeholder="Idade"
                        />
                        <select
                            value={gender}
                            onChange={event => setGender(parseInt(event.target.value))}
                            placeholder={'genderInput'}
                        >
                            <option value="0">Selecione</option>
                            <option value="1">Feminino</option>
                            <option value="2">Masculino</option>
                        </select>
                        <select
                            value={activityLevel}
                            onChange={event => setActivityLevel(parseInt(event.target.value))}
                            placeholder={'activityLevelInput'}
                        >
                            <option value="0">Selecione</option>
                            <option value="1">Baixo</option>
                            <option value="2">Médio</option>
                            <option value="3">Alto</option>
                        </select>
                        <button type="submit" disabled={!weight||!height||(!gender||gender===0)||(!activityLevel||activityLevel===0)||!age}>Calcular</button>
                    </div>
                </form>
                <div className="group-input-result">
                    <label id="calorie-count">Calorias diárias recomendadas</label>
                    <input type="text" aria-labelledby='calorie-count' value={results} disabled/>
                </div>
            </div>)
}

export default Form