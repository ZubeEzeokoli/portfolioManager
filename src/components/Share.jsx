export default function Share({
    symbol,
    idx,
    sharePrice,
    oneDChange,
    yourShares,
    avgPrice,
    mktValue,
    yourChange,
    hardCodedUserAmount,
    setHardCodedUserAmount,
    portfolioValue,
    updatePortfolioValue
}) {
    const share = {
        symbol,
        sharePrice,
        oneDChange,
        yourShares,
        avgPrice,
        mktValue,
        yourChange,
    };
    const [revealBuyWindow, setRevealBuyWindow] = useState(false);
    const [revealSellWindow, setRevealSellWindow] = useState(false);

    return (
        <div className="text-cs text-black bg-black contents">
            <div className="border-y border-black px-6 py-3">{symbol}</div>
            <div className="border-y border-black px-6 py-3">{sharePrice}</div>
            <div className="border-y border-black px-6 py-3">{oneDChange}</div>
            <div className="border-y border-black px-6 py-3">{yourShares}</div>
            <div className="border-y border-black px-6 py-3">{avgPrice}</div>
            <div className="border-y border-black px-6 py-3">{mktValue}</div>
            <div className="border-y border-black px-6 py-3">{yourChange}</div>
        </div>
    )
}