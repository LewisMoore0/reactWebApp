import { Counter } from "./components/Counter";
import { Home } from "./components/Home";
import { RenderExercise } from "./components/RenderExercise";
import { Books } from "./components/Books"

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
   }

];

export default AppRoutes;
