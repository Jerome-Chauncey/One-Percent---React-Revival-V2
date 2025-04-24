import React from 'react'
import TickerTape from './trading/Ticker'
import SymbolFinancials from './trading/SymbolFinancials' 
import SymbolInfoProfile from './trading/SymbolinfoProfile'
import StockMarket from './trading/StockMarket'
import NewChart from './trading/NewChart'
import Viewer from './trading/Viewer'
import Market from './trading/Market'
import Bottom from './trading/Bottom'

const TradingTools = () => {
  return (
    <>
      <TickerTape />
      <Viewer/>     
      <NewChart />
      <Market />
      <StockMarket />
      <SymbolInfoProfile />
      <SymbolFinancials />
      <Bottom/>
    </>
  )
}

export default TradingTools
