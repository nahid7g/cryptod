import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import Currencies from '../Currencies/Currencies';
import "./AllCurrency.css";
import Loading from '../../Shared/Loading/Loading';

const AllCurrency = () => {
    const [currencies, setCurrencies] = useState([]);
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=true&price_change_percentage=7d';
    useEffect(() => {
        axios.get(url).then(response => setCurrencies(response.data));
    }, []);
    if (currencies.length === 0) {
        return <Loading />
    }
    return (
        <div className='allcurrency'>
            <div className='currencies'>
                <form className='col-6 mx-auto'>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Search" />
                        <button class="btn btn-primary" type="button" id="button-addon2">Search</button>
                    </div>
                </form>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Price</th>
                            <th>Change</th>
                            <th>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currencies?.map(currency => <Currencies key={currency.id} currency={currency} />)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default AllCurrency;