import './App.css'

function App() {

  const [password, setpassword] = useState("")
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(second)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char)

    }

    setpassword(pass)


  }, [charAllowed, numberAllowed, length, setpassword])

  return (
    <>
      <h1>hanzla</h1>

    </>
  )
}

export default App
