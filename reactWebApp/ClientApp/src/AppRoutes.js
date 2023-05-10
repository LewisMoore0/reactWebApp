import { Counter } from "./components/Counter";
import { Home } from "./components/Home";
import { RenderExercise } from "./components/RenderExercise";
import { Books } from "./components/Books"
import { SubmitForm } from "./components/SubmitForm";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/render-exercise',
    element: <RenderExercise />
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
