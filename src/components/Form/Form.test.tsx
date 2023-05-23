import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from 'recoil';
import Form from "./Form";

describe("the form's behavior",()=>{
    test("disable the submit button if the fields aren't filled",()=>{
        //render the form component
        render(<RecoilRoot>
            <Form/>
        </RecoilRoot>)

        //find the inputs in DOM
        const heightInput=screen.getByPlaceholderText('Altura')
        const weightInput=screen.getByPlaceholderText('Peso')
        const ageInput=screen.getByPlaceholderText('Idade')
        const genderInput=screen.getByPlaceholderText('genderInput')
        const activityLevelInput=screen.getByPlaceholderText('activityLevelInput')

        //find the submit button
        const submitButton=screen.getByRole('button')

        //make sure that all the inputs are in the document
        expect(heightInput).toBeInTheDocument()
        expect(weightInput).toBeInTheDocument()
        expect(ageInput).toBeInTheDocument()
        expect(genderInput).toBeInTheDocument()
        expect(activityLevelInput).toBeInTheDocument()

        //check if the button is disabled as it should
        expect(submitButton).toBeDisabled()
    })

    test('submit button must be enabled if fields are filled, and form must return correct values upon submission',()=>{
        //render the form component
        render(<RecoilRoot>
            <Form/>
        </RecoilRoot>)

        //find the inputs in DOM
        const heightInput=screen.getByPlaceholderText('Altura')
        const weightInput=screen.getByPlaceholderText('Peso')
        const ageInput=screen.getByPlaceholderText('Idade')
        const genderInput=screen.getByPlaceholderText('genderInput')
        const activityLevelInput=screen.getByPlaceholderText('activityLevelInput')
        const calorieCount=screen.getByLabelText('Calorias diárias recomendadas')
        const bmiCount=screen.getByLabelText('Indice de massa corporal')
        const bmrCount=screen.getByLabelText('Taxa metabólica basal')
        const bfpCount=screen.getByLabelText('Percentual de gordura corporal')
        const idealWeight=screen.getByLabelText('Peso ideal')


        //find the submit button
        const submitButton=screen.getByRole('button')

        //add random values to input
        fireEvent.change(heightInput,{
            target:{
                value: '175'
            }
        })
        fireEvent.change(weightInput,{
            target:{
                value: '115'
            }
        })
        fireEvent.change(ageInput,{
            target:{
                value: '25'
            }
        })
        fireEvent.change(genderInput,{
            target:{
                value: 1
            }
        })
        fireEvent.change(activityLevelInput,{
            target:{
                value: 1
            }
        })

        //try to click the submit button
        expect(submitButton).toBeEnabled()
        fireEvent.click(submitButton)
        expect(calorieCount).toHaveValue('2288.75')
        expect(bmiCount).toHaveValue('37.55')
        expect(bmrCount).toHaveValue('1957.75')
        expect(idealWeight).toHaveValue('59.89')
        expect(bfpCount).toHaveValue('45.41')
    })
})