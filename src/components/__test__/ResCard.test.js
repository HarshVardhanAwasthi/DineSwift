import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import { enhancedResCard } from "../RestaurantCard"
import  MOCK_RES_DATA from   "../Mocks/mockResCard.json"
import  MOCK_PROMOTED_RES_DATA  from"../Mocks/promotedResCard.json"
import "@testing-library/jest-dom"

it("should render Restaruant Card data with props data",()=>{
    render(<RestaurantCard resData={MOCK_RES_DATA}/>)

    const name= screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
})


const PromotedResCard=enhancedResCard(RestaurantCard)

it("should render Restaurant Card comoponent with Promoted label",()=>{
    render(<PromotedResCard resData={MOCK_RES_DATA}/>)

    const label=screen.getByText("Promoted");

    expect(label).toBeInTheDocument()

})