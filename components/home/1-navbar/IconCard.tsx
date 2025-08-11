import React from 'react'

export default function IconCard() {
    return (
        <div>
            <span className="relative flex items-center cursor-pointer">
                <svg width="22" height="22" fill="#A97C50" viewBox="0 0 24 24">
                    <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.334 16h9.332c.822 0 1.542-.502 1.847-1.267l2.651-6.364A1 1 0 0 0 20.236 7H6.21l-.94-2.342A1 1 0 0 0 4.333 4H2v2h1.333l3.6 8.982A2.003 2.003 0 0 0 7.334 16z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">1</span>
            </span>
        </div>
    )
}
