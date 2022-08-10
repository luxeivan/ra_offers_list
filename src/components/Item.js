import React from 'react'

export default function Item({ item }) {
    if(!item.title) return
    let price = ''
    if (item.currency_code && item.currency_code === 'USD') {
        price = '$' + item.price
    } else if (item.currency_code && item.currency_code === 'EUR') {
        price = '€' + item.price
    } else {
        price = item.price + ' ' + item.currency_code
    }
    let quantityClass = 'item-quantity'
    if (item.quantity <= 10) { quantityClass += ' level-low' }
    else if (item.quantity > 10 && item.quantity <= 20) { quantityClass += ' level-medium' }
    else {quantityClass += ' level-high'}

        return (
            <div className="item">
                <div className="item-image">
                    <a href={item && item.url || '#'} target="_blank">
                        <img src={item && item.MainImage && item.MainImage.url_570xN || 'https://static.tildacdn.com/tild6333-6666-4435-a132-306132353439/no_foto.png'} />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{item.title && item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}</p>
                    <p className="item-price">{price}</p>
                    <p className={quantityClass}>{item.quantity} left</p>
                </div>
            </div>
        )
}

Item.defaultProps = {
    item: {
    }
}