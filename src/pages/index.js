import React from 'react'
import Searchbar from "../components/Searchbar";

const Index = () => {
    return (
    <div className="mast flex flex-col justify-center items-center">
        <div className="text-center p-5 mt-16">
          <h1 className="text-4xl sm:text-7xl font-bold tracking-tight">Buy & Sell</h1>
          <h2 className="text-3xl sm:text-6xl font-bold mt-2.5 tracking-tight">Authentic Cards</h2>
        </div>
        <Searchbar width="w-10/12 sm:w-7/12"/>
        <div className="theme-color p-7 w-screen mt-36 text-white" />
    </div>
  )
}

export default Index
