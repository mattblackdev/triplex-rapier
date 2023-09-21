import { Physics } from "@react-three/rapier";

export default function Provider({ children }: { children: React.ReactNode }) {
	return <Physics>{children}</Physics>;
}
