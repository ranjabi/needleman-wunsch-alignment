import React, { useEffect, useState } from 'react'
import algo from './algo'

const Main = () => {
  const [sequence1, setSequence1] = useState('')
  const [sequence2, setSequence2] = useState('')
  const [result, setResult] = useState(null)

  // useEffect(() => {
  //   let { arr, input, finalSolution, runtime } = algo.run()
  //   setResult({ arr, input, finalSolution, runtime })
  //   // let arrLength = 
  //     // 
  // }, [])

  const resultbox = {
    margin: '1rem auto',
    display: 'grid',
    gridTemplateColumns: `repeat(${result === null? 0 : result.arr[0].length}, 40px)`,
  }

  const submitHandler = (event) => {
    event.preventDefault()
    let { arr, input, finalSolution, runtime } = algo.run()
    setResult({ arr, input, finalSolution, runtime })
  }

  const handleTC1 = () => {
    let { arr, input, finalSolution, runtime } = algo.run('TTAAGCGTGACAGTCCCAGTGAA','CCTTCTCGAGTTCCGTCCGG')
    setResult({ arr, input, finalSolution, runtime })
  }

  const handleTC2 = () => {
    let { arr, input, finalSolution, runtime } = algo.run('GGAGTCATACGCAAGAAGGATGGTCTC','CCCACAAACCGTGATGGCTGTCCTT')
    setResult({ arr, input, finalSolution, runtime })
  }

  const handleTC3 = () => {
    let { arr, input, finalSolution, runtime } = algo.run('TAGAACTGGACGTGCGGTTTCTCTGCGAAGAACAC','CAGACACCGGCGCACCAGTTTTCACGCCGA')
    setResult({ arr, input, finalSolution, runtime })
  }

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div className="my-2">
          <label htmlFor="">Sequence 1: </label>
          <input
            className="border-2 mt-2 bg-white w-full"
            type="text"
            onChange={({ target }) => setSequence1(target.value)}
          />
        </div>
        <div className="my-2">
          <label htmlFor="">Sequence 2: </label>
          <input
            className="border-2 mt-2 mb-2 bg-white  w-full"
            type="text"
            onChange={({ target }) => setSequence2(target.value)}
          />
        </div>
        <button
          className="bg-slate-500 text-white px-4 py-2 rounded-lg hover:opacity-80"
          type="submit"
        >
          Submit
        </button>
      </form>
      <button className="bg-slate-500 text-white my-2 px-4 py-2 rounded-lg hover:opacity-80" onClick={handleTC1}>Test Case 1</button>
      <button className="bg-slate-500 text-white mx-2 px-4 py-2 rounded-lg hover:opacity-80" onClick={handleTC2}>Test Case 2</button>
      <button className="bg-slate-500 text-white px-4 py-2 rounded-lg hover:opacity-80" onClick={handleTC3}>Test Case 3</button>
      {result === null ? (
        ''
      ) : (
        <div className="mt-4">
          Hasil Alignment:
          <br />
          <div className=''>
          Sequence 1: {result.input}
          <br />
          Sequence 2: {result.finalSolution}
          </div>
          Runtime: {result.runtime.toFixed(5)} ms
          {/* <div className='grid grid-cols-12 mt-8 w-full'> */}
          <div style={resultbox}>
            {result.arr.map((row, index1) =>
              row.map((col, index2) => (
                <div
                  className={`bg-${col.color} text-base w-8 h-8 border flex justify-center items-center`}
                >
                  {index1 === 0 || index2 === 0 ? col.letter : col.value}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Main
