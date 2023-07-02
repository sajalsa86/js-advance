
//22-8 (advanced) Multi-layer discount price calculation

function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const seound100Rate = 90;
    const restTicketRate = 70;
    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * seound100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else {
        const first100Price = 100 * first100Rate;
        const secound100Price = 100 * seound100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalPrice = first100Price + secound100Price + restTicketPrice;
        return totalPrice;
    }

}

const ticket = 201;
const viewDisount = ticketPrice(ticket);
console.log(viewDisount);