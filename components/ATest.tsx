// import { useState, useRef } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { Points, PointMaterial } from '@react-three/drei'
// import { inSphere } from 'maath/random'


// export default function ATest() {
//   return (
//     <div className='justify-center m-auto mx-auto  w-[500px] h-[500px]  rounded-[100%] '>
//       <Canvas className=' rounded-[50%]' camera={{ position: [0, 0, 1] }}>
//         <Stars />
//       </Canvas>
//     </div>
//   )
// }

// function Stars(props) {

//   const ref = useRef()
//   const [sphere] = useState(() => inSphere(new Float32Array(1000), { radius: 2 }))
//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10
//     ref.current.rotation.y -= delta / 15
//   })
//   return (
//     <group rotation={[-20, -40, Math.PI / 10]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
//         <PointMaterial transparent color="#ffa0e0" size={0.02} sizeAttenuation={true} depthWrite={false} />
//       </Points>
//     </group>
//   )
// }


import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ATest = () => {
  // const videos = ["./test1.mp4", "./2.mp4", "./mo.mov"];
  // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  // const [isStoped, setIsStoped] = useState(false);
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const canvasRef = useRef<HTMLCanvasElement>(null);

  // const [videoSrc, setVideoSrc] = useState(videos[0]);
  // const particleCount = 50; // 粒子数量
  // const radius = 150; // 圆的半径
  // let particles: any = [];
  // const speedFactor = 0.1; // 减小速度系数以降低粒子运动速度
  // const innerSpeedFactor = 0.5

  // useEffect(() => {
  //   const video = videoRef.current!;
  //   const canvas = canvasRef.current!;
  //   const ctx = canvasRef.current!.getContext('2d')!;
  //   video.src = './test1.mp4';

  //   video.play();

  //   // 初始化 Canvas 尺寸
  //   video.addEventListener('loadeddata', () => {
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;
  //   });

  //   // 在 video 的时间更新时将当前帧绘制到 Canvas
  //   video.addEventListener('timeupdate', () => {
  //     ctx.drawImage(
  //       video,
  //       (canvas.width - video.videoWidth) / 2,
  //       (canvas.height - video.videoHeight) / 2,
  //       video.videoWidth,
  //       video.videoHeight
  //     );
  //   });

  //   // 监听视频结束事件
  //   video.addEventListener('ended', () => {
  //     createParticles();
  //     animateParticles();
  //   });

  //   // 清除事件监听器，防止内存泄漏
  //   return () => {
  //     video.removeEventListener('loadeddata', () => { });
  //     video.removeEventListener('timeupdate', () => { });
  //     video.removeEventListener('ended', () => { });
  //   };
  // }, []); // 添加空依赖项数组



  // function createParticles() {
  //   particles = []; // 先清空粒子数组
  //   const ctx = canvasRef.current!.getContext('2d')!;
  //   const canvas = canvasRef.current!;
  //   const video = videoRef.current!;
  //   const centerX = 200;
  //   const centerY = 200;

  //   const imageData = ctx.getImageData(
  //     (canvas.width - video.videoWidth) / 2,
  //     (canvas.height - video.videoHeight) / 2,
  //     video.videoWidth,
  //     video.videoHeight
  //   );

  //   for (let i = 0; i < particleCount; i++) {
  //     const x = Math.random() * canvas.width;
  //     const y = Math.random() * canvas.height;
  //     const angle = Math.random() * Math.PI * 2; // 随机角度
  //     const targetX = centerX + Math.cos(angle) * Math.random() * radius; // 圆形内任意位置
  //     const targetY = centerY + Math.sin(angle) * Math.random() * radius;

  //     particles.push({
  //       x: x,
  //       y: y,
  //       opacity: 0.1,
  //       color: `#FFFFFF`,
  //       size: Math.random() * 2 + 1,
  //       velocityX: (targetX - x) / 100 * speedFactor, // 调整速度
  //       velocityY: (targetY - y) / 100 * speedFactor,
  //       targetX: targetX,
  //       targetY: targetY,
  //     });
  //   }
  // }


  // 动画粒子
  // function animateParticles() {
  //   const centerX = window.innerWidth / 2;
  //   const centerY = window.innerHeight / 2;
  //   const ctx = canvasRef.current!.getContext('2d')!;
  //   const canvas = canvasRef.current!;
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);

  //   particles.forEach((particle) => {
  //     ctx.fillStyle = particle.color;
  //     ctx.beginPath();
  //     ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
  //     ctx.fill();

  //     // 更新粒子位置朝向目标位置
  //     particle.x += particle.velocityX;
  //     particle.y += particle.velocityY;

  //     // 如果粒子在圆形区域内，减慢速度变化
  //     if (Math.hypot(particle.x - centerX, particle.y - centerY) <= radius) {
  //       particle.velocityX += (Math.random() - 0.5) * 0.001; // 调整速度变化
  //       particle.velocityY += (Math.random() - 0.5) * 0.001;
  //       particle.color = 'red'
  //       particle.opacity = 0
  //     } else {
  //       // 保持在圆形区域内
  //       const angle = Math.atan2(particle.y - centerY, particle.x - centerX);
  //       particle.velocityX = -Math.cos(angle) * innerSpeedFactor; // 调整速度变化
  //       particle.velocityY = -Math.sin(angle) * innerSpeedFactor;
  //       particle.color = 'blue'
  //       particle.opacity = 0.5


  //     }
  //   });

  //   requestAnimationFrame(animateParticles);
  // }



  // useEffect(() => {
  //   if (isStoped) {
  //     playVideo()
  //   }
  // }, [videoSrc])

  // const playVideo = () => {
  //   console.log('videovideo', videoSrc);
  //   videoRef.current!.src = videoSrc
  //   videoRef.current?.play()

  // }

  // useEffect(() => {

  //   const interval = setInterval(() => {
  //     setTimeout(() => {

  //       setCurrentVideoIndex((prevIndex) => {
  //         const nextIndex = (prevIndex + 1) % videos.length;

  //         console.log('nextIndex', nextIndex);
  //         setVideoSrc(videos[nextIndex]);

  //         if (nextIndex === videos.length - 1) {
  //           setIsStoped(true);
  //           clearInterval(interval);
  //         }
  //         return nextIndex;
  //       });
  //     }, 1000);

  //   }, 10000);






  //   videoRef.current?.addEventListener('ended', () => {
  //     videoRef.current!.src = './cicle.mov'
  //     videoRef.current?.play()

  //     console.log('视频已结束', videoRef.current?.currentTime, videoRef.current?.duration);

  //   })
  // }, [])










  // const createMesh = (url, scene) => {
  //   console.log('urlurl', url);

  //   // 创建三维球体
  //   const geometry = new THREE.SphereGeometry(100, 60, 40)
  //   geometry.scale(-1, 1, 1)
  //   // 创建纹理加载器
  //   const video = document.createElement('video')
  //   video.src = url
  //   // video.loop = true;
  //   video.muted = true;
  //   video.play();


  //   video.addEventListener('ended', () => {
  //     console.log('Video ended222!');
  //     video.src = ''
  //     video.src = '/oll.mp4'
  //     video.play();
  //   });
  //   const texture = new THREE.VideoTexture(video)


  //   texture.needsUpdate = true
  //   const material = new THREE.MeshBasicMaterial({
  //     map: texture, // 颜色贴图
  //   })
  //   const mesh = new THREE.Mesh(geometry, material)
  //   scene.add(mesh)
  //   return mesh
  // }


  // useEffect(() => {
  //   const innerSize = {
  //     width: 400,
  //     height: 400
  //   }

  //   const initObj = () => {
  //     const { width, height } = innerSize
  //     const obj = {
  //       scene: new THREE.Scene(),
  //       camera: new THREE.PerspectiveCamera(55, width / height, 1, 1000),
  //       renderer: new THREE.WebGLRenderer()
  //     }
  //     obj.camera.position.set(10, 0, 0)
  //     obj.camera.lookAt(0, 0, 0)
  //     obj.renderer.setSize(width, height)
  //     obj.renderer.render(obj.scene, obj.camera)
  //     document.body.appendChild(obj.renderer.domElement)
  //     return obj
  //   }
  //   const obj = initObj()

  //   const interval = setInterval(() => {
  //     setTimeout(() => {

  //       setCurrentVideoIndex((prevIndex) => {
  //         const nextIndex = (prevIndex + 1) % videos.length;
  //         console.log('nextIndex', nextIndex);
  //         createMesh(videos[nextIndex], obj.scene)

  //         if (nextIndex === videos.length - 1) {
  //           setIsStoped(true);
  //           clearInterval(interval);
  //         }
  //         return nextIndex;
  //       });
  //     }, 1000);

  //   }, 10000);


  //   const animationIng = () => {
  //     obj.renderer.render(obj.scene, obj.camera)
  //     requestAnimationFrame(animationIng)
  //   }
  //   animationIng()

  //   return () => clearInterval(interval);

  // }, [isStoped])



  return <>
    <div>222</div>
    {/* <video ref={videoRef} muted />
    <canvas ref={canvasRef} /> */}
  </>
}

export default ATest




