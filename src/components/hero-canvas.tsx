import { Canvas } from "@react-three/fiber";
import { lazy } from "react";

const Scene = lazy(async () => import("@components/hero-scene"));

export default function HeroCanvas() {
	return (
		<Canvas camera={{ fov: 70, position: [0, 0, 12], castShadow: false }}>
			<Scene />
		</Canvas>
	);
}
