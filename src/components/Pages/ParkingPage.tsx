import { Link } from "../Atoms/Link";
import { SketchLayout } from "../Layouts/SketchLayout";

export const ParkingPage = () => (
  <SketchLayout>
    <h1>Test environment hub</h1> 
    <Link to="admin">Admin application</Link>
    <Link to="reports">User application</Link>
  </SketchLayout>
)
