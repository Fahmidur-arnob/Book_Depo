import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


const BookingModal = ({ bookName, setBookName }) => {
    const { name, resalePrice } = bookName;
    const { user } = useContext(AuthContext);
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />

            <div className="modal">

                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm rounded-lg absolute right-2 top-4">Close</label>

                    <h3 className="text-lg font-bold">Book Name: <span className='text-lg text-indigo-600'>{name}</span></h3>

                    <form className='grid grid-cols-1 gap-5 my-7'>
                        <input type="text" name='bookName' disabled defaultValue={name} className="input w-full border border-sky-400 rounded-xl" />

                        <input type="text" name='name' disabled defaultValue={user?.displayName} className="input w-full border border-sky-400 rounded-xl" />

                        <input type="text" name='email' disabled defaultValue={user?.email} placeholder="Type here" className="input w-full border border-sky-400 rounded-xl" />

                        <input type="text" name='resalePrice' defaultValue={resalePrice} placeholder="Type here" className="input w-full border border-sky-400 rounded-xl" />

                        <input type="text" placeholder="Enter Your Phone Number" className="input w-full border border-sky-400 rounded-xl" />

                        <input type="text" placeholder="Enter Your Location" className="input w-full border border-sky-400 rounded-xl" />

                        <br/>

                        <input type="submit" value="Submit" className='btn w-full bg-indigo-700 font-semibold rounded-xl my-5'/>
                    </form>

                </div>

            </div>
        </>
    );
};

export default BookingModal;