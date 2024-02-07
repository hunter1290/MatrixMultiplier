import React, { useState } from 'react'
import './App.css'

function App() {
 
  const [na,setNA] = useState(1);
  const [ma,setMA] = useState(1);
  const [nb,setNB] = useState(1);
  const [mb,setMB] = useState(1);
 
  const [matrixA, setMatrixA] = useState(Array.from({ length: na }, () => Array.from({ length: ma }, () => 0)));
  const [matrixB, setMatrixB] = useState(Array.from({ length: nb }, () => Array.from({ length: mb }, () => 0)));
  const [result, setResult] = useState("");
  const [finalMatrix,setFinalMatrix] = useState()
  
   
  const handleSizeChange = (n,m,setMatrix) => {
     if(n<=0 || m<=0)
     {
          alert("Entered Negative dimension is not Valid");
          setNA(1);
          setMA(1);
          setNB(1);
          setMB(1);
     }
    setMatrix(Array.from({ length: n }, () => Array.from({ length: m }, () => 0)));
};
  
const handleMatrixChange = (e, row, col, setMatrix) => {
  const newValue = parseInt(e.target.value);
  setMatrix(prevMatrix => {
      const newMatrix = [...prevMatrix];
      newMatrix[row][col] = newValue;
      return newMatrix;
  });
};

const multiplyMatrices = () => {
  // Perform multiplication
  if(nb!==ma)
  {
    alert("wrong dimension pair entered");
    setNA(1);
    setMA(1);
    setNB(1);
    setMB(1);
  }

  let resultMatrix = [];
  for (let i = 0; i < na; i++) {
      resultMatrix[i] = [];
      for (let j = 0; j < mb; j++) {
          let sum = 0;
          for (let k = 0; k < ma; k++) {
            sum += matrixA[i][k] * matrixB[k][j];
          }
          resultMatrix[i][j] = sum;
        }
      }
      
      // Set result
      setResult(resultMatrix.map(row => row.join(', ')).join('\n'));
      setFinalMatrix(resultMatrix)
      console.log(result)
      console.log(matrixA);
  console.log(matrixB)
};
   


  return (
    <div className='main'>
      <h1 className="heading">
        Matrix Multiplication
      </h1>

      <div className="dataInput">
          <h3 className="sizeHeading">Select the size</h3>
        <div className="sizea">
           <h3>A:</h3>
           <input  min={1} type="number" value={na} onChange={e=>{setNA(parseInt(e.target.value)); handleSizeChange(parseInt(e.target.value),ma,setMatrixA)}}/>
             X
           <input  min={1} type="number" value={ma} onChange={e=>{setMA(parseInt(e.target.value)); handleSizeChange(na,parseInt(e.target.value),setMatrixA)}} />
        </div>
        <div className="sizeb">
           <h3>B:</h3>
           <input min={1} type="number" value={nb} onChange={e=>{setNB(parseInt(e.target.value)); handleSizeChange(parseInt(e.target.value),mb,setMatrixB)}}/>
             X
           <input min={1} type="number" value={mb} onChange={e=>{setMB(parseInt(e.target.value)); handleSizeChange(nb,parseInt(e.target.value),setMatrixB)}} />
        </div>
  
       
        <div className="inputAB">

        <div className="matrixA">
          <h3>The First Matrix:</h3>
           <div className="inputA">
             <h4>A:</h4>

             <div className="atext">
             {matrixA.map((row, i) => (
                    <div key={i} className='dataRow'>
                        {row.map((col, j) => (
                            <input
                               className='data'
                                key={j}
                                type="number"
                                value={col}
                                onChange={(e) => handleMatrixChange(e, i, j, setMatrixA)}
                            />
                        ))}
                    </div>
                ))}
             </div>
              
           </div>
         </div>

         <div className="matrixB">
          <h3>The Second Matrix:</h3>
           <div className="inputB">
             <h4>B:</h4>

                  <div className="btext">
                  {matrixB.map((row, i) => (
                    <div key={i} className='dataRow'>
                        {row.map((col, j) => (
                            <input
                             className='data'
                                key={j}
                                type="number"
                                value={col}
                                onChange={(e) => handleMatrixChange(e, i, j, setMatrixB)}
                            />
                        ))}
                    </div>
                ))
                }
                  </div>
             
           </div>
         </div>

        </div>
         
        
      </div>


   
        
        <button className='calculate' onClick={multiplyMatrices}>Calculate</button>
         
          <div className="result">
                       <h3 style={{marginBottom:"3%"}}>Result</h3>

                           <div className="endSection">

                             <h3> C </h3>
                             <h3>  =  </h3>
                             <h3 style={{width:"7vw"}}>  A X B </h3>
                             <h3>  =  </h3>

                             
                           <div className="ouput atext" >
                 {matrixA.map((row, i) => (
                    <div className='outputrow' key={i}>
                        {row.map((col, j) => (                         
                            <div key={j}>{col}</div>
                        ))}
                    </div>
                ))
                }
                 </div>
                  
                  <h3> X </h3>

                 <div className="output atext">
                 {matrixB.map((row, i) => (
                    <div className='outputrow' key={i}>
                        {row.map((col, j) => (                         
                            <div key={j}>{col}</div>
                        ))}
                    </div>
                ))
                }
                 </div>

                  <h3> = </h3>


                 <div className="ouput atext">
                 {finalMatrix?finalMatrix.map((row, i) => (
                    <div className='outputrow' key={i}>
                        {row.map((col, j) => (                         
                            <div key={j}>{col}</div>
                        ))}
                    </div>
                )):<>0</>
                }
                 </div>

                            </div> 
                  

                 </div>
    </div>
  )
}

export default App