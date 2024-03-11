App.jsx [02counter]
function App(){
    const [counter, setCounter] = useState(15)

    const addValue = () => {
        setCounter(counter+1)
        setCounter(counter+1)
        setCounter(counter+1)
        setCounter(counter+1)
        //What will be the value of counter here? 1 click-> 1 value change/addition
        //What happens is these execute as a batch and not individually thus the value changes is once only
        //However in, 
        setCounter(prevCounter => prevCounter+1)
        setCounter(prevCounter => prevCounter+1)
        setCounter(prevCounter => prevCounter+1)
        setCounter(prevCounter => prevCounter+1)
        //here these work individually as these are dependent on a previous state 


    } 
}
