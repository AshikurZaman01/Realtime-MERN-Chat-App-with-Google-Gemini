import { UserProvider } from "./ContextApi/user.context"
import AppRoutes from "./Routes/AppRoutes"

const App = () => {
  return (
    <UserProvider>
      <AppRoutes></AppRoutes>
    </UserProvider>
  )
}

export default App