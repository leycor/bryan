import React from 'react'

const CodeSection = ({ code }) => (

    <div className="bg-gray-800 text-gray-300  rounded px-4 overflow-auto mb-5">
    <pre>
        { code }
    </pre>
</div>
)

export default CodeSection