import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const addToDb = (cart)=>{
    // console.log(cart)
    let shoppingCart = JSON.parse(localStorage.getItem('job-cart'));
    let storedCart = [];
    if(shoppingCart){
        const alreadyAdded = shoppingCart?.find((data) => data.id === cart.id)
        if(alreadyAdded){
            return toast.error('Already Added');
        }
        else{
            let shoppingCart = JSON.parse(localStorage.getItem('job-cart'));
            const remaining = [...shoppingCart, cart];
            localStorage.setItem('job-cart', JSON.stringify(remaining))
        }
    }
    else{
        storedCart.push(cart);
        localStorage.setItem("job-cart", JSON.stringify(storedCart))
    }
    toast.success("Successfully Added");
}


const removeFromDb = (id) => {
    const shoppingCart = getShoppingCart();
    if(id in shoppingCart){
        delete shoppingCart[id];
        localStorage.setItem("job-cart", JSON.stringify(shoppingCart));
    }
}

const getLocalStorage = () => {
    const getData = JSON.parse(localStorage.getItem("job-cart"))
    return getData;
}

const deleteShoppingCart = () => {
    localStorage.removeItem("job-cart")
}

export { addToDb, removeFromDb, getLocalStorage, deleteShoppingCart };