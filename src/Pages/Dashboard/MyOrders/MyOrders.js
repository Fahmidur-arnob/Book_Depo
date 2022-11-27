import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
            <h1 className='text-4xl font-semibold my-4 '>My Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            bookings.map((booking, i) =>
                                <tr className='hover'>
                                    <th>{i + 1}</th>
                                    <td>{booking.name}</td>
                                    <td>{booking.productName}</td>
                                    <td>{booking.location}</td>
                                    <td>{booking.price}</td>
                                    <td>{booking.phoneNumber}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;