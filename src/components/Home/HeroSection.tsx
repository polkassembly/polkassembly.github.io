import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { randFloat, randInt } from 'three/src/math/MathUtils';
import { socialLinksUL } from './Footer';

export default function HeroSection() {

	const heroSectionRef = useRef<HTMLHeadingElement>(null);

	function randItem(items: any[]) {
		return items[Math.floor(Math.random()*items.length)]
	}

	const colors = [0xe80b81, 0xe5007a, 0xc40061, 0xff4da0];

	// Scene
	const scene = new THREE.Scene();

	//Object
	const ringMeshes: any[] = [];
	const ringsCont = new THREE.Group();
	ringsCont.position.set(110,20,0);
	ringsCont.rotation.x = 10
	ringsCont.rotation.z = 0
	ringsCont.scale.set(0.8, 0.8, 0.8);
	scene.add(ringsCont);

	function genRing(color:number, radius:number, width:number, startAng:number, ang:number, y:number, speed:number) {
		if (startAng == null) { startAng = 0 }
		if (ang == null) { ang = Math.PI*1.4 }
		if (y == null) { y = 0 }
		if (speed == null) { speed = 1 }
	
		if (radius < 1) { radius = 1 }
		const extrudeSettings = {
			depth: 2,
			bevelEnabled: true,
			steps: 1,
			curveSegments: ~~((64 * ang) / 6.14)
		};
		
		const shape = new THREE.Shape()
		shape.absarc(0, 0, radius + width, 0, ang, false)
		shape.lineTo(radius * Math.cos(ang), radius * Math.sin(ang))
		shape.absarc(0, 0, radius, ang, 0, true)
	
		const geo = new THREE.ExtrudeGeometry( shape, extrudeSettings )
		const mat = new THREE.MeshLambertMaterial( { color: color } );
	
		const mesh = new THREE.Mesh( geo, mat ) as any
		mesh.rotation.x = Math.PI/2
		mesh.rotation.z = startAng
		mesh.position.y = y * randInt(-1.5, 0.5)
		mesh.speed = speed * 0.001
		mesh.receiveShadow = true
		mesh.castShadow = true
		ringMeshes.push(mesh)
		ringsCont.add(mesh)
		return mesh
	}

	useEffect(() => {
		let cancel = false;
		if(cancel) return;
		
		let width;
		for (let i = 0; i < 25; i++) {
			let radius;
			if (randInt(0,3)) {
				radius = randFloat(2,4) + (randFloat(8,10) * randFloat(1,2) * randFloat(1,2) * randFloat(1,2))
				width = (randFloat(0,3.5) + randFloat(0,3.5)) - randInt(0, radius / 4) - (radius / 50)
			} else {
				radius = randFloat(1,3) * randFloat(2,4)
				width = randFloat(1,2) * randFloat(1,2) * randFloat(1.1,1.5)
			}
		
			const minWidth = Math.pow(2, randInt(0,2)) * 0.05;
			if (width < minWidth) { width = minWidth; }
		
			genRing(randItem(colors),
				radius, // radius
				width, // width
				randFloat(0,1000), // startAng
				randFloat(1,6), // ang
				randFloat(0, (50/(radius+1)) + 5) + (5/width/(radius+0.5)), // y
				Math.max(-randFloat(0.5,2), randFloat(1, 50-(radius/2)) - (radius/2)) * 0.25 // speed
			);
		}
		
		// Camera
		const canvas = document.querySelector('canvas#pa-logo-webgl') as HTMLCanvasElement;
		const heroSection =  heroSectionRef.current;
		const sizes = {
			width: Number(heroSection!.offsetWidth),
			height: 500
		}
		
		const camera = new THREE.PerspectiveCamera(25, sizes.width/sizes.height, 10, 1000);
		camera.position.set(290, 45, 155);
		scene.add(camera);
		
		// Lights
		const ambience = new THREE.AmbientLight(0xffffff, 0.5);
		scene.add(ambience);
		
		const spot = new THREE.SpotLight(0x0000FF, 1);
		spot.position.set(-15, 50, 100);
		spot.penumbra = 1;
		spot.angle = 0.5;
		spot.decay = 1;
		spot.distance = 300;
		spot.target = ringsCont;
		
		// Controls
		const controls = new OrbitControls(camera, canvas as HTMLElement);
		controls.enableDamping = false;
		controls.enabled = false;
		
		//Renderer
		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			canvas: canvas,
			powerPreference: "high-performance",
		});
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.outputEncoding = THREE.sRGBEncoding;
		renderer.toneMapping = THREE.ReinhardToneMapping;
		renderer.toneMappingExposure = 6;
		renderer.render(scene, camera);
		
		//state
		const cursorPos = { x: 0, y: 0 };
		
		var camPos = {
			x: 0,
			y: 0,
		};
		
		// Events
		function followCameraWithMouseHelper(e:MouseEvent) {
			cursorPos.x = -1 * e.clientX / sizes.width - 0.5;
			cursorPos.y = e.clientY / sizes.height - 0.5;
			camera.position.x = camPos.x + cursorPos.x * 15;
			camera.position.y = camPos.y + cursorPos.y * 15;
			controls.update();
		}
		
		function followCameraWithTouchHelper(e:TouchEvent) {
			cursorPos.x = e.touches[0].clientX / sizes.width - 0.5;
			cursorPos.y = e.touches[0].clientY / sizes.height - 0.5;
			camera.position.x = camPos.x + cursorPos.x * 15;
			camera.position.y = camPos.y + +cursorPos.y * 15;
			controls.update();
		}
		
		function followCameraWithMouse() {
			camPos.x = camera.position.x;
			camPos.y = camera.position.y;
		
			window.addEventListener("mousemove", followCameraWithMouseHelper);
			window.addEventListener("touchmove", followCameraWithTouchHelper);
		}

		function removeFollowCameraWithMouse() {
			camPos.x = camera.position.x;
			camPos.y = camera.position.y;
		
			window.removeEventListener("mousemove", followCameraWithMouseHelper);
			window.removeEventListener("touchmove", followCameraWithTouchHelper);
		}

		function resizeHelper(){
			const heroSection =  heroSectionRef.current;
			sizes.width = heroSection!.offsetWidth;
		
			//update camera
			camera.aspect = sizes.width / sizes.height;
			camera.updateProjectionMatrix();
		
			//update renderer:
			renderer.setSize(sizes.width, sizes.height);
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); //if monitor/screen changed
		}
		
		// Update camera and renderer on resize
		window.addEventListener("resize", resizeHelper);
		
		// Animation loop
		// const clock = new THREE.Clock();
		const tick = () => {
			for (let r of Array.from(ringMeshes)) {
				r.rotation.z += r.speed;
			}
		
			controls.update();
			renderer.render(scene, camera);
			window.requestAnimationFrame(tick);
		};
		
		tick();
		followCameraWithMouse();
	
		return () => {
			removeFollowCameraWithMouse();
			window.removeEventListener("resize", resizeHelper);
			cancel = true;
		}
	}, [heroSectionRef.current]);

	return (
		<section>
			<div id="hero-section" ref={heroSectionRef} className="h-[105vh] -mt-24 flex bg-gradient-to-b from-pa-purple to-white">
				<div className="container h-[500px] flex lg:items-end relative z-10 mt-32">
					<div className="ml-4 mt-16 mb-16 md:ml-16 lg:ml-48 lg:mb-32 text-white">
						<h1 className="text-3xl lg:text-6xl uppercase text-pa-pink">Polkassembly</h1>
						<h1 className="text-xl lg:text-3xl mt-4 text-black">Democratizing governance for<br/>substrate chains</h1>

						{ socialLinksUL('text-pa-pink', 'w-9 h-9', '') }
					</div>
				</div>
				<canvas id="pa-logo-webgl" className="w-full h-[500px] absolute z-0 mt-40"></canvas>
			</div>
		</section>
	)
}
