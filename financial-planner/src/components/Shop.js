import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Shop() {

    const navStyle = {
        color: 'black'
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://jobs.github.com/positions.json?search=node');

        const items = await data.json();
        console.log(items.items);
        setItems(items.items);
    }

    return (
        <div>
            {items.map(item => (
                <h1 key={item.itemid}>
                    <Link style={navStyle} to={`/shop/${item.itemid}`}>
                        {item.name}
                    </Link>
                </h1>
            ))}
        </div>
    );
}

export default Shop;
