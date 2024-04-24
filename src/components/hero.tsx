import { Canvas, useFrame } from "@react-three/fiber";
import Button from "./button";

import "@styles/components/hero.css";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Scene = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const boxRef = useRef<any>();
	const { materials, nodes } = useGLTF("/scene-transformed.glb");
	useFrame(() => {
		boxRef.current.rotation.y += 0.01;
		boxRef.current.rotation.x += 0.01;
	});

	return (
		<>
			<group scale={2.7} dispose={null}>
				<mesh
					ref={boxRef}
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					geometry={(nodes.Cube as any).geometry}
					material={materials["book-texture"]}
					rotation={[Math.PI, 0, 0]}
				/>
			</group>
			<ambientLight color={0xffffff} intensity={7} position={[0, 0, 0]} />
		</>
	);
};

useGLTF.preload("/scene-transformed.glb");

export default function Hero() {
	return (
		<div className="hero__container">
			<div className="hero">
				<div className="article__book">
					<Canvas camera={{ fov: 70, position: [0, 0, 12], castShadow: false }}>
						<Scene />
					</Canvas>
				</div>
				<div className="hero__content">
					<h3>NYHET</h3>
					<h2>
						BOKBITS
						<br className="hero__break" />
						CUPEN
					</h2>

					<div className="hero__buttons">
						<Button intent="border">Delta</Button>
						<Button intent="secondary">Läs Mer</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
