import { Home } from "./components/Home";
import { Books } from "./components/Books"
import { SubmitForm } from "./components/SubmitForm";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/books',
    element: <Books />
  },
  {
    path: '/submitForm',
    element: <SubmitForm/>
  }

];

export default AppRoutes;
