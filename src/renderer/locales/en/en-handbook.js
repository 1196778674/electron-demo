let handbook = {
    menu: [
        {
            name: 'Perpetual Contract',
            children: [
                {name: "Beginner's Guide", url: '/direct', mark: 'swapContractsGuide'},
                {name: 'Digital Contract Description', url: '/handbook/instructions#text', mark: '#text'},
                {name: 'What is Digital Contract Description?', url: '/handbook/instructions#text1', mark: '#text1'},
                {name: 'Digital Contract Transaction Description', url: '/handbook/instructions#text2', mark: '#text2'},
                {name: 'Risk Control', url: '/handbook/instructions#text3', mark: '#text3'},
                {name: 'Anti-Liquidation', url: '/handbook/instructions#text4', mark: '#text4'},
                {name: 'Tether to Spot Price - Funding', url: '/handbook/instructions#text5', mark: '#text5'},
                {name: 'Funding Rate History', url: '/handbook/compensate/1', mark: 'compensate'},
                {name: 'Insurance Fund History', url: '/handbook/insurance/1', mark: 'insurance'}
            ]
        },
        {
            name: 'Perpetual Contract',
            children: [
                {name: 'Term Reference', url: '/handbook/nounExplanation', mark: 'nounExplanation'},
                {name: 'Index Price', url: '/handbook/price/1', mark: 'price'}
            ]
        }
    ],
    instructions: {
        title: 'Perpetual Contract Guide',
        paragraph1: {
            title: 'Contract Description:',
            p1: 'The underlying of the contract is digital currency. To offer convenient trading experience, 58COIN has adjusted the corresponding contract sizes of each digital currency, see the table below for details:',
            p2: 'Note: Maker and Taker fees may be adjusted irregularly due to platform activities. For the details, announcements shall prevail.'
        },
        theadList: ['Contract', 'BTC', 'EOS', 'BCH', 'ETH', 'LTC', 'XRP', 'ETC', 'DASH'],
        tbodyList: [
            ['Constant', '1', '1', '1' ,'1', '1', '1', '1','1'],
            ['Quote Unit', 'USD', 'USD', 'USD' ,'USD', 'USD', 'USD', 'USD','USD'],
            ['Contract Value', '1USD/BTCUSD', '1USD/EOSUSD', '1USD/BCHUSD' ,'1USD/ETHUSD', '1USD/LTCUSD', '1USD/LTCUSD', '1USD/LTCUSD','1USD/DASHUSD'],
            ['Trading Method', 'T+0', 'T+0', 'T+0' ,'T+0', 'T+0', 'T+0', 'T+0','T+0'],
            ['Transaction Hour', '24H', '24H', '24H' ,'24H', '24H', '24H', '24H','24H'],
            ['Maintenance Margin', '0.5%', '0.5%', '0.5%' ,'0.5%', '0.5%', '0.5%', '0.5%','0.5%'],
            ['Maker', '0.03%', '0.03%', '0.03%' ,'0.03%', '0.03%', '0.03%', '0.03%','0.03%'],
            ['Taker', '0.06%', '0.06%', '0.06%' ,'0.06%', '0.06%', '0.06%', '0.06%','0.06%'],
        ],
        text1: 'What is Perpetual Contract?',
        paragraph2: {
            p1: 'A Perpetual Contract is a digital currency contract that uses the holding currency as both quotation unit and settlement unit. As opposed to futures, perpetual contracts do not have an expiry date and thus do not have a settlement. Currently, our Perpetual Contract supports two-way contract trades including BTCUSD, EOSUSD, etc., and provides multiple leverage to allow the copying of the spot market under high leverage. This contract will not be settled and is able to follow the underlying reference <a href="/handbook/price/1" style="color: #597ab9;">Index Price </a> by tethering mechanism.'
        },
        text2: 'How to trade a Perpetual Contract?',
        paragraph3: {
            p1: 'Quotation:',
            p2: 'The underlying price of Perpetual Contract is the spot index of multiple top exchanges. For details, please refer to <a href="/handbook/price/1" style="color: #597ab9;"> Index Price </a>. All margins, profits and losses are quoted in holding currency. The contract size is described in <a href="#text" style="color: #597ab9;"> Contract Description </a>.',
            p3: 'Trader will long Perpetual Contract with the expectation that the digital currency/US dollar will rise in value. On the contrary, trader will short Perpetual Contract if his expectation is that the price will drop.',
            p4: 'Margin and Leverage:',
            p5: 'All margins are calculated in holding currency. You can trade in two directions (long or short) on this currency contract.',
            p6: 'We offer 2x, 3x, 5x, 10x, 20x, 33x, 50x and 100x leverage. You can choose a leverage when opening a position, however, this leverage cannot be adjusted after opening the position. (The leverage between multiple contracts is not affected by each other.)',
            p7: 'Trade Example:',
            p8: 'A trader goes long 100 BTC of BTC at a price of 6,000 USD. He is long 100 BTC * 6,000 USD = 600,000 contracts. A few days later the price of the contract increases to 7,000 USD.',
            p9: 'Profit will be: 600,000 * 1 * (1/6,000 - 1/7,000) = 14.286 BTC',
            p10: "If the price had in fact dropped to 5,000 USD, the trader's loss would have been: 600,000 * 1 * (1/6,000-1/5,000) = -20 BTC. The loss is greater because of the inverse and non-linear nature of the contract.",
            p11: "Conversely, if the trader was short then the trader's profit would be greater if the price moved down than the loss if it moved up.",
            p12: 'Note: The price of digital currencies can be highly volatile. With the use of leverage, the risks and opportunities in trading digital currencies are both extremely outsized. For these reasons, traders should be cautious and aware.'
        },
        text3: 'Risk Control',
         paragraph4: {
            p1: 'Liquidation Price Mechanism',
            p2: 'For the risk control of Perpetual Contract, 58COIN imposes liquidation price mechanism, the calculation of which is based on Index Price. When the price triggers liquidation price, a liquidation process will be initiated.',
            p3: 'Liquidation Price:',
            p4: 'For all positions, the Maintenance Margin required = (MM * Contracts * Multiplier/ Opening Price)',
            p5: 'This is the minimum amount of margin you must maintain to avoid liquidation on your position. Based on this value, we will calculate the liquidation price of the position.',
            p6: 'Where MM (Maintenance Margin)= 0.5%',
            p7: 'Liquidation Process',
            p8: 'In order to avoid unnecessary liquidations, 58COIN will retain the existing positions and cancel all open orders on the current contract.',
            p9: 'If this does not satisfy the maintenance margin requirement then the position will be liquidated by the liquidation engine at the bankruptcy price.',
            p10: 'If 58COIN is able to liquidate the position at better than the bankruptcy price, the additional funds will be added to <a href="/handbook/insurance/1" style="color: #597ab9;"> the Insurance Fund. </a>',
            p11: 'If 58COIN is unable to liquidate the position at the bankruptcy price, we will spend the Insurance Funds on aggressing the position in the market in an attempt to close it. If this still does not close the liquidated order, this will then lead to an Auto-Deleveraging event.',
            p12: 'You will be notified if a liquidation occurs.',
            p13: 'Auto-Deleveraging',
            p14: 'Auto Deleveraging is targeted at the liquidation orders that cannot be executed after adding the Insurance Fund or the Insurance Fund is depleted.',
            p15: 'According to market principles, you must trade with a counterparty. If the counterparty disappears (unavailable in the market), his positions in the market will reduce accordingly.',
            p16: 'Note: Only positions of this contract are affected. Positions of other contracts will not be affected.',
            p17: 'Auto-Deleveraging ranking: Deleveraging priority is calculated by profit and leverage. More profitable and higher leveraged traders are deleveraged first.',
            p18: 'The ranking calculation is as follows:',
            p19: 'Ranking = PNL Percentage * Effective Leverage (if PNL percentage > 0) = PNL Percentage / Effective Leverage  (if PNL percentage < 0)',
            p20: 'where',
            p21: 'Effective Leverage = abs(Mark Value) / (Mark Value - Bankrupt Value)',
            p22: 'PNL percentage = (Mark Value - Avg Opening Value) / abs(Avg Opening Value)',
            p23: 'Mark Value = Position Value at Mark Price',
            p24: 'Bankrupt Value = Position Value at Bankruptcy Price',
            p25: 'Avg Opening Value = Position Value at Average Opening Price',
            p26: 'The system splits these positions by longs and shorts and ranks the positions from highest to lowest.',
            p27: 'You will be notified if an Auto-Deleveraging occurs.'
         },
         text4: 'Anti-Liquidation',
        paragraph5: {
        p1: 'As market manipulation will trigger a liquidation chain-reaction, which may inflict unnecessary losses on users. 58COIN tethers to market price by tethering to index price. All PNL are dominated in fair underlying price instead of platform price.',
            p2: 'Fair Mark Price: Fair Mark Price = Index Price * (1 + Funding Basis)',
            p3: 'For the calculation of Funding Basis, please refer to <a href="#text5" style="color: #597ab9;"> tether to spot price </a>',
            p4: 'Transaction will be executed at the platform price. (The process of opening and closing the position, execution price will be generated only by trading with the counterparty on the platform.)',
            p5: 'Marking for Unrealised PNL purpose is done according to the fair underlying price, so you can see your profit and loss immediately after opening a position (this is the result of a fair underlying price calculation). Since the liquidation is calculated at the fair underlying price (mark price), regardless of the volatile internal price of the platform, your Unrealised PNL will not change provided the mark price remains unchanged. This is to avoid "being liquidated".',
            p6: 'For example, currently, the platform price of BTCUSD contract is 7,000. The fair underlying price is 7,005. You can only trade with 7,000 when opening a position, but your Unrealised PNL will be calculated according to 7,005.',
            p7: 'If the platform price changes to 6,000 for some reason, the fair underlying price remains 7,005 (there is no change), then your Unrealised PNL is still calculated according to 7,005, and will not be affected by the platform price change. However, if you close the position at this time, your execution price will be 6,000, because the price during the transaction must be generated with the real counterparty.'
        },
        text5: 'Tether to Spot Price - Funding',
        paragraph6: {
            p1: 'The underlying assets of Perpetual Contract are spot assets like BTC and other digital currencies. This aims to keep the platform price in line with spot reference price. The mechanism 58COIN uses to tether to spot price is Funding.',
            p2: '58COIN does not charge any fees on funding; it is exchanged directly peer-to-peer.',
            p3: 'The Funding Rate is comprised of two main parts: the Interest Rate and the Premium /  Discount. Funding Interval = 3, since funding occurs every 8 hours at 08:00 (GMT +8), 16:00 (GMT +8), 24:00 (GMT +8).',
            p4: 'Funding Calculation:',
            p5: 'The Funding Rate is comprised of two main parts: the Interest Rate and the Premium /  Discount.',
            p6: 'Interest Rate Component:',
            p7: 'Every contract traded on 58COIN consists of two instruments: a Base currency and a Quote currency. The Interest Rate is a function of interest rates between these two currencies. The source borrow market is stated for each Interest Index.',
            p8: 'Premium / Discount Component:',
            p9: 'The perpetual contract may trade at a significant premium or discount to the Mark Price. In those situations, a Premium Index will be used to raise or lower the next Funding Rate to levels consistent with where the contract is trading.',
            p10: 'Premium Index (P) = (Max(0, Impact Bid Price - Index Price) - Max(0, Index Price - Impact Ask Price)) / Index Price + Fair Basis',
            p11: 'Final Funding Rate Calculation',
            p12: 'The Funding Rate is next calculated with the 8-Hour Interest Rate Component and the 8-Hour Premium / Discount Component. A +/-0.05% dampener is added.',
            p13: 'Funding Rate (F) = Premium Index (P) + clamp(Interest Rate (I) - Premium Index (P), 0.05%, -0.05%)',
            p14: "This calculated Funding Rate is then applied to a trader's Position Value to determine the Funding Amount to be paid or received at the Funding Timestamp.",
            p15: 'Funding Rate Caps',
            p16: '58COIN imposes caps on the Funding Rate to ensure the maximum leverage can still be utilized. To do this, two caps are imposed:',
            p17: '1. The absolute Funding Rate is capped at 75% of the Initial Margin - Maintenance Margin. If the Initial Margin is 1% and the Maintenance Margin is 0.5%, the maximum Funding Rate will be 75% * (1% - 0.5%)= 0.375%.',
            p18: '2. The Funding Rate may not change by more than 75% of the Maintenance Margin between Funding Intervals.'
        }
    },
    compensate: {
        title: 'Funding Rate',
            paragraph1: {
            title: 'Contract Description:',
                p1: '58COIN does not charge any fees on funding; it is exchanged directly peer-to-peer.',
                p2: 'The Funding Rate is comprised of two main parts: the Interest Rate and the Premium /  Discount. Funding Interval = 3, since funding occurs every 8 hours at 08:00 (GMT +8), 16:00 (GMT +8), 24:00 (GMT +8).',
                p3: 'Funding Rate Fees = Position Value * Funding Rate',
                p4: 'For details, please refert to <a  style="color: #597ab9;">“tether to spot price”</a>'
        },
        theadList: ['Time', 'Funding Rate']
    },
    insurance: {
        title: 'Insurance Fund',
        paragraph1: {
        title: 'Insurance Fund',
            p1: 'Insurance Fund is the residual value management of the liquidated order after market order processing. If the order is unsuccessful at the time of liquidation, Insurance Fund will be added to continue the order.',
            p2: "Insurance Fund will increase or decrease according to the trader's trading situation. The accumulation and use of Insurance Fund minimizes the occurrence of deleveraging."
        },
        theadList: ['Time', 'Balance']
    },
    noun: {
        title: 'Term Reference',
            paragraph1: {
            title: 'Insurance Fund',
                p1: 'Two-Way Trade: Traders can buy to open (or open position), that is, start a trade by buying a contract; or sell to open, which means, start a trade by selling a contract.',
                p2: "Margin: This Margin refers to contract margin. It is the act of paying a certain percentage of the contract's value as performance bond to conduct a trade several times the margin.",
                p3: 'Unrealised PNL: Profit and loss in the holding position, in this case, profit is not available.',
                p4: 'Contract Size: The minimum value of a transaction, calculated according to "Contract", currently 1 Contract = 1 USD.',
                p5: 'Funding Rate: The funding adjustment between longs and shorts is to tether to spot price. 58COIN does not charge any fees on funding; it is exchanged directly peer-to-peer.',
                p6: 'The Funding Rate is comprised of two main parts: the Interest Rate and the Premium / Discount. Funding Interval = 3, since funding occurs every 8 hours at 08:00 (GMT +8), 16:00 (GMT +8), 24:00 (GMT +8).',
                p7: 'Tick Size: A tick size is the minimum price movement of a contract in the open outcry process of the exchange. In the transaction, each tick value must be an integral multiple of each one tick movement.',
                p8: 'Maintenance Margin: It refers to the minimum amount needed to keep the position from getting liquidated.',
                p9: 'Mark Price: Mark Price = Index Price * (1 + Funding Rate). It is used as a standard for profit & loss (PNL).',
                p10: 'Market Price: A request to execute a buy or sell transaction at the best-available price in the current market. It is widely considered the fastest and most reliable way to enter or exit a trade, and provides the most likely method of getting in or out of a trade quickly.',
                p11: 'Opening Price: The opening price is the price at which a contract first trades upon the opening of a position.',
                p12: 'Index Price: The index tracks the spot price, which is taken from Bitfinex, Bitstamp, GDAX and other top exchanges, and represents the overall price level of the market.',
                p13: 'Limit Price: An order placed to execute a buy or sell transaction at a specified limit price or better.',
                p14: 'Position Value: The number of holding contacts (amount of digital currency).',
                p15: 'Trigger Order: Trigger order is a trading instruction with pre-defined parameters (trigger price and execution price) by a user. When the last traded price has reached the trigger price, 58COIN will send an order to the market at the execution price. Trigger order may not necessarily be executed.',
                p16: 'Available Balance: Funds that can be used to open new positions and transferring out, in which margin is excluded.',
                p17: 'Position Fees: No',
                p18: "Equity: All of the user's funds, including available balance and margin.",
                p19: "Insurance Fund: 58COIN uses an Insurance Fund to avoid Auto-Deleveraging in traders' positions.The fund is used to aggress unfilled liquidation orders before they are taken over by the auto-deleveraging system. The Insurance Fund grows from liquidations that were able to be executed in the market at a price better than the bankruptcy price of that particular position."
        },
    },
    price: {
        title: 'Index Price',
            paragraph1: {
            p1: 'Index Details',
            p2: 'The 58COIN Index tracks the Bitcoin price every minute. The Bitcoin price is calculated from the last price at 58 Swap Index. The index price is shown on many pages as the current Bitcoin price.',
            p3: 'It is an equally weighted index using the Binance (40%), Huobi (30%) and BitFinex (30%) BTC/USD prices.',
            p4: 'This index is composite, which means the price is built from multiple sources. See the "Composite Index Breakdown" below for information on the constituents. If an exchange is to lose service and no trades are printed for over 15 minutes, 58COIN services may automatically remove that constituent from the index until trading resumes.'
        },
        theadList: ['Time', 'Contract', 'Price Index']
    }
}
export default handbook
