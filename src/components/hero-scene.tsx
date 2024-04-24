import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Scene() {
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
}

useGLTF.preload("/scene-transformed.glb");
