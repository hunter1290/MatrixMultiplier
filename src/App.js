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
  }

  let resultMatrix = [];
  for (let i = 0; i < na; i++) {
      resultMatrix[i] = [];
      for (let j = 0; j < nb; j++) {
          let sum = 0;
          for (let k = 0; k < ma; k++) {
              sum += matrixA[i][k] * matrixB[k][j];
          }
          resultMatrix[i][j] = sum;
      }
  }

  // Set result
  setResult(resultMatrix.map(row => row.join(', ')).join('\n'));
  // console.log(matrixA);
  // console.log(matrixB)
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
           <input type="number" value={na} onChange={e=>{setNA(parseInt(e.target.value)); handleSizeChange(parseInt(e.target.value),ma,setMatrixA)}}/>
             X
           <input type="number" value={ma} onChange={e=>{setMA(parseInt(e.target.value)); handleSizeChange(na,parseInt(e.target.value),setMatrixA)}} />
        </div>
        <div className="sizeb">
           <h3>B:</h3>
           <input type="number" value={nb} onChange={e=>{setNB(parseInt(e.target.value)); handleSizeChange(parseInt(e.target.value),mb,setMatrixB)}}/>
             X
           <input type="number" value={mb} onChange={e=>{setMB(parseInt(e.target.value)); handleSizeChange(nb,parseInt(e.target.value),setMatrixB)}} />
        </div>
  
       
        <div className="inputAB">
        <div className="matrixA">
          <h3>The First Matrix:</h3>
           <div className="inputA">
             <h4>A:</h4>

             {matrixA.map((row, i) => (
                    <div key={i}>
                        {row.map((col, j) => (
                            <input
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

         <div className="matrixB">
          <h3>The Second Matrix:</h3>
           <div className="inputB">
             <h4>B:</h4>

             {matrixB.map((row, i) => (
                    <div key={i}>
                        {row.map((col, j) => (
                            <input
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


   
        
        <button className='calculate' onClick={multiplyMatrices}>Calculate</button>
         
          <div className="result">
                       <h3>Result</h3>
                <textarea className='resultMatrix' value={result} readOnly rows="3" cols="20"></textarea>   
                 </div>
    </div>
  )
}

export default App