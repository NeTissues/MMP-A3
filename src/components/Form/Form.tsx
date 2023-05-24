import { useRef, useState } from "react"
import './Form.css'
import { useCalorieCalculator } from "../../hooks/useCalorieCalculator"
import { useCalorieCountValue } from "../../hooks/useCalorieCalcResult"

import { useBMICalculator } from "../../hooks/useBMICalculator"
import { useBMICalcResult } from "../../hooks/useBMICalcResult";
import { useBMRCalculator } from "../../hooks/useBMRCalculator"
import { useBMRCountValue } from "../../hooks/useBMRCalcResult"
import { useIdealWeightValue } from "../../hooks/useIdealWeightResult"
import { useIdealWeightCalculator } from "../../hooks/useIdealWeightCalculator"
import { useBFPCalculator } from "../../hooks/useBFPCalculator";
import { useBFPCountValue } from "../../hooks/useBFPCalcResult"

const Form = () => {
    const [weight,setWeight] = useState('')
    const [height,setHeight] = useState(0)
    const [gender,setGender] = useState(0)
    const [activityLevel,setActivityLevel] = useState(0)
    const [age,setAge] = useState(0)
    const inputRef = useRef<HTMLInputElement>(null)

    const [results,setResults] = useState<undefined|number>(useCalorieCountValue())
    const [resultsBMI,setBMIResults] = useState<undefined|number>(useBMICalcResult())
    const [resultsBMR,setBMRResults] = useState<undefined|number>(useBMRCountValue())
    const [resultsBFP,setBFPResults] = useState<undefined|number>(useBFPCountValue())
    const [resultsIW,setIWResults] = useState<undefined|number>(useIdealWeightValue())

    const calculate = useCalorieCalculator()
    const bmi = useBMICalculator()
    const bmr = useBMRCalculator()
    const bfp = useBFPCalculator()
    const iw = useIdealWeightCalculator()

    const calculateEquations = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setResults(calculate(weight,height,age,gender,activityLevel))
        setBMIResults(bmi(weight,height))
        setBMRResults(bmr(weight,height,age,gender,activityLevel))
        setBFPResults(bfp(weight,height,age,gender))
        setIWResults(iw(height,gender))
    }

    return (
    
            <section>
                <h1>Calculadora Fitness</h1>
                <div className="container">           
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

                        <label id="bmi-count">Indice de massa corporal</label>
                        <input type="text" aria-labelledby='bmi-count' value={resultsBMI} disabled/>

                        <label id="bmr-count">Taxa metabólica basal</label>
                        <input type="text" aria-labelledby='bmr-count' value={resultsBMR} disabled/>

                        <label id="bfp-count">Percentual de gordura corporal</label>
                        <input type="text" aria-labelledby='bfp-count' value={resultsBFP} disabled/>

                        <label id="ideal-weight">Peso ideal</label>
                        <input type="text" aria-labelledby='ideal-weight' value={resultsIW} disabled/>
                    </div>
                </div>
                <br/><br/><br/>
                <p>Esta calculadora faz parte de um projeto acadêmico, os dados fornecidos pelos usuários não são salvos em momento algum.</p>
                <p>Nenhum usuário deveria utilizar as informações encontradas nesse site para tomar qualquer ação, principalmente relacionado a sua saúde.</p>
                <p>Os desenvolvedores desta aplicação não se responsabilizam por qualquer incidente que venha ocorrer com qualquer usuário que acesse essa plataforma.</p>
            </section>)
}

export default Form