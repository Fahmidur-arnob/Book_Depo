import React from 'react';
// import './HomeQuotes.css';

const HomeQuotes = () => {
    return (
        <>
            <h1 className='font-bold text-center text-5xl mt-24 mb-16'>QUOTES</h1>

            <div className='mainGridContainer mx-auto'>

                <div className="car bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='text-2xl font-semibold'>“A good bookshop is just a genteel Black Hole that knows how to read.”
                            <br /> ―Terry Pratchett<br /> Guards! Guards!</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='text-2xl font-semibold'>“Books were safer than other people anyway.”
                            <br />―Neil Gaiman<br /> The Ocean at the End of the Lane</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='text-2xl font-semibold'>“A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.”
                            <br/>―George R.R. Martin<br/> A Dance with Dragons</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='text-2xl font-semibold'>“You can get lost in any library, no matter the size. But the more lost you are, the more things you’ll find.”
                            <br />―Millie Florence<br /> Lydia Green Of Mulberry Glen</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='text-2xl font-semibold'>“Books are a uniquely portable magic.”
                            <br />―Stephen King<br /> On Writing: A Memoir of the Craft</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className='text-2xl font-semibold'>“Books are mirrors: you only see in them what you already have inside you.”
                            <br />―Carlos Ruiz Zafón<br /> The Shadow of the Wind</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeQuotes;