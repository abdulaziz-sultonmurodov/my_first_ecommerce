import React from 'react'


const Product = ({ product }) => {
    return (
        <>
       
    <div class="w-full mb-2 my-4 md:w-1/5 md:mx-4 border rounded shadow-sm">
        <a href="#" class="mb-4">
            <img class="mx-auto my-8" src={product.image} />
        </a>
        <hr className='mt-4' />
        <div class="px-4 py-4">
            <div>
                <a href="#" class="font-semibold leading-tight text-xl text-gray-800 hover:text-gray-800">
                {product.name}
                </a>
            </div>
            <div className='my-1'>
                <a href="#" class="font-normal leading-tight text-md text-gray-800 hover:text-gray-800">
                {product.category}
                </a>
            </div>
            <hr class="border-gray-200 my-1 border-bottom-none" style={{borderTopWidth: "0"}} />
            <div class='flex text-gray-700 text-sm '>
                <div class="pr-3">{product.price}</div> 
            </div>
        </div>
    </div>


        </>
    )
}

export default Product
