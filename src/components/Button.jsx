import React from 'react'

const Button = ({title , containerClass , id , rightIcon , leftIcon}) => {
  return (
    <button className={`${containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black`} id={id}>
        {leftIcon}

        <span className=' relative inline-flex overflow-hidden font-general text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
    </button>
  )
}

export default Button