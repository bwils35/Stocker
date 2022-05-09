const Stock = (props) => {
    const { onDeleteStockHandler, keyToManage, btcItem, ethItem } = props;
    return (
        <>
            <div classNameName="card border border-dark mt-2">
                <div classNameName="card-body pb-1">
                    <h4 classNameName="card-header color-"> Traded in USD </h4>
                    <h6 classNameName="card-body">Most Recent Trade</h6>
                    <p classNameName="card-text">{btcItem}</p>
                    
                </div>
            </div>
        </>
    );
};

const BitcoinCard = () => {

    return(
        <></>
    )
}

export default Stock;
