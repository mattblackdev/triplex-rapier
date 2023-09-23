import { Physics } from "@react-three/rapier";

export default function Provider({ children }: { children: React.ReactNode }) {
  console.log("Provider providing");
  return <Physics>{children}</Physics>;
}
