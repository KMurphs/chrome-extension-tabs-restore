import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="modal-header items-center flex border-b-2 border-gray-200">
        <h1 className="logo p-4 flex items-center text-lg font-bold m-0 text-indigo-800">
          <img className="logo-icon w-8 inline mr-4" src="./imgs/icon-128.png" alt="Related to Tab manipulation"/>
          Tabs Restore
          <span className="version text-gray-600 ml-4 text-base">(1.0.0)</span>
        </h1>
      </header>

      <main className="modal-content py-2 px-6 text-sm">
        <p>Easily save and restore a previous Windows Session Tabs</p>
      </main>

      <footer className="modal-icons border-t-2 border-gray-200 w-full h-12">
        <ul className="flex justify-between px-6 py-4">
          <li className="opacity-1 transition-opacity w-30 hover:opacity-40"><a href="https://www/traversymedia.com" target="_blank"><i className="text-indigo-800 fa fa-globe"></i></a></li>
          <li className="opacity-1 transition-opacity w-30 hover:opacity-40"><a href="https://www/traversymedia.com" target="_blank"><i className="text-indigo-800 fa fa-youtube"></i></a></li>
          <li className="opacity-1 transition-opacity w-30 hover:opacity-40"><a href="https://www/traversymedia.com" target="_blank"><i className="text-indigo-800 fa fa-twitter"></i></a></li>
          <li className="opacity-1 transition-opacity w-30 hover:opacity-40"><a href="https://www/traversymedia.com" target="_blank"><i className="text-indigo-800 fa fa-facebook"></i></a></li>
          <li className="opacity-1 transition-opacity w-30 hover:opacity-40"><a href="https://www/traversymedia.com" target="_blank"><i className="text-indigo-800 fa fa-github"></i></a></li>
        </ul>
      </footer>

    </div>
  );
}

export default App;
