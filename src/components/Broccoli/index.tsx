import {useRef, useEffect, useState, RefObject, Ref} from 'react';
import {Canvas, useThree} from '@react-three/fiber';
import gsap from 'gsap';
import "./index.scss"
import {useGLTF} from "@react-three/drei";
import * as THREE from 'three'

function Model() {
    const { scene } = useGLTF('/broccoli.glb');
    const modelRef = useRef<THREE.Object3D>(null);

    useEffect(() => {
        if (modelRef.current) {
            gsap.to(modelRef.current.rotation, {
                duration: 10,
                y: Math.PI * 2,
                repeat: -1,
                ease: "linear"
            });
            gsap.to(modelRef.current.position, {
                duration: 2,
                y: 0.4,
                repeat: -1,
                yoyo: true,
                yoyoEase: true,
                ease: 'sine.inOut'
            });
        }
    }, []);

    scene.scale.set(2, 2, 2);
    scene.rotation.set(0, 0, Math.PI * 0.1);
    scene.position.set(0, 0, 0);

    return <primitive object={scene} ref={modelRef} />;
}

function CameraController() {
    const { camera } = useThree();
    camera.lookAt(0, 0, 0);
    return null;
}

export default function Scene() {
    const parent = document.getElementsByClassName('spicehunt')[0]
    console.log(parent)
    const sizeParams = {
        width: 200,
        height: 250,
    }

    const [dimensions, setDimensions] = useState(sizeParams);

    useEffect(() => {
        const handleResize = () => {
            setDimensions(sizeParams);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            className="broccoli"
        >
            <Canvas
                style={{
                    width: dimensions.width,
                    height: dimensions.height,
                }}
            >
                <CameraController />
                <Model /> {/* Ваша модель с анимацией */}

            </Canvas>
        </div>
    );
}