import { useState } from 'react';
import Counter from './Counter';
import Greeting from './Greeting';
import ToDoList from './ToDoList';

function Header() {
  return (
    <header>
      <h1 className='text-5xl font-bold mb-4'>Aplikasi React Saya</h1>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h2 className='text-2xl mb-4 font-bold'>Selamat datang di Aplikasi React Saya!</h2>
      <p className='mb-4'>Ini adalah area konten utama</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Aplikasi React Saya</p>
    </footer>
  );
  
}

function Example() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <div className='w-full max-w-lg'>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            type="text" placeholder="Nama" value={name} onChange={handleNameChange}/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="Umur" 
              value={age} onChange={handleAgeChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" placeholder="Email" 
              value={email} onChange={handleEmailChange}
            />
          </div>
        </div>
      <p>{name} berumur {age} tahun dan emailnya adalah {email}.</p>
    </div>
  )
}

function App() {

  return (
    <div>
      <div className="min-h-screen bg-zinc-900 text-white">
        <div className="container mx-auto px-4 py-8 flex flex-col items-center text-center">
          <Header />
          <Main />
          <Greeting name="Mochammad Ardiansyah" />
          <Counter />
          <Example />
          <Footer />
        </div>
      </div>
        <ToDoList />
    </div>
  )
}

export default App
