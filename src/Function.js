import React, { useEffect, useState } from 'react'
import app from './firebase'

export default function Function() {
  let [result, setResult] = useState(null)

  useEffect(() => {
    app.functions().httpsCallable('helloWorld')().then(res => setResult(res.data))
  }, [])

  return (
    <div>
      Function result: <span>
        { result || 'Loading?' }
      </span>
    </div>
  )
}