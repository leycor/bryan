import React from 'react'

const CodeSection = ({ code, lang }) => (

    <div className="mb-5">
    <pre className='prettyprint overflow-auto'>
        <code className={`language-${lang}`}>
            { code }
        </code>
    </pre>
</div>
)

export default CodeSection