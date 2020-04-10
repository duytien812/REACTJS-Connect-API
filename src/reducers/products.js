var initialState = [
    {
        id: 1,
        name: "Iphone 6 plus",
        price: 400,
        status: true
    },
    {
        id: 2,
        name: "Samsung galaxy S7 Edge",
        price: 700,
        status: false
    },
    {
        id: 3,
        name: "Oppo F1",
        price: 500,
        status: true
    },
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
};

export default products;