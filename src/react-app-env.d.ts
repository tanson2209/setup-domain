import { AppState } from "store";

declare global {
  type RootState = AppState;
}

declare module "*.svg" {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
