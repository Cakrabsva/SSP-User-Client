
import AppRoutes from './routes/appRoutes'

function App() {
  return (
    <div className='bg-black'>
      <div className="
        max-w-[411px] min-w-[375px] h-screen min-h-[780px]
        border border-gray-200 rounded-4xl shadow-lg
        overflow-auto custom-scrollbar
        mx-auto 
        bg-white
        relative">
        <AppRoutes />
      </div>
    </div>


  )
}

export default App
