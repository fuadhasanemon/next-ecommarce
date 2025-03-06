import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <div>
        <Link href={'/cart'} className='group relative' >
            <ShoppingBag className='w-5 h-5 group-hover:text-black hoverEffect' />
            <span className='absolute -top-1 -right-1 bg-black text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center'>0</span>
        </Link>
    </div>
  )
}

export default CartIcon