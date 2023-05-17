import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Home from "./Home";

const mockNavigation=jest.fn()

jest.mock('react-router-dom',()=>{
    return{
        useNavigate:()=>mockNavigation
    }
})

describe('homepage',()=>{
    test('must be correctly rendered',()=>{
        const {container}=render(<RecoilRoot><Home/></RecoilRoot>)
        expect(container).toMatchSnapshot()
    })
})